import { createMuiTheme } from "@material-ui/core";
import { blue, green } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: green[500],
        },
    },
    typography: {
        fontFamily: ["Open Sans", "Helvetica"].join(","),
    },
});

export default theme;