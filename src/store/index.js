import { createStore } from "redux";

const notesReducer = (state = { isSignedIn: null }, action) => {
    if (action.type === "signUp") {
        return {
            counter: state.isLoggedIn(true),
        };
    }
    if (action.type === "signIn") {
        return {
            counter: state.isLoggedIn(true),
        };
    }

    if (action.type === "signOut") {
        return {
            counter: state.isLoggedIn(false),
        };
    }

    return state;
};

const store = createStore(notesReducer);

export default store;
