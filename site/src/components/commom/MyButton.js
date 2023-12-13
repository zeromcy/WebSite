import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(()=>({
    '&':{
        fontWeight:900
    }
}))

export default StyledButton;