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
            state.messageSaved = '';
        },
        addNewEmptyNote: (state, { payload }) => {
            state.notes.push(payload)
            state.isSaving = false
        },
        deleteNoteById: (state) => { },
        setActiveNote: (state, { payload }) => {
            state.active = payload
            state.messageSaved = '';
        },
        setNotes: (state, { payload }) => {
            state.notes = payload
        },
        setSaving: (state) => {
            state.isSaving = true
            state.messageSaved = ''
        },
        updateNote: (state, { payload }) => {
            state.isSaving = false
            state.notes = [
                payload,
                ...state.notes.filter(note => note.id != payload.id)
            ]

            state.messageSaved = 'Se actualizo la nota correctamente'
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