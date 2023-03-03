const express = require('express');
const moment = require('moment');

const app = express();

app.get('/', (req, res) => {
  const now = moment().format('MMMM Do YYYY, h:mm:ss a');
  const html = `
    <html>
      <head>
        <title>Express Time</title>
      </head>
      <body>
        <h1>The current time is:</h1>
        <p>${now}</p>
      </body>
    </html>
  `;
  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});