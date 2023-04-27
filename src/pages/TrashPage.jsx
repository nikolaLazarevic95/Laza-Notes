import { getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useRouteLoaderData } from "react-router-dom";
import NotesList from "../components/NotesList";

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
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app);
const db = getFirestore(); // initialize services
const colRef = collection(db, "trash"); //collection data

const q = query(colRef, orderBy("createdAt"));

function TrashPage() {
    const notes = useRouteLoaderData("trashLoader");
    return (
        <>
            <NotesList notes={notes} />
        </>
    );
}

export default TrashPage;

export async function loader() {
    let notes = [];
    let response = await getDocs(q);
    response.docs.forEach((doc) => {
        notes.push({ ...doc.data(), id: doc.id });
    });
    // console.log(notes);
    return null || notes;
}
