// import { useParams } from "react-router-dom";
import {
    doc,
    getDoc,
    getFirestore,
    onSnapshot,
    updateDoc,
} from "firebase/firestore";
import NoteItem from "../components/NoteItem";
import { redirect, useLoaderData, useRouteLoaderData } from "react-router-dom";
import NotesList from "../components/NotesList";
import CreateNote from "../components/CreateNote";

function NoteDetailPage() {
    const note = useLoaderData();
    const notes = useRouteLoaderData("notesLoader");

    // const params = useParams();
    //! route loader data da passs down note to NoteItem component
    return (
        <>
            <CreateNote />
            <NoteItem note={note} />
            {/* <p>{params.noteId} </p> */}
            <NotesList notes={notes} />
        </>
    );
}

// za taj note ID loader

export async function loader({ request, params }) {
    const id = params.noteId;
    const db = getFirestore();
    const docRef = doc(db, "notes", id);
    const docSnap = await getDoc(docRef);

    // console.log(docSnap.data());
    return docSnap.exists() ? docSnap.data() : null;
    // return docSnap.exists() ? (note = { ...docSnap.data(), id: id }) : null;
}

//!Action za edit note

export async function action({ request, params }) {
    const data = await request.formData();
    const noteData = {
        title: data.get("title"),
        description: data.get("description"),
    };
    if (noteData.title === "" || noteData.description === "") {
        return null;
    }
    const id = params.noteId;
    console.log(id);
    const db = getFirestore();
    const docRef = doc(db, "notes", id);

    // if (noteData.title === "" || noteData.description === "") {
    //     return null;
    // }

    await updateDoc(docRef, {
        title: noteData.title,
        description: noteData.description,
    });

    // window.location.reload();

    return redirect("/notes");
}

export default NoteDetailPage;
