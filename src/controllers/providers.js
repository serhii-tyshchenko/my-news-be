const { google } = require('googleapis');

require('dotenv').config();

const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
const serviceEmail = process.env.GOOGLE_SERVICE_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

async function authenticate() {
  const client = new google.auth.JWT({
    email: serviceEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  await client.authorize();

  return client;
}

async function getTableData(auth) {
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

module.exports = {
  async list(req, res) {
    try {
      const auth = await authenticate();
      const data = await getTableData(auth);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  },
};
