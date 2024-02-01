import CategoryCard from "./categori-card";
import { PaintBucket } from "react-bootstrap-icons";
import APP_CONFIG from "../../@core/constants/app-config";
import { Link } from "react-router-dom";
const Categories = ({ style, link }) => {
  console.log("jiiiiiii");
  const categoriesData = [
    { id: 0, name: "home & kitchen", icon: <PaintBucket /> },
    { id: 1, name: "Cooking", icon: <PaintBucket /> },
    { id: 2, name: "Painting", icon: <PaintBucket /> },
    { id: 3, name: "Electronics", icon: <PaintBucket /> },
    { id: 4, name: "Kids", icon: <PaintBucket /> },
    { id: 5, name: "Animals", icon: <PaintBucket /> },
    { id: 6, name: "Piping", icon: <PaintBucket /> },
    { id: 7, name: "Planting", icon: <PaintBucket /> },
    { id: 8, name: "Shoping", icon: <PaintBucket /> },
    { id: 9, name: "Haircut", icon: <PaintBucket /> },
    { id: 10, name: "Construction", icon: <PaintBucket /> },
    { id: 11, name: "Essentials", icon: <PaintBucket /> },
  ];

  console.log(categoriesData, "d");

  return (
    <div
      className={`grid grid-cols-4    ${
        style ? style : " p-  lggrid-cols-6"
      } my-5  gap-4 gap-x-3 justify-center`}
    >
      {categoriesData?.map((category, index) => (
        <Link
          key={index}
          to={`${
            link
              ? `${link}/${category.name.toLowerCase()}`
              : `/store/${category.name.toLowerCase()}`
          }`}
        >
          <div key={index} className="w-full  items-center text-primary">
            <div className="rounded-full bg-[white] relative   mx-auto  w-[56px] h-[56px]  flex items-center justify-center border-textColor  font-bold">
              {" "}
              {/* <img
                width={30}
                height={30}
                src={APP_CONFIG?.apiBaseUrl + category?.icon}
                alt="icon"
                className="w-[rem] h-[1.2rem] text-primary"
              /> */}
              {category.icon}
            </div>
            <div className="text-s w-max items-center mx-auto mt-2">
              {category.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
