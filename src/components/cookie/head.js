import { Typography } from "@mui/material";

export default function Head() {
    return (
        <>
            <Typography
                sx={{
                    typography: {
                        xs: 'h6',
                        sm: 'h5',
                        md: 'h5',
                        lg: 'h4',
                        xl: 'h4',
                    },
                    mt: 5
                }}>Cookie Policy</Typography>
            <Typography variant='h6' sx={{ my: 5 }}>Last updated: 24/07/2020</Typography>
            <Typography
                color='text.secondary'
                sx={{
                    typography: {
                        xs: 'body1',
                        sm: 'body1',
                        md: 'body1',
                        lg: 'body1',
                        xl: 'body1',
                    },
                    pt: 1
                }}
            >
                Tally uses cookies in a range of ways to improve your experience on our website, including:
            </Typography>
            <ul>
                <li>
                    <Typography
                        color='text.secondary'
                        sx={{
                            typography: {
                                xs: 'body1',
                                sm: 'body1',
                                md: 'body1',
                                lg: 'body1',
                                xl: 'body1',
                            },
                            pt: 1
                        }}
                    >
                        Keeping you signed in
                    </Typography>
                </li>
                <li>
                    <Typography
                        color='text.secondary'
                        sx={{
                            typography: {
                                xs: 'body1',
                                sm: 'body1',
                                md: 'body1',
                                lg: 'body1',
                                xl: 'body1',
                            },
                            pt: 1
                        }}
                    >
                        Understanding how you use our product
                    </Typography>
                </li>
            </ul>
            <Typography
                color='text.secondary'
                sx={{
                    typography: {
                        xs: 'body1',
                        sm: 'body1',
                        md: 'body1',
                        lg: 'body1',
                        xl: 'body1',
                    },
                    pt: 1
                }}
            >
                In this cookie policy we describe what type of cookies Tally uses and how to disable them. If you cannot find the specific information that you are looking for, feel free to contact us at hello@tally.so.
            </Typography>
        </>
    )
}