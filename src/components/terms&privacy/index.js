import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { MyDivider } from "../aboutus/common";
import { SubTitle1 } from "../home/commom/myTypography";
import {Link} from "@mui/material";
export default function TP(){
    return (
        <Container>
            <SubTitle1 content='Terms & Privacy'></SubTitle1>
            <Typography color='text.secondary' variant='body1' sx={{my:5}}>Learn more about our terms and privacy regulations. </Typography>
            <MyDivider/>
            <ul>
                <li>
                    <Typography variant="h6">
                        <Link href='privacy' target="_blank">Privacy Policy</Link>
                    </Typography>
                </li>
                <li>
                    <Typography variant="h6">
                        <Link href='cookie' target="_blank">Cookie Policy</Link>
                    </Typography>
                </li>
                <li>
                    <Typography variant="h6">
                        <Link href='terms' target="_blank">Terms & Conditions</Link>
                    </Typography>
                </li>
            </ul>
        </Container>
    )
}