const admin = require('firebase-admin');

// Load your Firebase service account key JSON file
const serviceAccount = require('./path/to/your/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const messaging = admin.messaging();


// Message to be sent
const message = {
    notification: {
        title: 'New Notification Title',
        body: 'New notification available!',
    },
    topic: 'new_notification', // The topic to which the message will be sent
};

// Send the message to the topic
messaging.send(message)
    .then((response) => {
        console.log('Successfully sent message:', response);
    })
    .catch((error) => {
        console.error('Error sending message:', error);
    });
