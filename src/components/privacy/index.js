import { Container } from "@mui/system";
import Head from "./head";
import One from "./sub1";
import Ten from "./sub10";
import Eleven from "./sub11";
import Twelve from "./sub12";
import Two from "./sub2";
import Three from "./sub3";
import Four from "./sub4";
import Five from "./sub5";
import Six from "./sub6";
import Seven from "./sub7";
import Eight from "./sub8";
import Nine from "./sub9";

export default function Policy() {
    return (
        <Container>
            <Head />
            <One/>
            <Two/>
            <Three/>
            <Four/>
            <Five/>
            <Six/>
            <Seven/>
            <Eight/>
            <Nine/>
            <Ten/>
            <Eleven/>
            <Twelve/>
        </Container>
    )
}