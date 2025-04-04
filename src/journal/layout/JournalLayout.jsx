import { Box, Toolbar } from "@mui/material"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components/Sidebar";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }} className="animate__animated animate__fadeIn animate__faster">

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
