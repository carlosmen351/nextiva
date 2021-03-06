import React from "react";
import styled from 'styled-components';
import { ContactSearch } from "../components/ContactSearch";
import { AddContactButton } from "../components/AddContactButton";
import { Contact } from "../components/Contact";
import { useState } from "react";
import { ContactList } from "../components/ContactList";
import { ContactForm } from "../components/ContactForm";


const Container = styled.div`
  width: 80%;
  height: 80%;
  margin: 2rem auto 0;
`;

function App() {

  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState('');
  const [contacts, setContacts] = useState([]);

  let searchedContacts = [];

  if (!search.length > 1) {
    searchedContacts = contacts;
  } else {
    searchedContacts = contacts.filter(contact => {
      const contactName = contact.name.toLowerCase();
      const contactPhone = contact.phone.toString();
/*       const contactExtraPhone = contact.extraPhone.toString(); */
      const searchText = search.toLowerCase();
      return (
        contactName.includes(searchText)
        ||
        contactPhone.includes(searchText)
/*         ||
        contactExtraPhone.includes(searchText) */
      )
    })
  }

  const editContact = (info) => {
    const contactIndex = contacts.findIndex(contact => contact.name === info || contact.phone === info)
    const newContacts = [...contacts]
    newContacts[contactIndex] = {
      name: contacts[contactIndex].name,
      phone: contacts[contactIndex].phone,
      edited: true
    }
    setContacts(newContacts);
  }
  const onDeleted = (info) => {
    const todoIndex = contacts.findIndex(contact => contact.name === info || contact.phone === info);
    const newContacts = [...contacts];
    newContacts.splice(todoIndex, 1);
    setContacts(newContacts)
  };

  if (modal === false) {
    return (
      <Container>
        <h2>Search</h2>
        <ContactSearch
          search={search}
          setSearch={setSearch}
        />
        <ContactList>
          {
            searchedContacts.length ? (
              <React.Fragment>
                {searchedContacts.map(contact => (
                  <Contact
                    key={contact.name}
                    name={contact.name}
                    phone={contact.phone}
                    onDeleted={() => onDeleted(contact.name)}
                  />
                ))}
              </React.Fragment>
            ) : (
              <p>No hay contactos</p>
            )
          }
          {}
          </ContactList>
        <AddContactButton
        modal={modal}
        setModal={setModal}
        />
      </Container>
    );
  } else if (modal === true) {
    return (
      <Container>
        <ContactForm
          modal={modal}
          setModal={setModal}
          contacts={contacts}
          setContacts={setContacts}
        />
      </Container>
    )
  }
}

export { App };
