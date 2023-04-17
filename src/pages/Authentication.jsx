import { redirect } from "react-router-dom";
import SignForm from "../components/SignForm";
import { auth } from "../index";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authActions } from "../store/auth";
import store from "../store";

let authError = null;

function Authentication() {
    return (
        <>
            <SignForm />
        </>
    );
}

export async function action({ request, params }) {
    authError = null;
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get("mode") || "signUp";

    const data = await request.formData();
    const authData = {
        email: data.get("email"),
        password: data.get("password"),
    };

    if (mode === "signUp") {
        await createUserWithEmailAndPassword(
            auth,
            authData.email,
            authData.password
        )
            .then((userCredential) => {
                console.log(userCredential);
                const token = userCredential.user.accessToken;
                localStorage.setItem("token", token);
                store.dispatch(
                    authActions.setUsername(userCredential.user.email)
                );
                // return redirect("/");
            })
            .catch((error) => {
                authError = error;
                // return error;
                console.log(error);
            });
    }

    if (mode === "login") {
        await signInWithEmailAndPassword(
            auth,
            authData.email,
            authData.password
        )
            .then((userCredential) => {
                const token = userCredential.user.accessToken;
                localStorage.setItem("token", token);
                store.dispatch(
                    authActions.setUsername(userCredential.user.email)
                );
            })
            .catch((error) => {
                authError = error;
                console.log(error);
            });
    }
    if (authError) {
        return authError;
    }

    return redirect("/notes");
}

export default Authentication;
