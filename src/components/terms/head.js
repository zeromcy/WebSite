import { Typography } from "@mui/material"
import { MyLink1 } from "../policy/common"


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
                }}>Terms & Conditions</Typography>
            <Typography variant='h6' sx={{ my: 3 }}>Last updated: 24/07/2020</Typography>
            <MyLink1 id={'#t1'} name={'Agreement to terms'}></MyLink1>
            <MyLink1 id={'#t2'} name={'Intellectual property rights'}></MyLink1>
            <MyLink1 id={'#t3'} name={'User representations'}></MyLink1>
            <MyLink1 id={'#t4'} name={'User registration'}></MyLink1>
            <MyLink1 id={'#t5'} name={'Fees and payment'}></MyLink1>
            <MyLink1 id={'#t6'} name={'Cancellation and refunds'}></MyLink1>
            <MyLink1 id={'#t7'} name={'Prohibited activities'}></MyLink1>
            <MyLink1 id={'#t8'} name={'User generated contributions'}></MyLink1>
            <MyLink1 id={'#t9'} name={'Contribution license'}></MyLink1>
            <MyLink1 id={'#t10'} name={'Submissions'}></MyLink1>
            <MyLink1 id={'#t11'} name={'Third-party website and content'}></MyLink1>
            <MyLink1 id={'#t12'} name={'Site management'}></MyLink1>
            <MyLink1 id={'#t13'} name={'Privacy Policy'}></MyLink1>
            <MyLink1 id={'#t14'} name={'Term and termination'}></MyLink1>
            <MyLink1 id={'#t15'} name={'Modifications and interruptions'}></MyLink1>
            <MyLink1 id={'#t16'} name={'Governing law'}></MyLink1>
            <MyLink1 id={'#t17'} name={'Dispute resolution'}></MyLink1>
            <MyLink1 id={'#t18'} name={'Corrections'}></MyLink1>
            <MyLink1 id={'#t19'} name={'Disclaimer'}></MyLink1>
            <MyLink1 id={'#t20'} name={'Limitations of liability'}></MyLink1>
            <MyLink1 id={'#t21'} name={'Indemnification'}></MyLink1>
            <MyLink1 id={'#t22'} name={'User data'}></MyLink1>
            <MyLink1 id={'#t23'} name={'Electronic communications, transactions, and signatures'}></MyLink1>
            <MyLink1 id={'#t24'} name={'Miscellaneous'}></MyLink1>
            <MyLink1 id={'#t25'} name={'Contact us'}></MyLink1>
        </>
    )
}