import { Link } from "react-router-dom";
import { Image } from "react-bootstrap-icons";
import moment from "jalali-moment";
import { Envelope } from "react-bootstrap-icons";

function StorePageSlides({ item, style }) {
  const placeholderSrc = "/assets/card-image.svg";
  // Convert Gregorian date to Shamsi date
  const shamsiDate = moment(item?.Date, "YYYY-MM-DD")
    .locale("fa")
    .format("D MMMM");

  return (
    <Link
      to={`/store/${item?.name?.toLowerCase()}/${item?.id?.toString()}`}
      className={`w-full shadow !bg-[red] ${
        style ? style : ""
      } w-full h-[217px] lgh-full    relative mb-2  leading-3  rounded-xl`}
    >
      <div className="shadow p-3">
        <div>
          <Image
            src="/assets/banner.png"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>

        <div className="text-right ">
          <div className="text-[11px] my-3">{item?.Relation_with_you}</div>
          <div>{shamsiDate}</div> {/* Display Shamsi date */}
        </div>
        <div className="flex items-center justify-between">
          <Link className="!text-[8px] !py-1 !p-2 !w-fit button">
            سفارش هدیه
          </Link>
          <button className="bg-primary rounded-full p-2">
            <Envelope color="white" size={16} />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default StorePageSlides;
