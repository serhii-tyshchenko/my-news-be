const { google } = require('googleapis');

const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
const serviceEmail = process.env.GOOGLE_SERVICE_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

function checkEnv() {
  if (!spreadsheetId || !serviceEmail || !privateKey) {
    throw new Error('Missing Google Sheets environment variables');
  }
}

async function authenticate() {
  checkEnv();
  const client = new google.auth.JWT({
    email: serviceEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  await client.authorize();
  return client;
}

async function getProviders() {
  const auth = await authenticate();
  const sheets = google.sheets({ version: 'v4', auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'providers!A1:Z',
  });
  const headers = response.data.values[0];
  const data = response.data.values.slice(1);
  return data.map((row) =>
    row.reduce((acc, cell, index) => {
      acc[headers[index]] = cell;
      return acc;
    }, {})
  );
}

async function searchProviders(query) {
  const providers = await getProviders();
  return providers.filter((provider) =>
    Object.values(provider).some((value) =>
      value.toLowerCase().includes(query.toLowerCase())
    )
  );
}

module.exports = { getProviders, searchProviders };
