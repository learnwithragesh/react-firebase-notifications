importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyAStlVEkWwunW-BCPYGBNJ4i7Vqg_ls088",
    authDomain: "dz-0000343-81q9og.firebaseapp.com",
    projectId: "dz-0000343-81q9og",
    storageBucket: "dz-0000343-81q9og.appspot.com",
    messagingSenderId: "619692547236",
    appId: "1:619692547236:web:1f1713434b17b9a7f89a31",
    measurementId: "G-SG9MX4KCTE",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("../firebase-messaging-sw.js")
      .then(function (registration) {
        console.log("Registration successful, scope is:", registration.scope);
      })
      .catch(function (err) {
        console.log("Service worker registration failed, error:", err);
      });
  }