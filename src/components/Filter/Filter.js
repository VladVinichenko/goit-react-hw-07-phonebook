import Input from '../Input/Input'
import { useDispatch } from 'react-redux'
import React from "react";
import { filterContacts } from '../../store/contacts';


const Filter = () => {
  const dispatch = useDispatch()

  const onInputFilter = payload => {
    dispatch(filterContacts(payload.target.value.trim()))
  }

  return (
    <Input name="filter" inputData={onInputFilter}>Find contacts by name</Input>
  )
}

export default Filter;
