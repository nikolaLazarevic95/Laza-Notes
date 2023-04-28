import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import DeleteNoteItem from "../../components/note/DeleteNoteItem";
import NotesList from "../../components/note/NotesList";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function TrashDetailPage() {
    const note = useLoaderData();
    const notes = useRouteLoaderData("trashLoader");
    return (
        <>
            <DeleteNoteItem note={note} />
            <NotesList notes={notes} />;
        </>
    );
}

export default TrashDetailPage;

export async function loader({ request, params }) {
    const id = params.noteId;
    const db = getFirestore();
    const docRef = doc(db, "trash", id);
    const docSnap = await getDoc(docRef);

    // console.log(docSnap.data());
    return docSnap.exists() ? docSnap.data() : null;
    // return docSnap.exists() ? (note = { ...docSnap.data(), id: id }) : null;
}
