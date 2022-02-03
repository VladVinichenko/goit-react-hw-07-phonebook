import { createSlice, isFulfilled } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { addUserAction } from '../action'

const initialStoreFromLocal = () => {
  const contactsLocal = JSON.parse(localStorage.getItem('contacts'))
  return contactsLocal ? contactsLocal : []
}

const initialState = {
  contacts: initialStoreFromLocal(),
  filter: '',
  loading: false,
  error: '',
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, { name: action.payload.name, number: action.payload.number, id: nanoid() }]
    },
    deleteContact(state, action) {
      console.log(action);
      state.contacts = state.contacts.filter(el => el.id !== action.payload)
      state.filter = state.filter.length > 0 && state.filter.filter(el => el.id !== action.payload)
    },
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
    builder.addCase(addUserAction.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(addUserAction.fulfilled, (state, action) => {
      state.contacts.push(action.payload)
      state.loading = false
    })
    builder.addCase(addUserAction.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export const contactReducer = contactSlice.reducer

export const { addContact, deleteContact, filterContacts } = contactSlice.actions
