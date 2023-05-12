// import { ADD_CONTACT } from "../constant/actionType";
// interface CounterState {
//   details: string[];
// }

// const initialState: CounterState = {
//   details: [],
// };

// function AddContactReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return { ...state, details: action.payload };

//     default:
//       return state;
//   }
// }

// export default AddContactReducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContactsState {
  details: string[];
}

const initialState: ContactsState = {
  details: [],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<any>) => {
      state.details.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<any>) => {
      state.details = state.details.filter(
        (contact) => contact.id !== action.payload
      );
    },
    editContact: (state, action: PayloadAction<any>) => {
      console.log(action.payload)
      const index = state.details.findIndex((c) => c.id !== action.payload.id);

      if (index !== -1) {
        state.details[index] = action.payload;
      }
    },
  },
});

export const { addContact, deleteContact, editContact } = contactsSlice.actions;

export default contactsSlice.reducer;
