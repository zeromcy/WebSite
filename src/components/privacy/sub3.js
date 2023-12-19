import { Typography } from "@mui/material";
import { MySpan, PolicyTypography } from "./common";

export default function Three() {

    return (
        <>
            <MySpan id={3} name={'3.How we use your data'}>
            </MySpan>
            <PolicyTypography
                content={'Tally does not sell personal data to third parties or use it for marketing purposes or for serving advertisements. We have no interest in collecting non-anonymized data from anyone who isn’t a registered user of Tally.'}
            />
            <PolicyTypography
                content={'We only collect your data with your consent or in order to:'}
            />
            <ul>
                <li>
                    <PolicyTypography
                        content={'Deliver our service to you '}
                    />
                </li>

                <li>
                    <PolicyTypography
                        content={'To improve your user experience'}
                    />
                </li>
                <li>
                    <PolicyTypography
                        content={'To email you with essential product updates'}
                    />
                </li>
                <li>
                    <PolicyTypography
                        content={'To troubleshoot product functionality and fix bugs'}
                    />
                </li>
                <li>
                    <PolicyTypography
                        content={'To respond to legal requests or prevent fraud'}
                    />
                </li>
            </ul>
        <PolicyTypography
        content={'If you choose to connect your Google Account when using Tally’s Google Sheets integration, we request access to your spreadsheets to provide you with the option to choose the destination sheet for the synchronization of form submissions. Tally’s use and transfer of this information adheres to Google API Services User Data Policy, including the Limited Use requirements.'}/>
        </>
    )
}