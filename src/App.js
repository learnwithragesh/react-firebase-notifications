import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAStlVEkWwunW-BCPYGBNJ4i7Vqg_ls088",
  authDomain: "dz-0000343-81q9og.firebaseapp.com",
  projectId: "dz-0000343-81q9og",
  storageBucket: "dz-0000343-81q9og.appspot.com",
  messagingSenderId: "619692547236",
  appId: "1:619692547236:web:1f1713434b17b9a7f89a31",
  measurementId: "G-SG9MX4KCTE",
};
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const vapidKey = "BPuRB2KfgINU3NGXv7t7GW87Qc3ywSBfA186Wcw5jm0JFtfzTWZjuISzkn2TTZ2DW3z9x4nVD2OVNiboyP6gANI";

function App() {

  let [token, setToken] = useState('Nil');
  let [message, setMessage] = useState('Nil');

  getToken(messaging, { vapidKey }).then((currentToken) => {
    setToken(currentToken);
  }).catch((err) => {
    console.log(err);
    setToken("Error");
  });

  onMessage(messaging, (payload) => {
    console.log(payload);
    let { title, body } = payload.notification;
    setMessage(`${title}: ${body}`);
  });

  return (
    <div className="App">
      Token: {token}
      <br/>
      Message: {message}
    </div>
  );
}

export default App;
