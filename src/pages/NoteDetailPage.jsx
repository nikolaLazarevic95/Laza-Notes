// import { useParams } from "react-router-dom";
import { doc, getFirestore, onSnapshot, getDoc } from "firebase/firestore";
import NoteItem from "../components/NoteItem";
import { useLoaderData } from "react-router-dom";

function NoteDetailPage() {
  const note = useLoaderData();
  console.log("Note: ", note);

  // const params = useParams();
  //! route loader data da passs down note to NoteItem component
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio et
        fugit, hic veritatis praesentium quibusdam quasi odio repellat maiores
        vel?
      </p>
      <NoteItem note={note} />
      {/* <p>{params.noteId} </p> */}
    </>
  );
}

// za taj note ID loader

export async function loader({ request, params }) {
  console.log("Params: ", params);
  const id = params.noteId;
  const db = getFirestore();
  const docRef = doc(db, "notes", id);
  const docSnap = await getDoc(docRef);

  return docSnap.exists() ? docSnap.data() : null;
}

//!Action za edit note

export default NoteDetailPage;
