import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";
import AddContactReducer, {
  addContact,
  editContact,
} from "../redux/reducer/AddContactReducer";
interface NewFormProps {
  addContact(event: string): void;
  contact?: any;
}
const AddContact: React.FC<NewFormProps> = ({
  contact,
  visible,
  setContact,
}: any) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("active");
  const dispatch = useDispatch<AppDispatch>();

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = Date.now();
    const newContact = { id, firstName, lastName, status };
    if (contact) {
      dispatch(editContact({ ...contact, ...newContact }));
      visible(false);
      setContact(!contact);
    } else {
      if (firstName === "" || lastName === "") return;
      dispatch(addContact(newContact));

      visible(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-4 w-[100%] h-[100%] bg-white rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block font-medium text-gray-700"
          >
            First Name*
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            className="mt-1 form-input block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-medium text-gray-700">
            Last Name*
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            className="mt-1 form-input block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <span className="block font-medium text-gray-700">Status</span>
          <div className="mt-1">
            <label htmlFor="active" className="inline-flex items-center mr-4">
              <input
                type="radio"
                id="active"
                name="status"
                value="active"
                checked={status === "active"}
                onChange={handleStatusChange}
                className="form-radio"
              />
              <span className="ml-2">Active</span>
            </label>
            <label htmlFor="inactive" className="inline-flex items-center">
              <input
                type="radio"
                id="inactive"
                name="status"
                value="inactive"
                checked={status === "inactive"}
                onChange={handleStatusChange}
                className="form-radio"
              />
              <span className="ml-2">Inactive</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md"
        >
          {contact ? "Save" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddContact;
