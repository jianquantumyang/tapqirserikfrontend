import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import PersonIcon from '@mui/icons-material/Person';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';


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


function CardImage({ who, text, image }) {
    const [name, setName] = useState("Сіз");
    const [icon, setIcon] = useState(<PersonIcon />);
    useEffect(() => {
        if (who === "ai") {
            setName("Суретші");
            setIcon(<AutoAwesomeIcon />);
            //console.log(image);
        }
        else {

        }
    }, [who,image])
    if (who === 'user') {
        return (<ForumPaper sx={{ border: "1px solid rgba(255, 255, 255, 0.12)" }}>
            {icon}
            <ContentWrapper>
                <Typography variant="subtitle1">
                    <Link underline="none">
                        {name}
                    </Link>
                </Typography>
                <div>
                    <Typography>{text}</Typography>

                </div>
            </ContentWrapper>
        </ForumPaper>);
    }

    return(<ForumPaper sx={{ border: "1px solid rgba(255, 255, 255, 0.12)" }}>
        {icon}
        <ContentWrapper>
            <Typography variant="subtitle1">
                <Link underline="none">
                    {name}
                </Link>
            </Typography>
            <div>
                
                <img src={image} alt="idk why?" />
                
            </div>
            <IconButton component={Link} target="_blank" href={image} download> <DownloadIcon /></IconButton>
        </ContentWrapper>
    </ForumPaper>);
}



export default CardImage;