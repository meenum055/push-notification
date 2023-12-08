const admin = require('firebase-admin');

// Load your Firebase service account key JSON file
const serviceAccount = require('./path/to/your/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const messaging = admin.messaging();

// Function to send a push notification to a specific device
function sendPushNotification(token, title, body) {
    const message = {
        token: token,   //device_token
        notification: {
            title: title,
            body: body,
        },
    };

    messaging
        .send(message)
        .then((response) => {
            console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.error('Error sending message:', error);
        });
}

// Example usage in your application
const userDeviceToken = 'DEVICE_TOKEN'; // The device token of the user you want to send the notification to
const notificationTitle = 'New Message';
const notificationBody = 'You have a new message!';

sendPushNotification(userDeviceToken, notificationTitle, notificationBody);
