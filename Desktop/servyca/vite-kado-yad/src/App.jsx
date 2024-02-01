import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import Events from "./pages/events/index";
import AddNewEvent from "./pages/events/add-new-events";
import Calendar from "./pages/calendar";
import Cancel from "./pages/cancel";
import Store from "./pages/store";
import AuthPage from "./components/auth/auth-form";

import Profile from "./pages/profile";
import StoreCategories from "./pages/store/categories";
import StoreCategory from "./pages/store/categories";
// import StoreProduct from "./pages/store/";
import ServicesCategories from "./pages/services/categoires/index";
import Services from "./pages/services";
import ServicesCategory from "./pages/services/categoires/index";
import ProfileDetail from "./pages/profile/detail";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layouts/index";
import UpdateEvent from "./pages/events/edit";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer theme="colored" />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/auth/welcome" element={<AuthPage />} />
            <Route path="/events/add-new-events" element={<AddNewEvent />} />
            <Route path="/events/edit/:id" element={<UpdateEvent />} />
            <Route path="/calender" element={<Calendar />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/store" element={<Store />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/details" element={<ProfileDetail />} />
            <Route path="/store/categories" element={<StoreCategories />} />
            <Route path="/store/:categories" element={<StoreCategory />} />

            {/* <Route path="/store/:...id" element={<StoreProduct />} />
            <Route path="/store/:id" element={<StoreProduct />} /> */}
            <Route
              path="/services/categories"
              element={<ServicesCategories />}
            />
            <Route path="/services" element={<Services />} />
            <Route
              path="/services/:categories"
              element={<ServicesCategory />}
            />
            {/* Add other routes here */}
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
