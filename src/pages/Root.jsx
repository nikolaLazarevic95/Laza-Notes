import { Outlet, useLoaderData } from "react-router-dom";
import MainPageScreen from "../components/MainScreen";

function Root() {
    const token = useLoaderData();

    return (
        <>
            {!token && (
                <main>
                    <Outlet />
                </main>
            )}
            {token && <MainPageScreen />}
        </>
    );
}

export default Root;
