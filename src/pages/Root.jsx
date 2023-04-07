import { Outlet } from "react-router-dom";
function Root() {
    return (
        <>
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet />
            </main>
        </>
    );
}

export default Root;
