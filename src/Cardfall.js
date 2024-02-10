import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import PersonIcon from '@mui/icons-material/Person';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from '@mui/material';

const ForumPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[1],
}));

const ContentWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Add this line to align items to the start

});

const Cardfall = ({ who, text }) => {
    const [name, setName] = useState("Сіз");
    const [ico, setIcon] = useState(<PersonIcon />);

    useEffect(() => {
        if (who === "ai") {
            setName("ЖИ");
            setIcon(<AutoAwesomeIcon />);
        } else {

        }
    }, [who]);

    const handleCopyClick = () => {
        const textField = document.createElement('textarea');
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        document.body.removeChild(textField);
    };

    return (
        <ForumPaper sx={{ border: "1px solid rgba(255, 255, 255, 0.12)" }}>
            {ico}
            <ContentWrapper>
                <Typography variant="subtitle1">
                    <Link underline="none">
                        {name}
                    </Link>
                </Typography>
                <div>
                    <Typography>{text}</Typography>
                </div>
                <IconButton onClick={handleCopyClick}>
                    <ContentCopyIcon />
                </IconButton>
            </ContentWrapper>
        </ForumPaper>
    );
};

export default Cardfall;
