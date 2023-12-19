import { Typography } from "@mui/material";
import { MySpan, PolicyTypography } from "../privacy/common";

export default function Four() {

    return (
        <>
            <MySpan id={'t4'} name={'User registration'}>
            </MySpan>
            <PolicyTypography
                content={'You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.'}
            >
            </PolicyTypography>

        </>
    )
}