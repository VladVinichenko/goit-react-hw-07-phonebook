import { useSelector, useDispatch } from 'react-redux'
import s from './ContactList.module.css'
import DeleteButton from '../DeleteButton/DeleteButton'
import propTypes from 'prop-types';
import { deleteContact } from '../../store/contacts';

const ContactList = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(store => store.contactReducer.contacts)
  const filter = useSelector(store => store.contactReducer.filter)

  const itemList = filter.length > 0 ? filter : contacts

  const onClickDelete = payload => {
    dispatch(deleteContact(payload))
  }

  return itemList.length > 0 && !filter.error ? (<ul className={s.list}>
    {itemList.map((item) =>
      <li key={item.id} id={item.id} className={s.item}>
        <p className={s.name}>{item.name}</p><p className={s.number}>{item.number}</p>
        <DeleteButton onDeleteContact={onClickDelete} id={item.id} />
      </li>
    )}
  </ul>) : (
    <p className={s.text}>no results</p>
  )
}

ContactList.propTypes = {
  contacts: propTypes.array
}

export default ContactList