import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const Sidebar = ({ drawerWidth }) => {
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
                        Erick Ochoa
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
                            <ListItem>
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
