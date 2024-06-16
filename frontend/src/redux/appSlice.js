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
    
});




