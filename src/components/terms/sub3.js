import { MySpan, PolicyTypography } from "../privacy/common";

export default function Three() {

    return (
        <>
            <MySpan id={'t3'} name={'User representations'}>
            </MySpan>
            <PolicyTypography
                content={'By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.'}
            >
            </PolicyTypography>

            <PolicyTypography
                content={'If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).'}/>
        </>
    )
}