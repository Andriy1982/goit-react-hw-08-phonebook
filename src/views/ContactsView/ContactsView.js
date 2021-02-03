import React, { useEffect } from 'react';
import ContactForm from '../../component/ContactForm';
import Filter from '../../component/Filter';
import Contacts from '../../component/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperation } from '../../redux/contacts';

export default function ContactsView(props) {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts.items)
  // console.log(contacts);

  useEffect(() => {
    dispatch(contactsOperation.fetchContacts());
  }, [dispatch]);

  return (
    <section className="section">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts?.length > 0 && <Filter />}
      {contacts?.length > 0 && <Contacts />}
    </section>
  );
}
