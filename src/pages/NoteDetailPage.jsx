// import { useParams } from "react-router-dom";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import NoteItem from "../components/NoteItem";
import { useLoaderData } from "react-router-dom";

function NoteDetailPage() {
    const note = useLoaderData();

    // const params = useParams();
    //! route loader data da passs down note to NoteItem component
    return (
        <>
            <NoteItem note={note} />
            {/* <p>{params.noteId} </p> */}
        </>
    );
}

// za taj note ID loader

export async function loader({ request, params }) {
    const id = params.noteId;
    const db = getFirestore();
    const docRef = doc(db, "notes", id);
    // let note = null;
    let note = {};

    await onSnapshot(docRef, (doc) => {
        note = { ...doc.data(), id };
        // note = doc.data();
        // console.log(note);
    });

    return note || null;
}

//!Action za edit note

export default NoteDetailPage;
