import { useState, useEffect } from "react";
import useExpertStore from "../store/booked-experts";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import BackButton from "../@core/utils/back-button";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

import { Link } from "react-router-dom";
import TopNav from "../components/navbar/top-nav";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router

const CalendarPage = () => {
  const defaultValue = {
    year: 2023,
    month: 11,
    day: 17,
  };

  const { bookedExperts } = useExpertStore();
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  const navigate = useNavigate(); // Assuming you are using React Router

  useEffect(() => {
    // Dispatch an action to fetch booked experts if needed
    // For demonstration purposes, setting an empty array initially
    // You may dispatch an action to fetch data from the server here
    // dispatch(fetchBookedExperts());
    return () => {
      // Cleanup function when the component is unmounted
      console.log("CalendarPage component unmounted");
    };
  }, []);

  const handleNavigateToOtherPage = () => {
    // Navigate to another page
    // navigate("/other-page");
  };

  return (
    <div className="p-4 w-full container">
      <TopNav />
      <div className="mb-4">
        <BackButton title="مشاهده تقویم" />
      </div>
      <div className="flex items-center justify-center">
        <div className="calendar-container">
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            colorPrimary="rgb(255 96 0 / var(--tw-bg-opacity))"
            calendarClassName="custom-calendar "
          />
        </div>
      </div>
      <h3 className="ml-4 text-right font-bold text-md">رویدادهای امروز</h3>

      {/* Check if there are booked experts */}
      {bookedExperts.length > 0 ? (
        <div className="m-auto w-full">
          {/* Render booked experts */}
          {bookedExperts.map((expert) => (
            <div
              key={expert.id}
              className="m-2 p-1 flex justify-center bg-[white]"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-[79px] h-[79px] rounded-lg"
              />
              <div className="w-full text-right ">
                <p className="font-bold mt-1 mr-2 w-full text-right text">
                  {expert.name}
                </p>
                <p className="text-mutedText mr-2 text-right">
                  {expert.category}
                </p>
                <button
                  onClick={() => navigate(`/experts/${expert.id}`)}
                  className="px-2 text-s text-primary "
                >
                  نمایش جزئیات بیشتر
                </button>
              </div>
              <div>
                <Link
                  to="/messages?view=calls"
                  onClick={() => navigate(`/experts/${expert.id}`)}
                  className="button py-1 max-w-[80px] my-2 ml-1 text-s "
                >
                  تماس
                </Link>
                <Link
                  to="/messages?view=chats"
                  onClick={() => navigate(`/experts/${expert.id}`)}
                  className="button p-1 my-2 max-w-[80px] w-fit ml-1 px-10 text-s "
                >
                  پیام
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="m-auto flex justify-center w-full">
          {/* Render order icon */}
          <img src="/assets/calendar.svg" alt="Calendar Icon" />
        </div>
      )}

      {/* Conditional message based on whether there are booked experts */}
      {bookedExperts?.length > 0 ? (
        <div>{/* <p className="font-bold">Your booked experts:</p> */}</div>
      ) : (
        <div className="text-center">
          <p className="font-bold">امروز هیچ خبری نیست :)</p>
          <p className="text-mutedText m-0">
            میتونی با تعریف رویداد جدید، هم به موقع پیام یادآوری دریافت کنی و هم
            بهت میگیم هدیه چی بخری. همش هم رایگانه
          </p>
          <button
            className="button mdmax-w-[700px] inline-block mb-20 max-w-[96%] mx-auto mt-5"
            onClick={handleNavigateToOtherPage}
          >
            تعریف رویداد جدید
          </button>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
