import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './components/buttonStyles'
import "@fontsource/monda"
import "@fontsource/roboto"


export const brandTheme = extendTheme({
    colors: {
        primary: "#142864",
        primaryWhiten: "#232397",
        primaryDarken: '#141464',
        secondary: "#017EFA",
        secondaryWhiten: "#419CF5",
        secondaryDarken: "#0060BF",
        ternary: "#F3F6F9",
        danger: "#D7271C",
        dangerWhiten: "#FD3326",
        dangerDarken: "#B9170C",
    },
    components: {
        Button
    },
    fonts: {
        heading: "Monda",
        body: "Roboto"
    }
})