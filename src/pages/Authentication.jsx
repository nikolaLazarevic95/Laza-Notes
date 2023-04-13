import { redirect } from "react-router-dom";
import SignForm from "../components/SignForm";
import { auth } from "../index";
import { signInWithEmailAndPassword } from "firebase/auth";
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
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get("mode") || "signUp";

    const data = await request.formData();
    const authData = {
        email: data.get("email"),
        password: data.get("password"),
    };

    if (mode !== "login" && mode !== "signUp") {
        return redirect("auth?mode=login");
    }

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
            })
            .catch((error) => {
                authError = error;
                console.log(error);
            });
    }
    if (authError) {
        return authError;
    }

    // console.log(authError);
    // return redirect("/auth?mode=login");
    return redirect("/");
}

export default SignUpPage;
