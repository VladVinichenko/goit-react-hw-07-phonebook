import { createSlice, isFulfilled } from '@reduxjs/toolkit'
import { addContactsAction, getContactsAction, deleteContactsAction } from '../action'

const initialState = {
  contacts: [],
  filter: '',
  loading: false,
  error: '',
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    filterContacts(state, action) {
      if (action.payload.trim().length > 0) {
        const currentFilter = state.contacts.filter(el => el.name.toLowerCase().includes(action.payload.toLowerCase()))
        if (currentFilter.length > 0) {
          state.filter = currentFilter
          return
        }
        state.filter = { error: 'no results' }
        return
      }
      state.filter = ''
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addContactsAction.pending, state => {
      state.loading = true
    })
    builder.addCase(addContactsAction.fulfilled, (state, action) => {
      state.contacts = [...state.contacts, action.payload]
      state.loading = false
    })
    builder.addCase(addContactsAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })

    builder.addCase(getContactsAction.pending, state => {
      state.loadingUsers = true;
    });
    builder.addCase(getContactsAction.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.loadingUsers = false;
    });
    builder.addCase(getContactsAction.rejected, (state, action) => {
      state.loadingUsers = false;
      state.error = action.payload;
    });

    builder.addCase(deleteContactsAction.pending, state => {
      state.loadingUsers = true;
    });
    builder.addCase(deleteContactsAction.fulfilled, (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload)
      state.filter = state.filter.length > 0 && state.filter.filter(el => el.id !== action.payload)
      state.loadingUsers = false;
    });
    builder.addCase(deleteContactsAction.rejected, (state, action) => {
      state.loadingUsers = false;
      state.error = action.payload;
    });
  },
})

export const contactReducer = contactSlice.reducer

export const { deleteContact, filterContacts } = contactSlice.actions
