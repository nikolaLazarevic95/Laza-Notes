import { redirect } from "react-router-dom";
export function getAuthToken() {
    const token = localStorage.getItem("token");
    return token;
}

export function tokenLoader() {
    return getAuthToken();
}

export function checkIfLoggedIn({ request }) {
    const token = getAuthToken();
    if (token) {
        return redirect("/notes");
    }

    //da usemeri gde treba ako nema moda u url
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get("mode");

    // console.log(JSON.stringify(mode));
    if (!mode) {
        // console.log(mode);
        return redirect("/auth?mode=signUp");
    }
    return null;
}
export function checkAuthLoader() {
    const token = getAuthToken();

    if (!token) {
        return redirect("/auth?mode=signUp"); //matke pomogao
    }
    return null;
}
