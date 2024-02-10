import React, { useState } from "react";
import Navbar from "./Navbar";
import CardImage from "./CardImage";
import { Container, TextField, Typography, IconButton } from "@mui/material";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SERVER_URL from "./CONST";



function ImagePage() {


    const [message, setMessage] = useState("");
    const [dis, setDis] = useState(true);
    const [chat, setChat] = useState([]);


    const handleChange = (event) => {
        setMessage(event.target.value);
        setDis(event.target.value.length === 0);
    };


    const Welcome = () => {
        if (chat.length !== 0) {
            return (<></>)
        }
        return (<div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
                <AutoFixHighIcon fontSize='large' />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant='h5'>Сөзіңіз суретке айналады</Typography>
            </div>
        </div>)
    }
    const sendFunc = () => {
        setDis(true);
        setChat([...chat, { who: 'user', text: message, image: '' }]);

        let datatoSend = {
            "prompt": message,
        };
        fetch(SERVER_URL + '/image/generate/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datatoSend),

        })
            .then(res => res.json())
            .then(res => {
                setChat([...chat, { who: 'ai', image: res.image, text: '' }])
            })

        setMessage("");
        setDis(false);
    }

    const SentButton = () => {
        return (
            <IconButton onClick={sendFunc} disabled={dis}>
                <AutoFixHighIcon />
            </IconButton>
        );
    };



    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                    padding: '10px', // add padding for better mobile experience
                }}
            >
                <Welcome />
                {chat.map((data, inx) => { return (<CardImage who={data.who} text={data.text} key={inx} image={data.image} />) })}
                <TextField
                    variant="outlined"
                    value={message}
                    onChange={handleChange}
                    placeholder='Суреттің сипаттамасы'
                    sx={{ marginTop: 'auto' }}
                    InputProps={{ endAdornment: <SentButton />, maxLength: 512 }}
                />
            </Container>
        </div>
    )
}
export default ImagePage;