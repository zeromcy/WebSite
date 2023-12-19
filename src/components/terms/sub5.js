import { MySpan, PolicyTypography } from "../privacy/common";

export default function Five() {

    return (
        <>
            <MySpan id={'t5'} name={'Fees and payment'}>
            </MySpan>
            <PolicyTypography
                content={'We accept the following forms of payment:'}
            />
            <ul>
                <li>
                    <PolicyTypography
                        content={' Visa '}
                    />
                </li>
                <li>
                    <PolicyTypography
                        content={' Mastercard '}
                    />
                </li>
                <li>
                    <PolicyTypography
                        content={'American Express '}
                    />
                </li>
            </ul>
            <PolicyTypography
                content={'You may be required to purchase or pay a fee to access some of our services. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. We bill you through an online billing account for purchases made via the Site. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in U.S. dollars or EURO.'}
            />
            <PolicyTypography
                content={'You agree to pay all charges or fees at the prices then in effect for your purchases, and you authorize us to charge your chosen payment provider for any such amounts upon making your purchase. If your purchase is subject to recurring charges, then you consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until you notify us of your cancellation.'}
            />
            <PolicyTypography
                content={'We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment. We also reserve the right to refuse any order placed through the Site.'}
            />
        </>
    )
}