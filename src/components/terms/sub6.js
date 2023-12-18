import { Typography } from "@mui/material";
import { MySpan, PolicyTypography } from "../policy/common";

export default function Six() {

    return (
        <>
            <MySpan id={'t6'} name={'Cancellation and refunds'}>
            </MySpan>
            <PolicyTypography
                content={'All purchases are non-refundable. You can cancel your subscription at any time in your Tally dashboard. Your cancellation will take effect at the end of the current paid term. '}
            />

        </>
    )
}