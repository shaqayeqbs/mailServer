import React from "react";
import { FiInbox, FiSend, FiTrash2, FiPackage } from "react-icons/fi";
import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar = ({ isOpen, activeTab, onTabClick }) => {
  const router = useRouter();
  const pathname = router.asPath;

  const sidebarData = [
    { id: "/", text: "Inbox", icon: <FiInbox /> },
    { id: "/sent", text: "Sent", icon: <FiSend /> },
    { id: "/trash", text: "Trash", icon: <FiTrash2 /> },
    { id: "/drafts", text: "Drafts", icon: <FiPackage /> },
  ];

  return (
    <div
      className={` ${
        isOpen ? "md:w-[12rem] !px-0 min-h-screen fixed top-[7rem]" : "hidden"
      } p-4`}
    >
      {isOpen && (
        <ul className=" ">
          {sidebarData.map((item) => (
            <li key={item.id} className="w-full">
              <Link
                href={item.id}
                className={`flex items-center w-full p-3 rounded-r-xl my-auto  ${
                  pathname === item.id ? "bg-blue-200" : ""
                }`}
              >
                {item.icon}
                <h2 className="mx-3">{item.text}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
