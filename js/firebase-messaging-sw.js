// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');


  var config = {
    apiKey: "AIzaSyB3KmqQ8pi2HLx5AbWUhQtC3Hjg4aVsy6s",
    authDomain: "tgcgh-12f3d.firebaseapp.com",
    databaseURL: "https://tgcgh-12f3d.firebaseio.com",
    storageBucket: "tgcgh-12f3d.appspot.com",
    messagingSenderId: "287082907847"
  };
  firebase.initializeApp(config);

  // Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: 'logo.png'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
