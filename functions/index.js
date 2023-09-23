/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { Messaging } = require("firebase-admin");

admin.initializeApp();

const messaging = admin.messaging();

exports.scheduleNotification = functions.pubsub
  .schedule("0 22 * * *")
  .timeZone("Etc/UTC")
  .onRun((context) => {
    // This function runs every day at 10 pm (UTC timezone)

    // Define your notification message
    const message = {
      notification: {
        title: "Reminder",
        body: "Don't forget to fill your gratitude journal!",
      },
      // Add any additional data here
    };

    // Get the FCM tokens of users you want to notify and send the message
    const tokens = ["USER_FCM_TOKEN_1", "USER_FCM_TOKEN_2"];
    return messaging.send(message);
  });
