import { addDoc } from "firebase/firestore";
import CreateNote from "../components/CreateNote";
import NotesList from "../components/NotesList";
import { colRef } from "..";

function NotesPage() {
    return (
        <>
            <CreateNote />
            <NotesList />
        </>
    );
}

export default NotesPage;

export async function action({ request, response }) {
    const data = await request.formData();
    const noteData = {
        title: data.get("title"),
        description: data.get("description"),
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
