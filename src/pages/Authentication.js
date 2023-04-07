import { redirect } from "react-router-dom";
import SignUp from "../components/SignForm";
import { auth } from "../index";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
function SignUpPage() {
    return (
        <>
            <SignUp />
        </>
    );
}

export async function action({ request, params }) {
    const data = await request.formData();

    const authData = {
        email: data.get("email"),
        password: data.get("password"),
    };
    createUserWithEmailAndPassword(auth, authData.email, authData.password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        });

    // console.log(authData);
    return redirect("/");
}

export default SignUpPage;
