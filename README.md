#### Push notification with Google Firebase Cloud Messaging (FCM) using Node.js

## To implement push notifications with Google Firebase Cloud Messaging (FCM) using Node.js, you'll need to follow these general steps:

1. Set Up Firebase Project:
    - Go to the Firebase Console.
    - Create a new project.
    - Go to Project Settings > Cloud Messaging and note down the Server Key and Sender ID.

2. Install Required Packages:
    - Install the firebase-admin package to interact with Firebase from your Node.js server.
    `npm install firebase-admin`

3. Initialize Firebase in your Node.js Application and refer 

    - sendPushNotificationToSpecificDevice.js to send notification to a specific user
    - sendPushNotificationToSubscirbedTopic.js to send notifications without explicitly specifying individual device tokens by using topics. Devices subscribed to topics, and messages sent to that topic are delivered to all devices subscribed to it.
