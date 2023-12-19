import { Grid } from "@mui/material";
import { Sub2Content, SubTitle1 } from "../home/commom/myTypography";
import { MyDivider } from "./common";

export default function Title() {
    return (
        <Grid item sm={12} xs={12}>
            <Grid container>
                <SubTitle1 content={'👋 We’re Marie & Filip,'}></SubTitle1>
                <Sub2Content content={'Co-founders at work and partners in life. In the summer of 2020 we decided to start building the simplest way to create forms, for free. As makers and frequent form users, we were unsatisfied with the existing form building tools out there. They either force you in a specific format or bombard you with countless paywalls. We wanted a simple, yet powerful form builder that allows you to create any type of form without breaking the bank.'}></Sub2Content>
            </Grid>
            <MyDivider/>
        </Grid>
    )
}