import { Container } from "@mui/material";
import Foot from "./foot";
import One from "./sub1";
import Two from "./sub2";
import Three from "./sub3";
import Four from "./sub4";
import Five from "./sub5";
import Six from "./sub6";
import Title from "./title";


export default function About() {
    return (
        <Container>
            <Title />
            <One />
            <Two />
            <Three />
            <Four />
            <Five />
            <Six />
            <Foot/>
        </Container>
    )
}