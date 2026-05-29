const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

admin.initializeApp();

exports.testProxy = onRequest((request, response) => {
  response.send("System is working!");
});