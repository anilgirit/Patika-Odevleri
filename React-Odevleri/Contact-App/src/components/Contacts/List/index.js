//concatcs componentinde kullanılacağı için alt dizin olarak oluşturuldu
import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => { //filtrelenmiş objeleri handle etmek için fonsiyon oluşturuldu
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });

  const handleChange = (e) => {
    setFilterText(e.target.value);
  };
  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={handleChange}
      />
      <ul className="ContactUl">
        {filtered.map((contact, i) => (
          <li key={i}>{contact.fullName}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
