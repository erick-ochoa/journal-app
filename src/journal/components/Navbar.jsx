import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const Navbar = ({ drawerWidth }) => {
    return (
        <AppBar position="fixed" sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: drawerWidth }
        }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    sx={{ mr: 2, display: { sm: "none" } }}
                >
                    <MenuOutlined></MenuOutlined>
                </IconButton>

                <Grid
                    container
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >

                    <Typography variant="h6" noWrap component={"div"}>
                        JournalApp
                    </Typography>

                    <IconButton>
                        <LogoutOutlined color="error" />
                    </IconButton>

                </Grid>

            </Toolbar>
        </AppBar>
    )
}
