
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// const firebaseConfig = {
//     apiKey: "AIzaSyB8T3sRlb42PTz07DCFe_XvOtfddglp6ag",
//     authDomain: "user-auth-39053.firebaseapp.com",
//     databaseURL: "https://user-auth-39053-default-rtdb.firebaseio.com",
//     projectId: "user-auth-39053",
//     storageBucket: "user-auth-39053.appspot.com",
//     messagingSenderId: "515168843941",
//     appId: "1:515168843941:web:ce408dd69606d1cdb2754c"
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
// export const database = getDatabase(app);
// export { auth }



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// le - libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAz-eX21sZHFjXtdfmMa-VLNSVg7mqUNrE",
//     authDomain: "user-auth3-ca5f1.firebaseapp.com",
//     projectId: "user-auth3-ca5f1",
//     storageBucket: "user-auth3-ca5f1.appspot.com",
//     messagingSenderId: "105720529924",
//     appId: "1:105720529924:web:130e437f9c9bb27e2e2151"
// };

// // Initialize Firebase

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const provider = new GoogleAuthProvider()
// export const auth = getAuth(app)
// export const db = getFirestore(app);


import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBm-vW7tDS52WbYYxRy2yb_CdV2zcsJvfA",
    authDomain: "user-auth4-2b9f6.firebaseapp.com",
    projectId: "user-auth4-2b9f6",
    storageBucket: "user-auth4-2b9f6.appspot.com",
    messagingSenderId: "462248950307",
    appId: "1:462248950307:web:0d72b049c40c43901f4f96",
    measurementId: "G-L08B8X6LRF"
};
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
}
else {
    app = firebase.app()
}
const db = app.firestore();
const auth = firebase.auth()
export { db, auth }

//   // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBm-vW7tDS52WbYYxRy2yb_CdV2zcsJvfA",
//   authDomain: "user-auth4-2b9f6.firebaseapp.com",
//   projectId: "user-auth4-2b9f6",
//   storageBucket: "user-auth4-2b9f6.appspot.com",
//   messagingSenderId: "462248950307",
//   appId: "1:462248950307:web:0d72b049c40c43901f4f96",
//   measurementId: "G-L08B8X6LRF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);