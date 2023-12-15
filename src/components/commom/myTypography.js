import { Typography } from "@mui/material"


function SubTitle1({ content }) {
    return (
        <Typography
            sx={{
                fontSize: {
                    xs: '20px',
                    sm: '24px',
                    md: '24px',
                    lg: '32px',
                    xl: '36px',
                },
                fontWeight: 900,
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
                fontSize: {
                    xs: '16px',
                    sm: '16px',
                    md: '16px',
                    lg: '16px',
                    xl: '22px',
                },
                fontWeight: 900,
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
                fontSize: {
                    xs: '16px',
                    sm: '16px',
                    md: '16px',
                    lg: '18px',
                    xl: '18px',
                },
                fontWeight:550
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
                fontSize: {
                    xs: '16px',
                    sm: '16px',
                    md: '16px',
                    lg: '16px',
                    xl: '16px',
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
                fontSize: {
                    xs: '20px',
                    sm: '24px',
                    md: '24px',
                    lg: '30px',
                    xl: '30px',
                },
                fontWeight:500,
                mt:15
            }}
        >
            {content}
        </Typography>
    )
}

export { SubTitle1, SubTitle2, Sub1Content, Sub2Content, FootContent }