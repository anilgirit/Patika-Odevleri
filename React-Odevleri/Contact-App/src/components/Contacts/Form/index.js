import React, { useState } from "react";


const defaultFormValues = { fullName: "", phoneNumber: "" };

function Form({ addContact, contacts }) {
  //STATELER
  const [form, setForm] = useState(defaultFormValues);
  // her seferinde yeniden yazmamak için input içine girilen değeri yakalamak için fonksiyon hazırladık
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); //..form ile fom stateinde olan değerleri değiştirmeden aldık
  };
  const onSubmit = (e) => {
    if (form.fullName !== "" && form.phoneNumber !== "") {
      addContact([...contacts, form]);
    } else {
      alert("Eksik Değer Girildi");
    }

    e.preventDefault();
    setForm(defaultFormValues);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="fullName"
            placeholder="Name"
            value={form.fullName}
            onChange={handleChange} //inputlara girilen değerleri yakalamak için onchange kullandık
          />
        </div>
        <div>
          <input
            name="phoneNumber"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
