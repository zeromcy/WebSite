import { Typography } from "@mui/material";
import { MySpan, PolicyTypography } from "../privacy/common";

export default function One() {

    return (
        <>
            <MySpan id={'t1'} name={'Agreement to terms'}>
            </MySpan>
            <PolicyTypography
                content={'These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Tally ("Company", “we”, “us”, or “our”), concerning your access to and use of the https://tally.so website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Use. If you do not agree with all of these terms of use, then you are expressly prohibited from using the site and you must discontinue use immediately.'}
            >
            </PolicyTypography>

            <PolicyTypography
                content={'Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.'}
            />

            <PolicyTypography
                content={'The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.'} />

            <PolicyTypography
                content={'The Site is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use this Site. You may not use the Site in a way that would violate the Gramm-Leach-Bliley Act (GLBA).'} />
        </>
    )
}