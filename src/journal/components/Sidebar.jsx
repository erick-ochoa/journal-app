import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export const Sidebar = ({ drawerWidth }) => {
    const { displayName } = useSelector(state => state.auth)
    return (
        <Box component={"nav"} sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} >
            <Drawer
                variant="permanent"
                open={true}
                sx={{
                    display: { xd: "block" },
                    "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component={"div"}>
                        {displayName}
                    </Typography>
                </Toolbar>

                <Divider />

                <List>
                    {
                        [
                            'Enero',
                            'Febrero',
                            'Marzo',
                            'Abril',
                            'Mayo',
                            'Junio',
                            'Julio',
                            'Agosto',
                            'Septiembre',
                            'Octubre',
                            'Noviembre',
                            'Diciembre'
                        ].map(text => (
                            <ListItem key={text}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'Entrada de menu'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>

                        ))
                    }
                </List>

            </Drawer>
        </Box>
    )
}
