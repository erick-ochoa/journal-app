import { Box, Toolbar } from "@mui/material"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }}>

            {/* Navbar */}
            <Navbar drawerWidth={drawerWidth} />

            {/* Sidebar */}
            <Sidebar drawerWidth={drawerWidth} />

            <Box component={"main"} sx={{ flexGrow: 1, p: 1 }}>

                {/* Toolbar */}
                <Toolbar />

                {children}

            </Box>
        </Box>
    )
}
