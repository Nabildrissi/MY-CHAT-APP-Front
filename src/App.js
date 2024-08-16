import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import ChatWindow from './pages/ChatWindow';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <CssBaseline />
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/chat" element={<ChatWindow />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;