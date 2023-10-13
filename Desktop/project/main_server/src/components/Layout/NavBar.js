import { Tooltip as ReactTooltip } from "react-tooltip";
import { FiMenu, FiEdit2 } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";

import Search from "../search";

const Navbar = ({ toggleSidebar, openComposeModal }) => {
  return (
    <div className="fixed bg-gray-200 w-full p-4 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between ">
      <div className="flex justify-start  md:justify-between items-center mb-4 md:mb-0">
        <button onClick={toggleSidebar} className="text-2xl mr-5">
          <FiMenu />
        </button>
        <button
          onClick={openComposeModal}
          className="w-full md:w-auto  flex items-center w-min  bg-outerSpace text-white px-4 py-2 rounded-full hover:bg-blue-600"
        >
          <FiEdit2 />
          <h2 className="mx-2">Compose</h2>
        </button>
      </div>
      <div className="flex items-center justify-between w-full md:w-auto">
        <Search />
        <div className="flex justify-between">
          <ReactTooltip
            id="support-tooltip"
            effect="solid"
            place="bottom"
            type="dark"
          />
          <div
            data-tooltip-content="Support"
            data-tooltip-id="support-tooltip"
            className="relative group mx-3  text-2xl"
          >
            <BiSupport />
          </div>
          <ReactTooltip
            id="settings-tooltip"
            effect="solid"
            place="bottom"
            type="dark"
          />
          <div
            data-tooltip-content="Settings"
            data-tooltip-id="settings-tooltip"
            className="relative group  text-2xl"
          >
            <AiOutlineSetting className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
