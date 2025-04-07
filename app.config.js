require("dotenv").config();

export default {
  expo: {
    extra: {
      firebase: {
        apiKey: process.env.FIREBASE_API_KEY,
      },
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
      },
    },
  },
};
