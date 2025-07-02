const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));

app.get('/api/ping', (req, res) => {
  res.send('Pong from Firebase Function!');
});

exports.api = functions.https.onRequest(app);