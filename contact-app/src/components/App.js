import React,{useState,useEffect} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

 const [contacts, setContacts] = useState([]);

  const addContactHandler =(contact) =>{
    console.log(contact);
    setContacts([...contacts,contact]);
    

  }

  return (
    <div className='ui container'>
      <Header/>
      <br />
      <br />
      <br />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}
export default App;
