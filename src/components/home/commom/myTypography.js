import { Typography, Avatar, Grid, useTheme, useMediaQuery } from "@mui/material"


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

                mt: 15
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
function SubTitle3({ content }) {
    return (
        <Typography
            sx={{
                typography: {
                    xs: 'h6',
                    sm: 'h6',
                    md: 'h6',
                    lg: 'h6',
                    xl: 'h6',
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
                mb: 1
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
function FootContent({ content, image, name, occ }) {
    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <MyText content={content} />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Grid container sx={{ my: 2 }}>
                        <Grid item md={6} sm={1} xs={1}>
                            <Grid container sx={{ justifyContent: 'flex-end' }}>
                                <Avatar alt="Remy Sharp" src={image} sx={{ px: 2, pt: 1 }} />
                            </Grid>
                        </Grid>
                        <Grid item md={6} sm={11} xs={11}>
                            <Typography variant="h6">{name}</Typography>
                            <Typography variant="body2">{occ}</Typography>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>




        </>
    )
}

function MyText({ content }) {
    const theme = useTheme()
    const match = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>

            {
                match ?
                    <Typography
                        color='text.secondary'
                        align="left"
                        sx={{
                            typography: {
                                xs: 'h6',
                                sm: 'h5',
                            },
                            mt: 5
                        }}
                    >
                        {content}
                    </Typography> :
                    <Typography
                        color='text.secondary'
                        align="center"
                        sx={{
                            typography: {
                                md: 'h5',
                                lg: 'h4',
                                xl: 'h4',
                            },
                            mt: 5
                        }}
                    >
                        {content}
                    </Typography>
            }
        </>
    )
}

export { SubTitle1, SubTitle2, Sub1Content, Sub2Content, FootContent, SubTitle3 }