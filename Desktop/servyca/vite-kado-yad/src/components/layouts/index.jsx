import { useLocation, Outlet } from "react-router-dom";
import BottomNavigation from "./bottom-nav";

const Layout = ({ children }) => {
  const location = useLocation();

  // List of routes where BottomNavigation should be displayed
  const routesWithBottomNav = [
    "/",
    "/events",
    "/events/add-new-events",
    "/calender",
    "/cancel",
    "/store",
    "/experts",
    "/profile",
    "/store/categories",
    "/store/[categoires]",
    "/store/[...id]",
    "/store/[id]",
    "/services/categories",
    "/services",
    "/services/[categories]",
  ];

  const shouldDisplayBottomNav = routesWithBottomNav.includes(
    location.pathname
  );

  return (
    <div className="container ">
      <Outlet />
      <main className="mb-20 h-full">{children}</main>
      {shouldDisplayBottomNav && <BottomNavigation />}
    </div>
  );
};

export default Layout;
