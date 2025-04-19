import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal/journalSlice"


export const SidebarItem = ({ id, title, body, date, imagesUrls = [] }) => {

    const dispatch = useDispatch()
    const onActiveNote = () => {
        dispatch(setActiveNote({ id, title, body, date, imagesUrls }))
    }

    return (
        <ListItem disablePadding onClick={onActiveNote}>
            <ListItemButton >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={title.length > 17 ? title.substring(0, 17) + '...' : title} />
                    <ListItemText secondary={body.length > 17 ? body.substring(0, 17) + '...' : body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
