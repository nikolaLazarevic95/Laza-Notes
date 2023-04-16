import { Outlet } from "react-router-dom";
// import MainPageScreen from "../components/MainScreen";

function Root() {
    // const token = useLoaderData();

    return (
        <>
            {/* {token && <MainPageScreen />} */}

            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Root;
