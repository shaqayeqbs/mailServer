import { Link } from "react-router-dom";

import { ChevronDoubleLeft } from "react-bootstrap-icons";

function SeeAll({ title, link }) {
  return (
    <div className="flex justify-between p-5 ">
      <h2 className="font-bold text-m">{title}</h2>
      <Link to={link} className="flex gap-3 items-center">
        <div className="flex gap-1 flex-1 items-center">
          <p className="text-fundation !text-[15px] text">مشاهده همه</p>
          <ChevronDoubleLeft
            className="text-fundation "
            color="rgb(87 87 87 / var(--tw-text-opacity))"
            size={14}
          />
        </div>
      </Link>
    </div>
  );
}

export default SeeAll;
