import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SidebarItem } from "./SidebarItem"

export const Sidebar = ({ drawerWidth }) => {
    const { displayName, photoURL } = useSelector(state => state.auth)
    const { notes } = useSelector(state => state.journal)

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
                    <img className="photoURL" src={photoURL} alt="" />
                    <Typography variant="h6" noWrap component={"div"}>
                        {displayName}
                    </Typography>
                </Toolbar>

                <Divider />

                <List>
                    {
                        notes.map(({ id, title, body, date, imagesUrls }) => (
                            <SidebarItem 
                                key={id} 
                                id={id}
                                title={title}
                                body={body}
                                date={date}
                                imagesUrls={imagesUrls}
                            />
                        ))
                    }
                </List>

            </Drawer>
        </Box>
    )
}
