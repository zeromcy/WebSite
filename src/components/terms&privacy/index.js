import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { MyDivider } from "../aboutus/common";
import { SubTitle1 } from "../home/commom/myTypography";
import { Link, Outlet } from "react-router-dom";
export default function TP(){
    return (
        <Container>
            <SubTitle1 content='Terms & Privacy'></SubTitle1>
            <Typography color='text.secondary' variant='body1' sx={{my:5}}>Learn more about our terms and privacy regulations. </Typography>
            <MyDivider/>
            <ul>
                <li>
                    <Typography variant="h6">
                        <Link to='/tp/privacy' >Privacy Policy</Link>
                    </Typography>
                </li>
                <li>
                    <Typography variant="h6">
                        <Link to='cookie' >Cookie Policy</Link>
                    </Typography>
                </li>
                <li>
                    <Typography variant="h6">
                        <Link to='terms' >Terms & Conditions</Link>
                    </Typography>
                </li>
            </ul>
            <Outlet/>
        </Container>
    )
}