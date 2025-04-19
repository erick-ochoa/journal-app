import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal/journalSlice"


export const SidebarItem = ({ id, title, body, date, imagesUrls = [] }) => {

    const dispatch = useDispatch()
    const onActiveNote = () => {
        dispatch(setActiveNote({ id, title, body, date, imagesUrls }))
    }

    if (title.length > 17) {
        title = title.substring(0, 17) + '...'
    }

    if (body.length > 17) {
        body = body.substring(0, 17) + '...'
    }

    return (
        <ListItem disablePadding onClick={onActiveNote}>
            <ListItemButton >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={title} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
