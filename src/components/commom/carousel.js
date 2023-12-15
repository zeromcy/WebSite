import * as React from 'react'
import '../../css/paper.css'
import { Paper, Toolbar, Divider } from "@mui/material"
import { CircleIcon } from '../head/circleIcon'


export default function MyCarousel({ type,images }) {

    const [nowSrc, setNowSrc] = React.useState(images[0]);
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex(index + 1);
            setNowSrc(images[index])

            if (index >= images.length - 1) {
                setIndex(0);
            }
            clearInterval(timer)
        }, 1000)
    })


    return (

        <Paper
            className='paper'
            elevation={2}
            sx={
                type === 'left' ?
                    {
                        ml: '10%',

                    } :
                    { mx: '5%' }}
        >
            <Toolbar
                sx={{
                    '&': {
                        minHeight: '48px'
                    }
                }}>
                <CircleIcon />
                <CircleIcon />
                <CircleIcon />
            </Toolbar>
            <Divider />
            <img src={nowSrc} alt='' width='100%' height='100%' />
        </Paper>

    )
}