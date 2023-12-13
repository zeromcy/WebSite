import { Grid, List, ListItem, Link, ListItemText, Paper, Typography } from "@mui/material"
import CustomizedAccordions from "./MyAccordion"
export default function SubNine() {

    return (
        <>
            <Typography variant='h3' sx={{ mt: 15 }}>
                Questions & answers
            </Typography>
            <CustomizedAccordions/>
        </>
    )
}