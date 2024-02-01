import { Plus } from "react-bootstrap-icons";
import APP_CONFIG from "../../@core/constants/app-config";
function RecomendedSlides({ item, bgColor, bookBtn }) {
  return (
    <div
      dir="rtl"
      className={` text-right  mb-4 items-center mx-auto relative rounded-xl ${
        bgColor ? bgColor : "bg-background !w-[125px] h-[182px]"
      }`}
    >
      <div
        className={` ${
          bgColor
            ? "w-full  h-[81px] relative"
            : "w-full lg:!w-[300px] gh-[130px] h-[81px] relative"
        }`}
      >
        <img
          src={APP_CONFIG.apiBaseUrl + item?.single_image?.image}
          alt={item.title}
          layout="fill"
          className="overflow-hidden block  rounded-t-xl w-[139px] h-[100px]"
        />
      </div>
      <div className=" py-2 mt-3 px-2 leading-3 text-left">
        <div className="flex items-center">
          <p className="text-[11px] whitespace-normal text-right text-nowrap !w-max">
            {item?.name}
          </p>
        </div>
        <div className="flex items-center">
          <p className="ml-1 text text-mutedText text-nowrap !my-0">
            {item?.description?.slice(0, 20)}
          </p>
        </div>
        <div className="flex items-center">
          <p className="ml-1 text">{item.price}$</p>
        </div>
      </div>
      <div className="bg-primary bottom-2 left-2 p-[2px] rounded-full w-fit absolute">
        <Plus color="white" />
      </div>
    </div>
  );
}

export default RecomendedSlides;
