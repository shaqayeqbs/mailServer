import React from "react";
import dummyData from "../data/MailData";
const Draft = () => {
  // Filter the emails that have 'draft' set to true
  const draftEmails = dummyData.filter((email) => email.draft);

  if (!draftEmails.length) {
    return (
      <p className=" flex justify-center items-center w-full  h-screen m-auto">
        There is no draft{" "}
      </p>
    );
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Draft</h1>
      <ul>
        {draftEmails.map((email) => (
          <li key={email.id} className="border p-4 my-4 rounded-lg">
            <h2 className="text-xl font-semibold">{email.subject}</h2>
            <p className="text-gray-600">{email.from}</p>
            <p className="text-gray-800">{email.content}</p>
            <p className="text-gray-400 mt-2">
              Drafted: {new Date(email.timestamp).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Draft;
