import { Typography, Grid, Button, Paper, Divider, Toolbar } from "@mui/material";
import headImage from '../../image/smart-1.png'
import NotionImage from '../../image/notion.png'
import BuyImage from '../../image/buy-me-a-coffee.png'
import MakeImage from '../../image/make.png'
import RakutenImage from '../../image/rakuten.png'
import GlovoImage from '../../image/glovo.png'

export default function Head() {

    return (
        <>
            <Typography variant="h2" gutterBottom align="center">
                The simplest way to create forms
            </Typography>
            <Grid container
                sx={{ justifyContent: 'center' }}>
                <Grid item>
                    <Typography variant="h6"
                        align="center"
                        sx={{
                            maxWidth: '600px'
                        }}
                    >
                        The simplest way to create formsSay goodbye to boring forms. Meet Tally — the free, intuitive form builder you’ve been looking for.
                    </Typography>
                </Grid>
            </Grid>

            <Grid container
                sx={{
                    justifyContent: 'center',
                    my: 10
                }}>
                <Button variant="contained" className="btn">Create free from</Button>
            </Grid>

            <Grid container sx={{
                justifyContent: 'center',
                mb:5
            }}>
                <Paper elevation={3} >
                <Toolbar>
                </Toolbar>
                <Divider />
                    <img src={headImage} alt="" width='60%'></img>
                </Paper>
            </Grid>

            <Grid container 
            spacing={3}
            sx={{
                justifyContent:'center'
            }}>
                <Grid item sm={2}>
                    <img src={NotionImage} alt="" width="60%"></img>
                </Grid>
                <Grid item sm={2} sx={{mt:2}}>
                    <img src={BuyImage} alt="" width="60%"></img>
                </Grid>
                <Grid item sm={2} sx={{mt:2}}>
                    <img src={MakeImage} alt="" width="60%"></img>
                </Grid>
                <Grid item sm={2} >
                    <img src={GlovoImage} alt="" width="60%"></img>
                </Grid>
                <Grid item sm={2} sx={{mt:1}}>
                    <img src={RakutenImage} alt="" width="60%"></img>
                </Grid>

            </Grid>
        </>
    )
}