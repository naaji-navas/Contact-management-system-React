import React from 'react';
import './App.css'
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  return (
    <div>
      <Header></Header>
      <ContactList></ContactList>
      <AddContact></AddContact>
    </div>
  );
}
export default App;
