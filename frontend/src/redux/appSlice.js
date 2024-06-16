import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        open: false,
        selectedMail: null,
        searchText: "",
        emails: null, // This might need to be initialized as an array or object depending on your application logic
        authUser: null,
        refresh: false
    },
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
            state.refresh= !state.refresh
        },
        setSelectedMail: (state, action) => {
            state.selectedMail = action.payload;
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        setEmails: (state, action) => {
             state.emails = action.payload;
        },
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
        },
    }
});




