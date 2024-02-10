import React, { useState } from 'react';
import Navbar from './Navbar';
import { Container, IconButton, TextField, Typography } from '@mui/material';
import CardVoice from './CardVoice';
import SERVER_URL from './CONST';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';

function VoicePage() {

  const [message, setMessage] = useState("");
  const [dis, setDis] = useState(true);
  const [chat, setChat] = useState([]);
  const [asd,setAsd] = useState(false);

  const Welcome = () => {
    if (chat.length !== 0) {
      return (<></>)
    }
    return (<div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
        <VoiceChatIcon fontSize='large' />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h5'>Жасанды дауыс</Typography>
      </div>
    </div>)
  }


  const handleChange = (event) => {
    setMessage(event.target.value);
    setDis(event.target.value.length === 0);
  };


  
   const sendFunc = () => {
        setDis(true);
        setChat([...chat, { who: 'user', audio: '', text: message }]);

        let datatoSend = {
            "txt": message,
        };

        fetch(SERVER_URL + '/audio/tts/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datatoSend),

        })
            .then(res => res.json())
            .then(res => {
                let aud = SERVER_URL + res.mp3;
                setChat([...chat, { who: 'ai', audio: aud, text: '' }])
            })

        setMessage("");
        setDis(false);
    }
  
  

  const SentButton = () => {
    return (
      <IconButton onClick={sendFunc} disabled={dis}>
        <GraphicEqIcon />
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
        {chat.map((data,inx) => { return (<CardVoice who={data.who} audio={data.audio} text={data.text}  key={inx} />)})}
        <TextField
          variant="outlined"
          value={message}
          onChange={handleChange}
          placeholder='Тіріліткіңіз келетін сөздерді жазыңыз'
          sx={{ marginTop: 'auto' }}
          InputProps={{ endAdornment: <SentButton />, maxLength: 1024 }}
        />
      </Container>
    </div>
  );
}

export default VoicePage;
