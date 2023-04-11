import { redirect } from "react-router-dom";

export function action() {
    // console.log("aha!");
    localStorage.removeItem("token");
    return redirect("/login");
}
