import { createSlice } from "@reduxjs/toolkit";

const initialUISlice = { isOpen: false };

const UISlice = createSlice({
    name: "ui",
    initialState: initialUISlice,
    reducers: {
        setIsOpen(state, action) {
            state.isOpen = action.payload;
        },
        // setIsClose(state, action) {
        //     state.isOpen = action.payload;
        // },
    },
});

export const UIActions = UISlice.actions; // to be imported to the component you need it
export default UISlice.reducer;
