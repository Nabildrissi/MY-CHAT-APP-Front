import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  Typography,
  IconButton,
  InputAdornment,
  Popover,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedContact, setMessages } from '../redux/Chatroom/ChatSlice'; // Adjust the import paths accordingly
import { sendMessage } from '../redux/Chatroom/action'; // Adjust the import paths accordingly
import './ChatWindow.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#25D366',
    },
    background: {
      default: '#f0f0f0',
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

function ChatWindow() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.chat.contacts);
  const selectedContact = useSelector((state) => state.chat.selectedContact);
  const messages = useSelector((state) => state.chat.messages);
  const [messageInput, setMessageInput] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage = {
        content: messageInput, // Ensure this matches the backend expected field
        sender: 'You', 
        chatRoomId: 12, // Make sure chatRoomId is provided
      };
      dispatch(sendMessage(newMessage));
      setMessageInput('');
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
      <Box className="chat-container">
        {/* Sidebar */}
        <Box className="sidebar">
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <List className="contact-list">
            {contacts.map((contact, index) => (
              <React.Fragment key={index}>
                <ListItem button onClick={() => dispatch(setSelectedContact(contact))}>
                  <Avatar alt={contact.name} src={contact.img} />
                  <ListItemText
                    primary={contact.name}
                    secondary={`${contact.lastMessage} - ${contact.time}`}
                  />
                </ListItem>
                {index < contacts.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Box>

        {/* Chat Area */}
        <Box className="chat-area">
          <Box className="chat-header">
            <Box className="chat-header-left">
              {selectedContact && (
                <>
                  <Avatar alt={selectedContact.name} src={selectedContact.img} />
                  <Typography variant="h6">{selectedContact.name}</Typography>
                </>
              )}
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
                    {message.content}
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
                {/* Add icons for attachments here */}
              </IconButton>
            </Popover>
            <TextField
              fullWidth
              placeholder="Write a message..."
              variant="outlined"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <Button
              color="primary"
              onClick={handleSendMessage}
              endIcon={<SendIcon />}
              className="send-button"
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default ChatWindow;