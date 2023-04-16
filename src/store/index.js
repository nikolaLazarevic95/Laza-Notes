import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = { isSignedIn: null, userEmail: null };

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        setUsername(state, action) {
            state.userEmail = action.payload;
            console.log(action);
        },
    },
});

const store = configureStore({
    reducer: authSlice.reducer,
});

export const authActions = authSlice.actions; // to be imported to the component you need it

export default store;
