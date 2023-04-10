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
    authError = null;

    const data = await request.formData();

    const authData = {
        email: data.get("email"),
        password: data.get("password"),
    };
    await createUserWithEmailAndPassword(
        auth,
        authData.email,
        authData.password
    )
        .then((userCredential) => {
            console.log(userCredential);
            const token = userCredential.user.accessToken;
            localStorage.setItem("token", token);
            // return redirect("/");
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
    return redirect("/");
}

export default SignUpPage;
