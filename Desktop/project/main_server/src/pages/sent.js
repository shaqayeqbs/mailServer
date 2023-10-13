import React from "react";
import dummyData from "../data/MailData";

const Sent = () => {
  // Filter the emails that have 'inbox' set to false
  const sentEmails = dummyData.filter((email) => !email.inbox);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Sent</h1>
      <ul>
        {sentEmails.map((email) => (
          <li key={email.id} className="border p-4 my-4 rounded-lg">
            <h2 className="text-xl font-semibold">{email.subject}</h2>
            <p className="text-gray-600">{email.from}</p>
            <p className="text-gray-800">{email.content}</p>
            <p className="text-gray-400 mt-2">
              Sent: {new Date(email.timestamp).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sent;
