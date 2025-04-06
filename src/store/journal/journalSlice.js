import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSaving: true,
    messageSaved: "",
    notes: [],
    active: null
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        addNewEmptyNote: (state, action) => { },
        deleteNoteById: (state, action) => { },
        setActiveNote: (state, action) => { },
        setNotes: (state, action) => { },
        setSaving: (state, action) => { },
        updateNote: (state, action) => { },
    }
});


// Action creators are generated for each case reducer function
export const {
    addNewEmptyNote,
    deleteNoteById,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote
} = journalSlice.actions;