import { MySpan, PolicyTypography } from "./common";

export default function Five() {

    return (
        <>
            <MySpan id={5} name={'5. Data retention'}>
            </MySpan>
            <PolicyTypography
                content={'If you are a Tally creator we do not delete the data in your account. You are responsible for the time period for which you store the data. You can delete data in your Tally account. If you are a respondent, you will need to ask the creator how long your responses will be stored in Tally.We honor all deletions, and all form data which has been deleted by the form creator is permanently deleted from our back-ups within 90 days.'}
            />
        
        
        </>
    )
}