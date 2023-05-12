import React, { useState } from "react";
import AddContact from "../components/AddContact";

import { AppDispatch, RootState } from "../redux/store";
import { useSelector } from "react-redux";
import ContactCard from "../components/ContactCard";
import { deleteContact } from "../redux/reducer/AddContactReducer";
import { useDispatch } from "react-redux";
function Home() {
  const details = useSelector((state: RootState) => state.addContact.details);
  const [selectedContact, setSelectedContact] = useState<Contact | undefined>();
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleEdit = (contact: any) => {
    setSelectedContact(contact);
    setVisible(true);


  };

  const handleDelete = (e: any) => {
    dispatch(deleteContact(e));
  };
  const createContact = (e: any) => {
    setVisible(true);

  };

  return (
    <>
      <div className="grid place-content-center m-auto mt-10">
        {visible && <AddContact visible={setVisible} setContact={setSelectedContact} contact={selectedContact} />}
        {!visible && (
          <button
            className="bg-gray-400 border-2 rounded-xl text-white "
            onClick={createContact}
          >
            Create Contact
          </button>
        )}
        <div className="m-20">
          {details ? (
            details.map((detail, key) => (
              <ContactCard
                key={key}
                firstName={detail.firstName}
                lastName={detail.lastName}
                active={detail.status}
                onEditClick={() => handleEdit(detail)}
                onDeleteClick={() => handleDelete(detail.id)}
              />
            ))
          ) : (
            <p className="m-4 ">No user Found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
