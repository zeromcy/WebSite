import { Container, Grid,Divider } from "@mui/material";
import { Sub2Content, SubTitle2 } from "../home/commom/myTypography";

function Sub({Title,content}) {
    return (
        <Grid item sm={12} xs={12}>
            <Container>
                <Grid container>
                    <SubTitle2 content={Title}></SubTitle2>
                    <Sub2Content content={content}></Sub2Content>
                </Grid>
            </Container>
        </Grid>
    )
}


function MyDivider(){
    return(
        <Divider sx={{my:5}}></Divider>
    )
}

function MySub({image,title,content,type}){

    return(
        <>
            <Grid container>
                <Grid item sm={4} xs={4} sx={type==='single'?{ order:1 }:{order:2 }}>
                    <Grid container sx={{ justifyContent: 'center' }}>
                        <img src={image} width="205" height="200" alt=""></img>
                    </Grid>
                </Grid>

                <Grid item sm={8} xs={8} sx={type==='single'?{ order:2 }:{order:1 }}>
                    <Sub Title={title} content={content}></Sub>
                </Grid>
            </Grid>
            <MyDivider />
        </>
    )
}

export {MyDivider,Sub,MySub}