import { SubTitle2 } from "../home/commom/myTypography";
import { MySpan, PolicyTypography } from "../privacy/common";

export default function T17() {

    return (
        <>
            <MySpan id={'t17'} name={'Dispute resolution'}>
            </MySpan>
            <Content sub={'Informal Negotiations'} content={'To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of Use (each a "Dispute" and collectively, the “Disputes”) brought by either you or us (individually, a “Party” and collectively, the “Parties”), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.'} />
            <Content sub={'Binding Arbitration'} content={'Any dispute arising from the relationships between the Parties to this contract shall be determined by one arbitrator who will be chosen in accordance with the Arbitration and Internal Rules of the European Court of Arbitration being part of the European Centre of Arbitration having its seat in Strasbourg, and which are in force at the time the application for arbitration is filed, and of which adoption of this clause constitutes acceptance. The seat of arbitration shall be Ghent, Belgium. The language of the proceedings shall be English. Applicable rules of substantive law shall be the law of Belgium.'} />
            <Content sub={'Restrictions'} content={'The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.'} />
            <Content sub={'Exceptions to Informal Negotiations and Arbitration'} content={'The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.'} />


        </>
    )
}

function Content({ sub, content }) {
    return (
        <>
            <SubTitle2 content={sub} />
            <PolicyTypography
                content={content}
            />
        </>
    )
}