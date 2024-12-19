const { google } = require('googleapis');
require('dotenv').config();

// TODO move db-related code to a separate module

const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
const serviceEmail = process.env.GOOGLE_SERVICE_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

async function authenticate() {
  try {
    const client = new google.auth.JWT({
      email: serviceEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    await client.authorize();
    return client;
  } catch (error) {
    console.error('Error during authentication:', error);
    throw new Error('Failed to authenticate');
  }
}

async function getTableData(auth) {
  try {
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
  } catch (error) {
    console.error('Error fetching table data:', error);
    throw new Error('Failed to fetch table data');
  }
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
