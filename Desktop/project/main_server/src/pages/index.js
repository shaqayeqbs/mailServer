import React, { useState } from "react";
import dummyData from "../data/MailData";
import { useSelector } from "react-redux";

const Inbox = () => {
  // const [filteredEmails, setFilteredEmails] = useState(dummyData);
  const filteredEmails = useSelector((state) => state.mails.mails);
  // console.log(filteredEmails);
  console.log("hereeeeeeeeeeeeeee");

  return (
    <div className="p-2">
      <h1 className="text-2xl font-semibold mb-2 text-center">Inbox</h1>
      {/* <Search onSearch={handleSearch} /> */}
      <ul>
        {filteredEmails?.length === 0
          ? dummyData
              .filter((email) => email.inbox)
              .map((email) => (
                <li key={email.id} className="border p-3 my-4 rounded-lg">
                  <h2 className="text-lg font-semibold">{email.subject}</h2>
                  <p className="text-gray-600">{email.from}</p>
                  <p className="text-gray-800">{email.content}</p>
                  <p className="text-gray-400 mt-2">
                    Received: {new Date(email.timestamp).toLocaleString()}
                  </p>
                </li>
              ))
          : filteredEmails?.map((email) => (
              <li key={email.id} className="border p-3 my-4 rounded-lg">
                <h2 className="text-lg font-semibold">{email.subject}</h2>
                <p className="text-gray-600">{email.from}</p>
                <p className="text-gray-800">{email.content}</p>
                <p className="text-gray-400 mt-2">
                  Received: {new Date(email.timestamp).toLocaleString()}
                </p>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Inbox;
