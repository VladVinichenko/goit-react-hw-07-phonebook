import { createAsyncThunk } from "@reduxjs/toolkit"
import { addContacts, getContacts, deleteContacts } from "../api/contacts"

export const addContactsAction = createAsyncThunk('contacts/addContacts', async contact => {
  const response = await addContacts(contact);

  return response;
});

export const deleteContactsAction = createAsyncThunk('contacts/deleteContacts', async id => {
  const response = await deleteContacts(id);

  return response;
});

export const getContactsAction = createAsyncThunk('user/getContacts', async () => {
  const response = await getContacts();

  return response;
});
