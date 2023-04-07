import { redirect } from "react-router-dom";
import SignForm from "../components/SignForm";
import { auth } from "../index";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

let authError = null;

function SignUpPage() {
    return (
        <>
            <SignForm />
        </>
    );
}

export async function action({ request, params }) {
    const data = await request.formData();

    const authData = {
        email: data.get("email"),
        password: data.get("password"),
    };
    const response = await createUserWithEmailAndPassword(
        auth,
        authData.email,
        authData.password
    )
        .then((userCredential) => {
            console.log(userCredential);

            redirect("/");
        })
        .catch((error) => {
            authError = error;
            // return error;
            console.log(error);
        });

    if (authError) {
        return authError;
    }

    // console.log(authError);
    return null;
}

export default SignUpPage;
