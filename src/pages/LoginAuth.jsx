import { redirect } from "react-router-dom";
import { auth } from "../index";
import { signInWithEmailAndPassword } from "firebase/auth";
import LogInForm from "../components/LogInForm";
// import { createUserWithEmailAndPassword } from "firebase/auth";
let authError = null;

function LoginAuth() {
    return (
        <>
            <LogInForm />
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
    await signInWithEmailAndPassword(auth, authData.email, authData.password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            authError = error;
            console.log(error);
        });

    // console.log(authData);
    if (authError) {
        return authError;
    }
    return redirect("/");
}

export default LoginAuth;
