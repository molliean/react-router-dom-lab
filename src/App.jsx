// src/App.jsx

import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import MailboxList from "./components/MailboxList";
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  function addBox(formData){
    formData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, formData]);
  }
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Reactville Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>} />
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>} />
      </Routes>
    </>
  );
};

export default App;
