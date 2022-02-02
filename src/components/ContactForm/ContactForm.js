import s from './ContactForm.module.css'
import Input from '../Input/Input';
import Button from '../Button/Button'
import React, { useState } from "react";

import { addContact } from '../../store/contacts';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const dispatch = useDispatch()

  const onInput = (evt) => {
    evt.target.name === "name" && setName(evt.target.value)
    evt.target.name === "number" && setNumber(evt.target.value)
  }

  const onAddContact = (evt) => {
    evt.preventDefault()
    dispatch(addContact({
      name: name, number: number
    }))
  }

  return (
    <form className={s.boxForm} >
      <Input name="name" inputData={onInput}>Name</Input>
      <Input name="number" tel='true' inputData={onInput}>Number</Input>
      <Button name='addContact' action={onAddContact}>Add contact</Button>
    </form >
  )
}

export default ContactForm;
