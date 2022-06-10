import React from 'react'
import ContactCard from './ContactCard';

const ContactList=(props)=> {
    const renderContactList=props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} />
        );
    })
  return (
    <div className='ui celled list'>
        <h3>Contact list</h3>
        {renderContactList} 
    </div>
  )
}

export default ContactList