import { Typography } from "@mui/material";
import { MySpan, PolicyTypography } from "./common";

export default function Four() {

    return (
        <>
            <MySpan id={4} name={'4. Data we share'}>
            </MySpan>
            <PolicyTypography
                content={'We only share your information with our service providers who help us operate our business, in which case those third parties are required to comply with the GDPR framework.You can find a list of sub processors on our GDPR page.'}
            />
        
        
        </>
    )
}