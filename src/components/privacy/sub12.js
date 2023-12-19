import { MySpan, PolicyTypography } from "./common";

export default function Twelve() {

    return (
        <>
            <MySpan id={12} name={'12. Contact'}>
            </MySpan>
            <PolicyTypography
                content={"Please use the following contact information for privacy inquiries:"}
            />
            <PolicyTypography
                content={"Tally"}
            />
            <PolicyTypography
                content={"August van Lokerenstraat 71"}
            />
            <PolicyTypography
                content={"9050 Gent"}
            />
            <PolicyTypography
                content={"Belgium"}
            />
            <PolicyTypography
                content={"Email to: hello@tally.so"}
            />
        
        
        </>
    )
}