import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import CssBaseline from '@mui/material/CssBaseline';
// import ChatWindow from './pages/ChatWindow';
// import Register from './Components/Auth/Register';
// import Login from './Components/Auth/Login';
// import store from './redux/store';
// import { Provider } from 'react-redux';
import useAuth from './hooks/useAuth';
import ChatWindow from './pages/ChatWindow';
import Protected from './Protected';



function App() {
  const [isLogin, token] = useAuth();
  return isLogin ? <Protected token={token} /> : <ChatWindow />;
}

export default App;


