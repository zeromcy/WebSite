import { Link, Typography } from "@mui/material";

function MyLink1({ id, name }) {
    return (
        <Typography color='text.secondary'>
            <Link href={id}>{name}</Link>
        </Typography>
    )
}

function MySpan({ id, name }) {
    return (
        <h2 id={id}>
            <span>
                <span class="notion-h-title"><b>{name}</b></span>
            </span>
        </h2>
    )
}

function PolicyTypography({content}){
    return (
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
                }}>{content}</Typography>
    )
}

export {MySpan,MyLink1,PolicyTypography}