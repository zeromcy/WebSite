import { Typography } from "@mui/material"


function SubTitle1({ content }) {
    return (
        <Typography
            sx={{
                typography: {
                    xs: 'h6',
                    sm: 'h5',
                    md: 'h5',
                    lg: 'h4',
                    xl: 'h4',
                },

                mt:15
            }}
        >
            {content}
        </Typography>
    )
}

function SubTitle2({ content }) {
    return (
        <Typography
            sx={{
                typography: {
                    xs: 'h6',
                    sm: 'h5',
                    md: 'h5',
                    lg: 'h5',
                    xl: 'h5',
                },

            }}
        >
            {content}
        </Typography>
    )
}

function Sub1Content({ content }) {
    return (
        <Typography
            sx={{
                typography: {
                    xs: 'body1',
                    sm: 'body1',
                    md: 'body1',
                    lg: 'body1',
                    xl: 'h5',
                },

            }}
        >
            {content}
        </Typography>
    )
}
function Sub2Content({ content }) {
    return (
        <Typography
            sx={{
                typography: {
                    xs: 'body1',
                    sm: 'body1',
                    md: 'body1',
                    lg: 'body1',
                    xl: 'body1',
                },

            }}
        >
            {content}
        </Typography>
    )
}
function FootContent({ content }) {
    return (
        <Typography
            color='text.secondary'
            align="center"
            sx={{
                typography: {
                    xs: 'h6',
                    sm: 'h5',
                    md: 'h5',
                    lg: 'h4',
                    xl: 'h4',
                },

                mt:15
            }}
        >
            {content}
        </Typography>
    )
}

export { SubTitle1, SubTitle2, Sub1Content, Sub2Content, FootContent }