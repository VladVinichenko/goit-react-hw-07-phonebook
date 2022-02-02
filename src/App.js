import Section from "./components/Section/Section";
import React, { useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import s from './App.module.css'
import { connect } from 'react-redux'


function AppState({ contacts }) {
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  return (
    <Fragment>
      <Section>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    </Fragment>
  )
}


const mapStateToProps = store => ({
  contacts: store.contactReducer.contacts
})

const App = connect(
  mapStateToProps
)(AppState)

export default App