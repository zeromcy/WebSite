import { Grid } from "@mui/material"

export default function FootIcon({ url,mt }) {
    return (
        <>
            <Grid item sm={4} xs={6} md={3} lg={2} sx={{mt:mt}}>
                <img src={url} alt="" width="120px"></img>
            </Grid>
        </>
    )
}