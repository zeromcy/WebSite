
import { Container } from "@mui/system";
import Head from "./head";
import One from "./sub1";
import Two from "./sub2";
import Three from "./sub3";


export default function Cookie() {
    return (
        <Container>
           <Head/>
           <One/>
           <Two/>
           <Three/>
        </Container>
    )
}