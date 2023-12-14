import * as React from 'react'
import img1 from '../../image/customize.png'
import img2 from '../../image/dive-in.png'


export default function MyCarousel() {

    const [nowSrc, setNowSrc] = React.useState(img1);
    const images = [img1, img2]
    const [index, setIndex] = React.useState(0);

    React.useEffect(()=>{
        const timer =setInterval(() => {
            setIndex(index + 1);
            setNowSrc(images[index])
            console.log(`image:${nowSrc}`)
    
            if (index >= images.length - 1) {
                setIndex(0);
            }
            clearInterval(timer)
        }, 1000)
    })
    

    return (
        <>
            <img src={nowSrc} alt='' width='100%' height='600px' />
        </>
    )
}