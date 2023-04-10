import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuW5oe4scG7Tutkkm-xdovSk1bCBFUy3o",
    authDomain: "notes-app-react-3b950.firebaseapp.com",
    projectId: "notes-app-react-3b950",
    storageBucket: "notes-app-react-3b950.appspot.com",
    messagingSenderId: "770951680515",
    appId: "1:770951680515:web:67f9fc738b976947983436",
    measurementId: "G-6KCYSW89VX",
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

const db = getFirestore(); // initialize services

const colRef = collection(db, "notes"); //collection data

//getting data test
getDocs(colRef)
    .then((snapshot) => {
        // get collection data
        let notes = [];
        snapshot.docs.forEach((doc) => {
            notes.push({ ...doc.data(), id: doc.id });
        });
        // console.log(notes);
    })
    .catch((err) => {
        console.log(err.message);
    });

//subscribing to auth changes
onAuthStateChanged(auth, (user) => {
    // console.log("user status changed: ", user);
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
