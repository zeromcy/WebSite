import { MySpan, PolicyTypography } from "../policy/common";

export default function T12() {

    return (
        <>
            <MySpan id={'t12'} name={'Site management'}>
            </MySpan>
            <PolicyTypography
                content={'We reserve the right, but not the obligation, to:'}
            />
            <PolicyTypography
                content={'1. Monitor the Site for violations of these Terms of Use'}
            />
            <PolicyTypography
                content={'2. Take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities'}
            />
            <PolicyTypography
                content={'3. In our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof'}
            />
            <PolicyTypography
                content={'4. in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and '}
            />
            <PolicyTypography
                content={'5. otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.'}
            />
            
           
        </>
    )
}