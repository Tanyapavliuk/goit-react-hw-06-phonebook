import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialStateContacts = [];

const counterSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  reducers: {
    addContact: (state, action) => {
      const id = nanoid();
      const { name, phone } = action.payload;
      return [...state, { name, phone, id }];
    },
    deliteContact: (state, action) => [
      ...state.filter(({ id }) => id !== action.payload),
    ],
  },
});

export const { addContact, deliteContact } = counterSlice.actions;
export default counterSlice.reducer;
