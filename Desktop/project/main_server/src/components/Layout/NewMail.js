import React, { useState } from "react";
import { FiImage } from "react-icons/fi";

const NewMail = ({ isOpen, onClose }) => {
  const [subject, setSubject] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const [attachment, setAttachment] = useState(null);

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleEmailContentChange = (e) => {
    setEmailContent(e.target.value);
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
  };

  const handleSendEmail = () => {
    // Implement sending email functionality here
    // You can use subject, emailContent, and attachment as needed
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      } z-50 bg-gray-900 bg-opacity-50`}
    >
      <div className="fixed bottom-0  md:right-24 md::min-w-[20rem] rounded-t-xl bg-gray-200 shadow-xl h-[26rem] p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">New Mail</h2>
          <button onClick={onClose} className="text-red-500 hover:text-red-700">
            Close
          </button>
        </div>
        <hr className="my-5 text-primary border-shark" />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={handleSubjectChange}
          className="w-full p-2 mb-4 rounded-md border focus:outline-none focus:ring focus:border-primary"
        />
        <input
          type="text"
          placeholder="To"
          value={subject}
          onChange={handleSubjectChange}
          className="w-full p-2 mb-4 rounded-md border focus:outline-none focus:ring focus:border-primary"
        />

        <textarea
          placeholder="Compose your email..."
          value={emailContent}
          onChange={handleEmailContentChange}
          className="w-full h-32 p-2 mb-4 rounded-md border focus:outline-none focus:ring focus:border-primary"
        />

        <div className="flex items-center mb-4">
          <label htmlFor="attachment" className="cursor-pointer mr-2">
            <FiImage size={20} />
          </label>
          <input
            type="file"
            id="attachment"
            accept="image/*"
            onChange={handleAttachmentChange}
            className="hidden"
          />
          {attachment && <span>{attachment.name}</span>}
          <button
            onClick={handleSendEmail}
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewMail;
