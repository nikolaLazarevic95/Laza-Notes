import { createSlice } from "@reduxjs/toolkit";

const initialUISlice = { isSignedIn: null, userEmail: null };

const UISlice = createSlice({
    name: "auth",
    initialState: initialUISlice,
    reducers: {},
});

export const authActions = UISlice.actions; // to be imported to the component you need it
export default UISlice.reducer;
