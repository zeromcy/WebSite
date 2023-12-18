import Head from './head';
import SubOne from './sub1';
import SubTwo from './sub2';
import SubThree from './sub3';
import SubFour from './sub4';
import SubFive from './sub5';
import SubSix from './sub6';
import SubSeven from './sub7';
import SubEight from './sub8';
import SubNine from './sub9';
import { Grid, useMediaQuery, useTheme, Container } from '@mui/material';
import LeftImage from '../../image/faces-left.png'
import RightImage from '../../image/faces-right.png'
import '../../css/leftRifht.css'

export function Home() {
    const theme = useTheme()
    const match = useMediaQuery(theme.breakpoints.up('lg'))

    return (
        <>
            {/* left image */}
            < Grid item sx={{ display: { md: 'flex', sm: 'none', xs: 'none' } }
            } md={1} order={1} >
                {
                    match ?
                        <div>
                            < img src={LeftImage} alt='' width='301' height='1160' className='left_' />
                        </div >
                        :
                        null
                }
            </Grid >

            <Grid item sm={12} xs={12} md={10} order={2}>
                <Container maxWidth='lg'
                    sx={{ mt: 15 }}
                >
                    {/* Header */}
                    <Head />

                    {/* sub1 */}
                    <SubOne />

                    {/* sub2 */}
                    <SubTwo />

                    {/* sub3 */}
                    <SubThree />

                    {/* sub4 */}
                    <SubFour />

                    {/* sub5 */}
                    <SubFive />

                    {/* sub6 */}
                    <SubSix />

                    {/* sub7 */}
                    <SubSeven />

                    {/* sub8 */}
                    <SubEight />

                    {/* sub9 */}
                    <SubNine />
                </Container>
            </Grid>

            {/* right image */}
            <Grid item sx={{ display: { md: 'flex', sm: 'none', xs: 'none' } }} md={1} order={3}>
                {
                    match ?
                        <div>
                            <img src={RightImage} alt='' width='301' height='1160' className='right' />
                        </div>
                        :
                        null
                }
            </Grid>
        </>
    )
}