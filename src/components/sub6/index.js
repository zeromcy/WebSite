import MyLink from "../commom/MyLink"
import { Grid, Typography } from "@mui/material"
import '../../css/img.css'
import NotionImage from '../../image/icon_NOTION.png'
import GoogleSheetsImage from '../../image/icon_GOOGLE_SHEETS.png'
import AirtableImage from '../../image/icon_AIRTABLE.png'
import WebhooksImage from '../../image/icon_WEBHOOKS.png'
import SlackImage from '../../image/icon_SLACK.png'
import CodaImage from '../../image/icon_CODA.png'
import GoogleAnalyticsImage from '../../image/icon_GOOGLE_ANALYTICS.png'
import FaceImage from '../../image/icon_FACEBOOK_PIXEL.png'
import ZapierImage from '../../image/icon_ZAPIER.png'
import MakeImage from '../../image/icon_INTEGROMAT.png'
import PipedreamImage from '../../image/icon_PIPEDREAM.png'
import Sub6BackImage from '../../image/strategy.png'
import MoreIcon from "./more"
import { Sub1Content, SubTitle1, FootContent } from "../commom/myTypography";
import { useMediaQuery, useTheme } from '@mui/material';

export default function SubSix() {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.up('md')) ? true : false;

    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={7} xs={12}>

                    <SubTitle1
                        content={'Connect your favorite tools'}>
                    </SubTitle1>
                    <Sub1Content
                        content={'Save time using popular integrations to sync your form submissions.'}>
                    </Sub1Content>
                </Grid>
                <Grid item sm={5} xs={0}
                    sx={{
                        alignSelf: 'end'
                    }}
                >
                    <Grid container
                        sx={{
                            justifyContent: 'flex-end'
                        }}>
                        {
                            match ? <img src={Sub6BackImage} alt='' width="406" height='240' sx={{ color: 'transparent', }}>
                            </img>
                                :
                                <img src={Sub6BackImage} alt='' width="160" height='113' sx={{ color: 'transparent', }}>
                                </img>
                        }


                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={3}
                sx={{
                    pt: 5,
                }}
            >

                <Grid item sm={3}>
                    <Typography>
                        <img src={NotionImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <MyLink href="#"><b>Notion.</b></MyLink>Send submissions to Notion.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={GoogleSheetsImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <MyLink><b>Google Sheets.</b></MyLink>Send submissions to a sheet.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={AirtableImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <MyLink><b>Airtable.</b></MyLink>Send submissions to Airtable.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={WebhooksImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <MyLink><b>Webhooks.</b></MyLink>Send submissions to Webhooks.
                    </Typography>
                </Grid>

            </Grid>
            <Grid container spacing={3} sx={{ pt: 5 }} >

                <Grid item sm={3}>
                    <Typography>
                        <img src={SlackImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <MyLink><b>Slack.</b></MyLink>Send Slack messages for new submissions.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={CodaImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <MyLink><b>Coda.</b></MyLink>Send submissions to Coda.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={GoogleAnalyticsImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <MyLink><b>Google Analytics.</b></MyLink>Analyze traffic sources, visitor behavior and time spent.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={FaceImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <MyLink><b>Facebook Pixel.</b></MyLink>Measure and optimize your ad campaigns.
                    </Typography>
                </Grid>

            </Grid>
            <Grid container spacing={3} sx={{ pt: 5 }} >

                <Grid item sm={3}>
                    <Typography>
                        <img src={ZapierImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <MyLink><b>Zapier.</b></MyLink>Send submissions to your favorite tools.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={MakeImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <MyLink><b>Make.</b></MyLink>Send submissions to your favorite tools.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={PipedreamImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <MyLink><b>Pipedream.</b></MyLink>Send submissions to your favorite tools.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <MoreIcon />
                    </Typography>
                    <Typography variant="subtitle1">
                        <MyLink><b>And many more.</b></MyLink>ntegrate with thousands of tools using Zapier, Make or Pipedream.
                    </Typography>
                </Grid>

            </Grid>

            
            <FootContent
                content={'“Can attest that Tally  Typeform hands down”'}>
            </FootContent>
        </>
    )
}