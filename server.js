const { google } = require("googleapis");

const { OAuth2 } = google.auth;

const OAuth2Client = new OAuth2(
  "238664544970-p16iagoeqkb1i51eov1idjapt7452fm4.apps.googleusercontent.com",
  "0kb1OIaqWWOEqZnjO9IY931y"
);

OAuth2Client.setCredentials({
  refresh_token:
    "1//04C4nV0jgbYzlCgYIARAAGAQSNgF-L9Ir5Jk2fo4EYt1FQ06xGDHTVFHu9vISEsHHSz0h_q5QSebf8fVERtD253o2747Px7IwkQ",
});

const calender = google.calendar({ version: "v3", auth: OAuth2Client });

const eventStartTime = new Date();
eventStartTime.setDate(eventStartTime.getDate() + 2);
const eventEndTime = new Date();
eventEndTime.setDate(eventEndTime.getDate() + 2);
eventEndTime.setMinutes(eventEndTime.getMinutes() + 50);

const event = {
  summary: "Meet with Sachin.",
  localtion: "701, Atulya IT Park, Indore, MP, India",
  description: "Meeting with Sachin to talk about new node goolge calender api",
  start: {
    dateTime: eventStartTime,
    timezone: "Asia/Calcutta|Asia/Kolkata",
  },
  end: {
    dateTime: eventEndTime,
    timezone: "Asia/Calcutta|Asia/Kolkata",
  },
  colorId: 1,
};

calender.events.insert({ calendarId: "primary", resource: event }, (err) => {
  if (err) {
    console.log(error);
  } else {
    console.log("Calender Event Created");
  }
});
