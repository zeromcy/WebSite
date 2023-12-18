import { Link } from "@mui/material";
import { styled } from "@mui/system";


const MyLink = styled(Link)(()=>({
    '&':{
        textDecoration:'none',
    }
 }))

export default MyLink;