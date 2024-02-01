import { ChevronLeft } from "react-bootstrap-icons";
import Close from "../../@core/icons/svgs/close";
import { Link } from "react-router-dom";

import {
  HandIndex,
  Gear,
  Clock,
  Share,
  Bell,
  PersonGear,
  Heart,
  Star,
  People,
  Person,
  GeoAlt,
  Gift,
  Telegram,
} from "react-bootstrap-icons";

const ProfileItems = () => {
  const profileItems = [
    { label: "حساب کاربری", icon: <Person />, href: "/profile/details" },

    { label: "مدیریت رویدادها", icon: <Clock />, href: "/events" },
    { label: "آدرس های شما", icon: <GeoAlt />, href: "/" },
    {
      label: "سفارش های شما",
      icon: <Gift />,
      href: "/store/manage-product-orders",
    },
    { label: "مورد علاقه ها", icon: <Heart />, href: "/" },
    { label: "ارتباط با پشتیبانی", icon: <PersonGear />, href: "/" },
    { label: "تخفیف و جایزه", icon: "%", href: "/" },

    { label: "مشاوره رایگان خرید هدیه", icon: <People />, href: "/" },
    { label: "کادویاد در شبکه های اجتماعی", icon: <Telegram />, href: "/" },

    // { label: "Logout", icon: <Close />, href: "/" },
  ];

  return (
    <div>
      <ul className="bg-white px-4 py-2 my-3 rounded-lg">
        {profileItems.map((item, index) => (
          <li
            key={index}
            className={`flex justify-between items-center py-2 ${
              item.label === "کادویاد در شبکه های اجتماعی" ? "" : "border-b-1"
            }`}
          >
            <Link to={item.href} className="inline-block w-full">
              <div className=" flex justify-between items-center">
                <div className="flex gap-2 items-center p">
                  <div className="text-mutedText">{item.icon}</div>
                  <div
                    className={`font-bold text-15px ${
                      item.label === "" ? "text-error" : ""
                    }`}
                  >
                    {item.label}
                  </div>
                </div>
                <div>
                  <ChevronLeft color="black" />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileItems;
