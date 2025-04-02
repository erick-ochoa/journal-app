import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#34495e'
        },
        secondary: {
            main: '#2e86c1'
        },
        error: {
            main: red.A400
        }
    }
})