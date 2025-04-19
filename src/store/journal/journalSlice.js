import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true
        },
        addNewEmptyNote: (state, { payload }) => {
            state.notes.push(payload)
            state.isSaving = false
        },
        deleteNoteById: (state, action) => { },
        setActiveNote: (state, { payload }) => {
            state.active = payload
        },
        setNotes: (state, { payload }) => {
            state.notes = payload
        },
        setSaving: (state, action) => {
            state.isSaving = true
        },
        updateNote: (state, { payload }) => {
            state.isSaving = false
            state.notes = [
                payload,
                ...state.notes.filter(note => note.id != payload.id)
            ]
        },
    }
});


// Action creators are generated for each case reducer function
export const {
    savingNewNote,
    addNewEmptyNote,
    deleteNoteById,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote
} = journalSlice.actions;