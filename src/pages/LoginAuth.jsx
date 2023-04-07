import { redirect } from "react-router-dom";
import { auth } from "../index";
import { signInWithEmailAndPassword } from "firebase/auth";
import LogInForm from "../components/LogInForm";
// import { createUserWithEmailAndPassword } from "firebase/auth";
function LoginAuth() {
    return (
        <>
            <LogInForm />
        </>
    );
}

export async function action({ request, params }) {
    const data = await request.formData();

    const authData = {
        email: data.get("email"),
        password: data.get("password"),
    };
    signInWithEmailAndPassword(auth, authData.email, authData.password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        });

    // console.log(authData);
    return redirect("/");
}

export default LoginAuth;
