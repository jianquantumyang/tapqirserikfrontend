import React, { useState } from 'react';
import Navbar from './Navbar';
import { Container, IconButton, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Cardfall from './Cardfall';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SERVER_URL from './CONST';

function App() {

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
        <AutoAwesomeIcon fontSize='large' />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h5'>Сізге қалай көмектесе аламын?</Typography>
      </div>
    </div>)
  }


  const handleChange = (event) => {
    setMessage(event.target.value);
    setDis(event.target.value.length === 0);
  };
  async function sent(){
    let response;
    let sentData = { content: message };

    try {
      const response = await fetch(`${SERVER_URL}/chat/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sentData),
      });
  
      if (!response.ok) {
        throw new Error('Server response not okay');
      }
  
      const result = await response.json();
      setChat([...chat, { who: 'ai', text: result.answer }]);
    } catch (error) {
      //oh shiiiiiiiiiiiiiiit 2hours debugging SHIIIIIIIIIIT 
      console.error('Error fetching data:', error.message);
      console.log('Response content:', response ? await response.text() : 'N/A');
    }
  }
  const sendFunc = async () => {
    setAsd(true);
  
    setChat([...chat, { who: 'user', text: message }]);
    await sent();
    
    setMessage('');
    setDis(true);
    
  
    setAsd(false);
  };
  
  

  const SentButton = () => {
    return (
      <IconButton onClick={sendFunc} disabled={dis}>
        <SendIcon />
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
        {chat.map((data,inx) => { return (<Cardfall who={data.who} text={data.text}  key={inx} />)})}
        <TextField
          variant="outlined"
          value={message}
          onChange={handleChange}
          placeholder='Чатты бастау'
          sx={{ marginTop: 'auto' }}
          InputProps={{ endAdornment: <SentButton />, maxLength: 1024 }}
        />
      </Container>
    </div>
  );
}

export default App;
