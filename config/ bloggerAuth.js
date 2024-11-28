const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
    "YOUR_CLIENT_ID",
    "YOUR_CLIENT_SECRET",
    "YOUR_REDIRECT_URI"
);

oauth2Client.setCredentials({
    access_token: "YOUR_ACCESS_TOKEN",
    refresh_token: "YOUR_REFRESH_TOKEN",
});

const blogger = google.blogger({
    version: "v3",
    auth: oauth2Client,
});

module.exports = blogger;
