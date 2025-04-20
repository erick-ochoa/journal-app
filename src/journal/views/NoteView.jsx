import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { useEffect } from "react"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSaveNote } from "../../store/journal/thunks"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

    const dispatch = useDispatch()
    const { active: note, isSaving, messageSaved } = useSelector(state => state.journal)
    const { title, body, date, onInputChange, formState } = useForm(note)

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {
        if (messageSaved != '') {
            Swal.fire('Nota actualizada', messageSaved, 'success')
        }
    }, [messageSaved])

    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    return (
        <Grid
            className="animate__animated animate__fadeIn animate__faster"
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            alignSelf="center"
            sx={{ mb: 1 }}
        >
            <Grid item>
                <Typography
                    fontSize={39}
                    fontWeight="light"
                >
                    {new Date(date).toUTCString()}
                </Typography>
            </Grid>

            <Grid item>
                <Button
                    disabled={isSaving}
                    onClick={onSaveNote}
                    color="primary"
                    sx={{ padding: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container sx={{ mt: 2 }}>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Titulo"
                    sx={{ border: "none", mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    minRows={5}
                    placeholder="¿Qué sucedió el día de hoy?"
                    label="Descripción"
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid container sx={{ mt: 3 }} justifyContent={"center"}>
                <ImageGallery />
            </Grid>


        </Grid>
    )
}
