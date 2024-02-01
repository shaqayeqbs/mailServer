import { Home } from "../../@core/icons/index";
import { Gift, PlusCircle, Person, Calendar } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  // Define the navigation items
  const navigationItems = [
    {
      to: "/",
      text: "خانه",
      icon: <Home size="24" />,
    },
    {
      to: "/store",
      text: "فروشگاه",
      icon: <Gift />,
    },
    {
      to: "/events/add-new-events",
      text: "",
      icon: <PlusCircle size={20} />,
    },
    {
      to: "/calender",
      text: "تقویم",
      icon: <Calendar />,
    },
    {
      to: "/profile",
      text: "پروفایل",
      icon: <Person />,
    },
  ];

  // Render the component
  return (
    <nav className="fixed w-full bg-[url(/assets/bottom-nav-bg.svg)] container bottom-[-2px] rounded-t-3xl z-20 left-0 right-0 text-s flex justify-around p-3 items-center">
      {navigationItems.map((item, index) => (
        <Link key={index} to={item.to}>
          {item.to !== "/events/add-new-events" ? (
            <div>{item.icon}</div>
          ) : (
            <div className="text-xl min-w-full w-full -z-10 bg-no-repeat bg-center relative text-white min-h-5 rounded-full flex items-center justify-center">
              <div className="absolute -top-14 flex justify-center -z-20 w-[95px]">
                <img
                  src="/assets/bg-add.svg"
                  className="-z-20"
                  alt="background"
                />
                <div className="w-10 h-10 flex absolute bottom-3 justify-center items-center text-center rounded-full bg-primary">
                  <PlusCircle />
                </div>
              </div>
            </div>
          )}
          <p className="my-1 text-inherit">{item.text}</p>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavigation;
