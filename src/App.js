import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import CssBaseline from '@mui/material/CssBaseline';

import ChatWindow from './pages/ChatWindow';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';

function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/chat" element={<ChatWindow />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;