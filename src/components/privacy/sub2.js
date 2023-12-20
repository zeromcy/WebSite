import { MySpan, PolicyTypography } from "./common";

export default function Two() {

    return (
        <>
            <MySpan id={2} name={'2.What data do we collect'}>
            </MySpan>
            <PolicyTypography
                content={'Information we collect from Creators (you hold a Tally account and you are using our service) or Website visitors (you are visiting our website).'}
            />
            <PolicyTypography
                content={'To avoid any misunderstandings, we would like to clarify that this Privacy Statement is applicable on processing of personal data from:'}
            />
            <ul>
                <li>
                    <PolicyTypography
                        content={'Electronical identification data: including IP address, device & browser data, location data;'}
                    />
                </li>

                <li>
                    <PolicyTypography
                        content={'Information about your use of our website: including how you end up on our website and the pages you visited.'}
                    />
                </li>
                <li>
                    <PolicyTypography
                        content={'Registration information:When you register for an account, we collect your first and last name, username, password and email address. '}
                    />
                </li>
                <li>
                    <PolicyTypography
                        content={'Billing informatiom:If you pay for a Tally service, we will ask for your billing details, name, address and financial information depending on your payment method (stored by our payment service provider Stripe)'}
                    />
                </li>
                <li>
                    <PolicyTypography
                        content={'Form data:We store your form data (questions and responses) for you and provide tools for you to use with respect to this data. '}
                    />
                </li>
            </ul>

        </>
    )
}