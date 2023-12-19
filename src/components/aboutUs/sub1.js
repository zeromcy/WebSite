import { MySub } from "./common"
import OneImage from '../../image/Meditation.png'
export default function One() {
    return (
        <MySub image={OneImage}
            title='We’re proudly independent.'
            content='Tally is proudly independent, bootstrapped and self-funded. Instead of raising money, we run a profitable business supported by our users’ subscription fees. Being independent allows us to grow at our own pace, and make choices independently in the best interest of our users.'
            type='single'
        />
    )
}