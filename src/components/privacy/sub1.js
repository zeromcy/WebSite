import { Typography } from "@mui/material";
import { MySpan, PolicyTypography } from "./common";

export default function One() {

    return (
        <>
            <MySpan id={1} name={'1.Introduction'}>
            </MySpan>
            <Typography
                color='text.secondary'
                sx={{
                    typography: {
                        xs: 'body1',
                        sm: 'body1',
                        md: 'body1',
                        lg: 'body1',
                        xl: 'body1',
                    },
                    pt: 1
                }}>
                Tally, registered at August van Lokerenstraat 71, 9050 Ghent (Belgium) takes your privacy seriously and considers it important for your personal data (hereafter “your data”) to be treated with the necessary care and confidentiality at all times.
                This Privacy Statement explains how our organization uses the personal data we collect from you when you and why. If you have any questions after reading this Privacy Statement, feel free to contact us at <a href="!#">hello@tally.so.</a>
            </Typography>

            <PolicyTypography
                content={'To avoid any misunderstandings, we would like to clarify that this Privacy Statement is applicable on processing of personal data from:'}
            />
            <ul>
                <li>
                    <PolicyTypography
                        content={'Creators: the person who creates and distributes Tally forms'}
                    />
                </li>

                <li>
                    <PolicyTypography
                        content={'Website visitors: persons who visit our marketing landing page'}
                    />
                </li>
            </ul>
            <PolicyTypography
            content={'Tally is a provider of this service, and not the owner of the collected data. The creator (the person who sends out a form) is responsible for the data he/she collects and thus data controller of respondent data.'}/>
        </>
    )
}