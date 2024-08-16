import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    contacts: [], // Ensure this is an array
    selectedContact: null,
    messages: [],
  },
  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    setSelectedContact(state, action) {
      state.selectedContact = action.payload;
      state.messages = []; // Clear messages when switching contacts
    },
    setMessages(state, action) {
      state.messages = action.payload;
    },
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
  },
});

export const { setContacts, setSelectedContact, setMessages, addMessage } = chatSlice.actions;

export default chatSlice.reducer;