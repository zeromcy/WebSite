import { MySub } from "./commom"
import OneImage from '../../image/Flower.png'
export default function Two() {
    return (
        <MySub image={OneImage}
            title='Our users always come first.'
            content='Our growth is fueled by our customers, not by investors. And since we’re customer-funded, our users are our number 1 priority. Offering laser-fast customer support and making our users happy comes first, revenue growth comes second. We have a public roadmap and can’t wait to meet you in our Slack channel.'
            type='double'
        />
    )
}