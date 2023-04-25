import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    query,
    orderBy,
    serverTimestamp,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { addDoc, getDocs } from "firebase/firestore";
import CreateNote from "../components/CreateNote";
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
const colRef = collection(db, "notes"); //collection data

const q = query(colRef, orderBy("createdAt", "desc"));

function NotesPage() {
    const notes = useRouteLoaderData("notesLoader");
    return (
        <>
            <CreateNote />
            <NotesList notes={notes} />
        </>
    );
}

export default NotesPage;

export async function loader() {
    let notes = [];
    await getDocs(q)
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                notes.push({ ...doc.data(), id: doc.id });
            });
            // return console.log(notes);
            return notes;
        })
        .catch((err) => {
            console.log(err.message);
        });
    return null || notes;
}

export async function action({ request, response }) {
    const data = await request.formData();
    const noteData = {
        title: data.get("title"),
        description: data.get("description"),
        createdAt: serverTimestamp(),
    };
    // console.log(noteData);
    //? jel valja ovo

    if (noteData.title === "" || noteData.description === "") {
        return null;
    }

    await addDoc(colRef, noteData);
    //treba reload samo ako prodje submit
    window.location.reload();
    return null;
}
