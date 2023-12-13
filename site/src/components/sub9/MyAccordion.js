import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    // backgroundColor:
    //     theme.palette.mode === 'dark'
    //         ? 'rgba(255, 255, 255, .05)'
    //         : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Is Tally really free?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Tally was born out of frustration with expensive form builders and paywalls. That’s why we offer Tally for free, as long as you stay within our fair use guidelines. This allows you to collect unlimited answers without the fear of your account being closed. In return, every Tally form includes a ’Made with Tally’ badge, helping us grow our community. We understand that some users and teams require advanced features to enhance their forms. Enter Tally Pro. With a fixed price, you can remove our branding, collaborate with team members, fully customize forms, and more.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Is Tally GDPR compliant?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Tally is based in Belgium (EU) and complies with the GDPR framework. We’ve bundled all frequently asked questions about GDPR & Tally here.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Is Tally GDPR compliant?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Unlike Typeform, Tally offers everything you need to create beautiful and powerful forms for free, including unlimited forms and responses.
                        Tally offers an intuitive interface that works like a text document. Just start typing and create and customize any type of form without being restricted to the Typeform format of a single question per page.
                        Our growth is fueled by our customers, not by investors, which means our users always come first. We have a public roadmap and you can contact us here. We’ll reply within the day.
                        A complete feature comparison
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}