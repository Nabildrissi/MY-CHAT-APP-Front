import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  Typography,
  IconButton,
  InputAdornment,
  Tabs,
  Tab,
  Popover,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SendIcon from '@mui/icons-material/Send';
import img1 from '../Assets/Img/nabil.png';
import img2 from '../Assets/Img/mohamed.png';
import img3 from '../Assets/Img/imad.png';
import './ChatWindow.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff4081',
    },
    background: {
      default: '#f9f9f9',
      paper: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#888',
    },
  },
  typography: {
    body1: {
      color: '#000',
    },
    body2: {
      color: '#888',
    },
  },
});

const contacts = [
  { name: 'Nabil', lastMessage: 'See you!', time: '19:54', img: img1 },
  { name: 'Mohamed', lastMessage: 'Got it!', time: '15:38', img: img2 },
  { name: 'Imad', lastMessage: 'Sure!', time: '20:12', img: img3 },
];

function ChatWindow() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [activeTab, setActiveTab] = useState(0);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setMessages([]); // Clear messages when switching contacts (optional)
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage = {
        text: messageInput,
        sender: 'You',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setMessageInput(''); // Clear the input field after sending
    }
  };

  const handleAttachClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAttachClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Grid container className="chat-container">
        {/* Sidebar */}
        <Grid item xs={3} className="sidebar">
          <Box className="sidebar-header">
            <Typography variant="h6">Chats</Typography>
            <Box>
              <IconButton>
                <AddIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Box>
          </Box>

          <Box className="search-bar">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search"
              className="search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            className="tabs"
          >
            <Tab label="All" />
            <Tab label="Unread" />
            <Tab label="Groups" />
          </Tabs>

          <List className="contact-list">
            {contacts.map((contact, index) => (
              <React.Fragment key={index}>
                <ListItem button onClick={() => handleContactClick(contact)}>
                  <Avatar alt={contact.name} src={contact.img} />
                  <ListItemText
                    primary={contact.name}
                    secondary={`${contact.lastMessage} - ${contact.time}`}
                    className="contact-list-item"
                  />
                </ListItem>
                {index < contacts.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Grid>

        {/* Chat Area */}
        <Grid item xs={9} className="chat-area">
          <Box className="chat-header">
            <Box className="chat-header-left">
              <Avatar alt={selectedContact.name} src={selectedContact.img} />
              <Typography variant="h6">{selectedContact.name}</Typography>
            </Box>
            <Box className="chat-header-right">
              <IconButton>
                <VideoCallIcon />
              </IconButton>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </Box>
          </Box>

          <Box className="chat-body">
            {messages.length === 0 ? (
              <Typography variant="h6" className="no-messages">
                No messages here yet...
              </Typography>
            ) : (
              messages.map((message, index) => (
                <Box key={index} className="message">
                  <Typography variant="body1" className="message-sender">
                    {message.sender}{' '}
                    <span className="message-timestamp">
                      {message.timestamp}
                    </span>
                  </Typography>
                  <Typography variant="body2" className="message-text">
                    {message.text}
                  </Typography>
                </Box>
              ))
            )}
          </Box>

          <Box className="chat-footer">
            <IconButton onClick={handleAttachClick}>
              <AttachFileIcon />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleAttachClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <IconButton>
                <InsertPhotoIcon />
              </IconButton>
              <IconButton>
                <AudiotrackIcon />
              </IconButton>
              <IconButton>
                <ContactMailIcon />
              </IconButton>
            </Popover>
            <TextField
              fullWidth
              placeholder="Write a message..."
              variant="outlined"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              className="message-input"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendMessage}
              endIcon={<SendIcon />}
              className="send-button"
            >
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default ChatWindow;