import { SubTitle3 } from "../home/commom/myTypography";
import { MySpan, PolicyTypography } from "../privacy/common";

export default function T25() {

    return (
        <>
            <MySpan id={'t25'} name={'Contact us'}>
            </MySpan>
            <PolicyTypography
                content={'In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:'}
            />
            <SubTitle3 content={'Tally BV'}/>
            <SubTitle3 content={'August van Lokerenstraat 71'}/>
            <SubTitle3 content={'Gent 9050'}/>
            <SubTitle3 content={'Belgium'}/>
            <SubTitle3 content={'hello@tally.so'}/>
        </>
    )
}

