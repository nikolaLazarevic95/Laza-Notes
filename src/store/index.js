import { createStore } from "redux";

const notesReducer = (state = { isLoggedIn: null }, action) => {
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

    if (action.type === "logOut") {
        return {
            counter: state.isLoggedIn(false),
        };
    }

    return state;
};

const store = createStore(notesReducer);

export default store;
