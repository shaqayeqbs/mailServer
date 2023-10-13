import React from "react";
import dummyData from "../data/MailData";

const Trash = () => {
  // Filter the emails that have been moved to the trash
  const trashEmails = dummyData.filter((email) => email.trash);
  if (!trashEmails.length) {
    return (
      <p className=" flex justify-center items-center w-full  h-screen m-auto">
        There is no trash mail{" "}
      </p>
    );
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Trash</h1>
      <ul>
        {trashEmails.map((email) => (
          <li key={email.id} className="border p-4 my-4 rounded-lg">
            <h2 className="text-xl font-semibold">{email.subject}</h2>
            <p className="text-gray-600">{email.from}</p>
            <p className="text-gray-800">{email.content}</p>
            <p className="text-gray-400 mt-2">
              Trashed: {new Date(email.timestamp).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trash;
