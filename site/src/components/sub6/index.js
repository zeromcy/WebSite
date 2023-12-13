import { Grid, Link, Typography } from "@mui/material"
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
import Sub6BackImage from '../../image/customize.png'

export default function SubSix() {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={7}>
                    <Typography variant='h3' sx={{ mt: 15 }}>
                        Connect your favorite tools
                    </Typography>
                    <Typography variant='h6' sx={{ width: '480px', mt: 2 }}>
                        Save time using popular integrations to sync your form submissions.
                    </Typography>
                </Grid>
                <Grid item sm={5}
                    sx={{
                        position: 'relative',
                        top: 55,
                        right: -70
                    }}
                >
                    <img src={Sub6BackImage} alt='' width="406" height='240' sx={{ color: 'transparent', }}>
                    </img>
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ mt: 5 }} rowSpacing={3}>

                <Grid item sm={3}>
                    <Typography>
                        <img src={NotionImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <Link>Notion.</Link>Send submissions to Notion.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={GoogleSheetsImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <Link>Google Sheets.</Link>Send submissions to a sheet.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={AirtableImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <Link>Airtable.</Link>Send submissions to Airtable.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={WebhooksImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <Link>Webhooks.</Link>Send submissions to Webhooks.
                    </Typography>
                </Grid>

            </Grid>
            <Grid container spacing={3} sx={{ mt: 5 }} rowSpacing={3}>

                <Grid item sm={3}>
                    <Typography>
                        <img src={SlackImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <Link>Slack.</Link>Send Slack messages for new submissions.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={CodaImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <Link>Coda.</Link>Send submissions to Coda.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={GoogleAnalyticsImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <Link>Google Analytics.</Link>Analyze traffic sources, visitor behavior and time spent.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={FaceImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <Link>Facebook Pixel.</Link>Measure and optimize your ad campaigns.
                    </Typography>
                </Grid>

            </Grid>
            <Grid container spacing={3} sx={{ mt: 5 }} rowSpacing={3}>

                <Grid item sm={3}>
                    <Typography>
                        <img src={ZapierImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <Link>Zapier.</Link>Send submissions to your favorite tools.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={MakeImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <Link>Make.</Link>Send submissions to your favorite tools.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={PipedreamImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <Link>Pipedream.</Link>Send submissions to your favorite tools.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Typography>
                        <img src={WebhooksImage} alt='' width='10%'></img>
                    </Typography>
                    <Typography variant="subtitle1">
                        <Link>And many more.</Link>ntegrate with thousands of tools using Zapier, Make or Pipedream.
                    </Typography>
                </Grid>

            </Grid>

            <Typography variant="h4" align='center' sx={{ mt: 5 }} color='text.secondary'>
                “Can attest that Tally  Typeform hands down”
            </Typography>
        </>
    )
}