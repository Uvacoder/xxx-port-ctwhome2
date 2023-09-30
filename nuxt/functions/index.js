const functions = require('firebase-functions')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const admin = require('firebase-admin')
admin.initializeApp()

exports.hitCounter = functions.https.onRequest((req, res) => {
  const counterRef = admin.database().ref('/hit_counter')
  return counterRef
    .transaction((current) => {
      return (current || 0) + 1
    })
})
