import { App } from '../src/components/App'
import theme from '../src/theme';
import { ThemeProvider } from '@material-ui/core';
function HomePage() {
    return <>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </>
}

export default HomePage