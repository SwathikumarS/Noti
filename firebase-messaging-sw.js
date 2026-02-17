importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// TODO: Replace with your actual Firebase Project Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhpNseU3qYU5-a-KyvOUfPIPBhh9Wef58",
  authDomain: "makkaldms.firebaseapp.com",
  projectId: "makkaldms",
  storageBucket: "makkaldms.firebasestorage.app",
  messagingSenderId: "878587018046",
  appId: "1:878587018046:web:c785a8abf4b2e4caba4a6f",
  measurementId: "G-CYMC2XPES6"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Background Message Handler
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  // Customize notification here/title/body logic
  const notificationTitle = payload.notification.title || 'New Notification';
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'icon-192.png', // Ensure this exists in root
    data: payload.data
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
