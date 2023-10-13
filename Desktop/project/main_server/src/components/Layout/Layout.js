import React, { useState } from "react";
import Sidebar from "./SideBar";
import Navbar from "./NavBar";
import NewMail from "./NewMail";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isComposeModalOpen, setIsComposeModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const openComposeModal = () => {
    setIsComposeModalOpen(true);
  };

  const closeComposeModal = () => {
    setIsComposeModalOpen(false);
  };

  return (
    <div className="flex min-h-scree z-0">
      <Sidebar isOpen={isOpen} />
      <Navbar
        toggleSidebar={toggleSidebar}
        openComposeModal={openComposeModal}
      />
      <div className={`w-full ${isOpen ? "ml-[8rem] md:ml-[13rem]" : ""}`}>
        <main className="bg-myWhite min-h-screen py-8 p-1 md:p-8 rounded-2xl mt-24">
          {children}
        </main>
        <NewMail isOpen={isComposeModalOpen} onClose={closeComposeModal} />
      </div>
    </div>
  );
};

export default Layout;
