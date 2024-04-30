"use client";
import React, { useState } from "react";

function ContactList() {
  const [selected_contact_index, set_selected_contact_index] = useState(0);
  const contacts = [
    { name: "Taylor", email: "taylor@mail.com" },
    { name: "Alice", email: "alice@mail.com" },
    { name: "Bob", email: "bob@mail.com" },
  ];
  const [message, set_message] = useState("");
  return (
    <div className="flex flex-row gap-10">
      <div>
        {contacts.map((contact, index) => (
          <div
            className={`my-4 p-4 cursor-pointer ${
              index === selected_contact_index ? "bg-blue" : "bg-orange"
            }`}
            key={index}
            onClick={() => set_selected_contact_index(index)}
          >
            {contact.name}
          </div>
        ))}
      </div>
      <div>
        chat
        <div>
          <textarea
            className="border-[0.5px]"
            placeholder={`Chat to ${contacts[selected_contact_index].name}`}
            value={message}
            onChange={(event: any) => set_message(event.target.value)}
          ></textarea>
          <br />
          <button> sent to {contacts[selected_contact_index].email} </button>
        </div>
      </div>
    </div>
  );
}

export default ContactList;
