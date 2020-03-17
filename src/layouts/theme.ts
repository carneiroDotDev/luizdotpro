import { red } from '@material-ui/core/colors'
import { createMuiTheme, Theme } from '@material-ui/core/styles'

const theme: Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFC0CB',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
})

export default theme
