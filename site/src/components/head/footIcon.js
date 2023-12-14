import { Grid } from "@mui/material"

export default function FootIcon({ url,mt }) {
    return (
        <>
            <Grid item sm={4} xs={4} md={2} sx={{mt:mt}}>
                <img src={url} alt="" width="120px"></img>
            </Grid>
        </>
    )
}