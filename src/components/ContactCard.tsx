import React from 'react';

interface ContactCardProps {
  firstName: string;
  lastName: string;
  active: boolean;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  firstName,
  lastName,
  active,
  onEditClick,
  onDeleteClick,
}) => {
  const statusColor = active ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">
        {firstName} {lastName}
      </h2>
      <p className={`inline-block px-2 py-1 text-sm font-semibold text-white rounded-md ${statusColor}`}>
        {active ? 'Active' : 'Inactive'}
      </p>
      <div className="mt-4 flex justify-end">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
          onClick={onEditClick}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={onDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
