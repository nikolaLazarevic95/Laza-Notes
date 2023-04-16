import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isSignedIn: null, userEmail: null };

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        setUsername(state, action) {
            state.userEmail = action.payload;
            // console.log(action);
        },
    },
});

export const authActions = authSlice.actions; // to be imported to the component you need it
export default authSlice.reducer;
