import { Typography } from "@mui/material"
import { MyLink1 } from "./common"


export default function Head() {
    return (
        <>
            <Typography
                sx={{
                    typography: {
                        xs: 'h6',
                        sm: 'h5',
                        md: 'h5',
                        lg: 'h4',
                        xl: 'h4',
                    },
                    mt: 5
                }}>Privacy Policy</Typography>
            <Typography variant='h6' sx={{ my: 3 }}>Last updated: 24/07/2020</Typography>
            <MyLink1 id={'#1'} name={'1.Introduction'}></MyLink1>
            <MyLink1 id={'#2'} name={'2.What data do we collect'}></MyLink1>
            <MyLink1 id={'#3'} name={'3.How we use your data'}></MyLink1>
            <MyLink1 id={'#4'} name={'4.Data we share'}></MyLink1>
            <MyLink1 id={'#5'} name={'5.Data retention'}></MyLink1>
            <MyLink1 id={'#6'} name={'6.Your data protection'}></MyLink1>
            <MyLink1 id={'#7'} name={'7.Marketing'}></MyLink1>
            <MyLink1 id={'#8'} name={'8.Cookies'}></MyLink1>
            <MyLink1 id={'#9'} name={'9.Data Transfers'}></MyLink1>
            <MyLink1 id={'#10'} name={'10.Users Acceptance'}></MyLink1>
            <MyLink1 id={'#11'} name={'11.changes to our Privacy Policy'}></MyLink1>
            <MyLink1 id={'#12'} name={'12.Contact'}></MyLink1>
        </>
    )
}