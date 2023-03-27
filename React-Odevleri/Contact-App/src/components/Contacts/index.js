import React, { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    // form comp. dan gelen contactlar state edildi
    {
      fullName: "apo",
      phoneNumber: "11",
    },
    {
      fullName: "ahmet",
      phoneNumber: "2221312",
    },
    {
      fullName: "mamet",
      phoneNumber: "2324",
    },
  ]);

  return (
    <div className="Contacts">
      <List contacts={contacts}></List> {/*contactlar prop olarak gönderildi*/}
      <Form addContact={setContacts} contacts={contacts}></Form> {/*contactlar prop olarak alındı*/}
    </div>
  );
}

export default Contacts;
