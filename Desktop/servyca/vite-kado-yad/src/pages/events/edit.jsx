import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Select, { components } from "react-select";
import BackButton from "../../@core/utils/back-button";
import { updateEventApi } from "../../@core/api/events"; // Import updateEventApi
import TextInput from "../../@core/utils/text-input";
import useEventsStore from "../../store/event-store";
import { toast } from "react-toastify";
import {
  eventRelation,
  eventTypeOptions,
} from "../../@core/data/event-relation";
import { day, dateTypeOptions, month } from "../../@core/data/date";

const CustomSingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>
    <div className="flex items-center">
      {/* Add any additional styling or elements here */}
      <span>{children}</span>
    </div>
  </components.SingleValue>
);
function UpdateEvent() {
  const [description, setDescription] = useState("");
  const decriptionRef = useRef();
  const [showhelp, setShowHelp] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    eventType: "",
    eventDate: {
      year: "",
      month: "",
      day: "",
    },
    relationship: "",
    name: "",
    gender: "female",
    age: "",
    description: "",
    giftHelp: false,
  });
  const navigate = useNavigate();
  const { addEvent, updateEvent, events } = useEventsStore();
  const { id } = useParams(); // Get the 'id' parameter from the URL

  useEffect(() => {
    // Find the event data based on the 'id' from the store
    const event = events.find((event) => event.id == id);
    console.log(id, events);
    if (event) {
      const parsedDate = event.Date.split("-");
      // If event is found, update the form data
      setFormData({
        eventType: event.Type,
        eventDate: {
          year: parsedDate[0],
          month: parsedDate[1],
          day: parsedDate[2],
        },
        relationship: event.Relation_with_you,
        name: event.name,
        gender: event.friend_sex,
        age: event.friend_age,
        description: event.Description,
        giftHelp: event.require_suggestion_for_gift,
      });
      setUser(event.user);

      setDescription(event.Description);
      setShowHelp(event.require_suggestion_for_gift);
    } else {
      // Handle the case where the event is not found
      toast.error("Event not found");
    }
  }, [id, events]);

  const handleInputChange = (name, value) => {
    console.log(name, value);
    if (name?.startsWith("eventDate.")) {
      // If the input is related to eventDate, update the nested structure
      const dateField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        eventDate: {
          ...prevData.eventDate,
          [dateField]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleGenderCheckboxChange = (gender) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: gender,
    }));
  };

  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      giftHelp: !prevData.giftHelp,
    }));
    setShowHelp(!showhelp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData, description);

    // Validate required fields
    if (
      !formData.eventType ||
      !formData.eventDate.day ||
      !formData.eventDate.month ||
      !formData.eventDate.year ||
      !formData.relationship ||
      !description
    ) {
      return toast.error("Please fill in all required fields");
    }

    // Format the date before sending
    const formattedDate = `${formData.eventDate.year}-${formData.eventDate.month}-${formData.eventDate.day}`;

    // Validate date format (customize this based on your backend's expectation)
    if (
      !formData.eventDate.year ||
      !formData.eventDate.month ||
      !formData.eventDate.day
    ) {
      toast.error("Please select a valid date");
      return;
    }

    const dataToSend = {
      Type: formData.eventType,
      Date: formattedDate,
      Relation_with_you: formData.relationship,
      Description: description,
      require_suggestion_for_gift: showhelp,
      name: formData.name,
      age: formData.age,
      gender: formData.gender,
      user: user,
    };

    try {
      console.log(id, "idddddddddddddddddddddddddddddd");
      const res = await updateEventApi(id, dataToSend);

      if (res?.data.status === "ok") {
        if (id) {
          // If it's an update, call updateEvent with the updated data
          updateEvent(id, res.data);
          toast.success("Event updated successfully");
        } else {
          // If it's an add, call addEvent with the added event
          addEvent(res.data);
          toast.success("Event added successfully");
        }
        navigate("/events");
        console.log("Event added/updated successfully:", res.data);
      } else {
        toast.error("Error adding/updating event");
      }
    } catch (error) {
      toast.error("Error adding/updating event");
      console.error("Error adding/updating event:", error.message);
    }
  };

  return (
    <div className="p-4 container !text-right">
      <div className="my-5">
        <BackButton title="ویرایش رویداد" />
      </div>
      <form onSubmit={handleSubmit} className="max-w-md  mx-auto">
        <div className="mb-4 relative">
          <label htmlFor="eventType" className="block text-sm mb-5 font-bold ">
            عنوان{" "}
          </label>
          <Select
            id="eventType"
            name="eventType"
            placeholder="نوع مناسبت را انتخاب کنید"
            value={eventTypeOptions.find(
              (option) => option.value === formData.eventType
            )}
            onChange={(selectedOption) =>
              handleInputChange("eventType", selectedOption.value)
            }
            options={eventTypeOptions}
            className="mt-1  pr- border rounded-md w-full"
            components={{ IndicatorSeparator: () => null }}
            styles={{
              indicatorSeparator: (base) => ({
                ...base,
                display: "none",
              }),
            }}
          />
        </div>
        <label htmlFor="eventType" className="block text-sm  font-bold ">
          تاریخ رویداد
        </label>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <Select
              id="year"
              name="eventDate.year"
              value={dateTypeOptions.find(
                (option) => option.value === formData.eventDate.year
              )}
              onChange={(selectedOption) =>
                handleInputChange("eventDate.year", selectedOption.value)
              }
              className="mt-1 text-s p-2 pl-3 border rounded-md w-full"
              options={dateTypeOptions}
              components={{ IndicatorSeparator: () => null }}
              styles={{
                indicatorSeparator: (base) => ({
                  ...base,
                  display: "none",
                }),
              }}
              placeholder="سال"
            />
          </div>

          <div>
            <Select
              id="month"
              placeholder="ماه"
              name="eventDate.month"
              options={month}
              value={month.find(
                (option) => option.value === formData.eventDate.month
              )}
              onChange={(selectedOption) =>
                handleInputChange("eventDate.month", selectedOption.value)
              }
              className="mt-1 text-sm p-2 pl-3 border rounded-md w-full"
            >
              <option value="" disabled selected>
                انتخاب کنید
              </option>
              {/* Add month options dynamically if needed */}
            </Select>
          </div>

          <div>
            <Select
              placeholder=" روز"
              id="day"
              name="eventDate.day"
              options={day}
              value={day.find(
                (option) => option.value === formData.eventDate.day
              )}
              onChange={(selectedOption) =>
                handleInputChange("eventDate.day", selectedOption.value)
              }
              className="mt-1 p-2 pl-3 border rounded-md w-full"
            >
              <option value="" disabled selected>
                انتخاب کنید
              </option>
              {/* Add day options dynamically if needed */}
            </Select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="relationship" className="block text-sm font-bold">
            نسبت با شما
          </label>
          <Select
            id="relationship"
            name="relationship"
            placeholder="فرد مرتبط با رویداد، با شما چه نسبتی دارد؟"
            onChange={(selectedOption) =>
              handleInputChange("relationship", selectedOption.value)
            }
            value={eventRelation.find(
              (option) => option.value == formData.relationship
            )}
            options={eventRelation}
            className="mt-1 p-2 pl-3 border rounded-md w-full"
            components={{ SingleValue: CustomSingleValue }} // Use the custom SingleValue component
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-bold">
            توضیحات
          </label>
          <textarea
            id="description"
            placeholder="اگر نیاز به توضیح بیشتر هست، اینجا بنویسید ...."
            name="description"
            ref={decriptionRef}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            rows="4"
            className="mt-1 p-2 pl-3 border rounded-md w-full"
          ></textarea>
        </div>

        <div className="mb-4 flex space-x-4">
          <label htmlFor="giftHelp" className="text-sm w-full font-medium ">
            دوست داری در انتخاب هدیه کمک دریافت کنی؟
          </label>
          <button
            type="button"
            onClick={handleCheckboxChange}
            className={`${
              formData.giftHelp ? "bg-primary" : "bg-gray-300"
            } w-16 h-6 rounded-full transition-all duration-300 relative focus:outline-none`}
          >
            <span
              className={`${
                formData.giftHelp ? "translate-x-5" : "-translate-x-5"
              } inline-block w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300`}
            ></span>
          </button>
        </div>
        <div className="text-mutedText text-s">
          این امکان کاملا رایگان است و به شما در انتخاب بهترین و زیباترین هدیه
          کمک میکند. اگر نمیدونی چی بخری، حتما این امکان رو فعال کن
        </div>
        <div>
          {showhelp && (
            <div className="mt-10">
              <div>
                <TextInput
                  label="نام فرد"
                  placeholder="نام فرد مرتبط با رویداد انتخاب شده را وارد کنید"
                  value={formData.name}
                  onChange={(value) =>
                    handleInputChange("name", value.target.value)
                  }
                />
              </div>
              <div className="flex items-center mt-5 space-x-4 gap-6 justif-between">
                <div className="w-fit">
                  <TextInput
                    label="  سن فرد"
                    placeholder="عدد را وارد کنید"
                    value={formData.age}
                    type="num"
                    onChange={(value) =>
                      handleInputChange("age", value.target.value)
                    }
                  />
                </div>
                <div className="text-right">
                  <label htmlFor="name" className="block text-sm font-bold">
                    جنسیت
                  </label>
                  <div className="flex w-full">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="male"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={() => handleGenderCheckboxChange("male")}
                        style={{ display: "none" }} // hide the default checkbox
                      />
                      <div
                        className={`w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer ${
                          formData.gender === "male" ? "bg-primary" : "bg-white"
                        }`}
                        onClick={() => handleGenderCheckboxChange("male")}
                      >
                        {formData.gender === "male" && (
                          <span className="text-white text-s flex items-center justify-center mt-[1px]">
                            &#10003;
                          </span>
                        )}
                      </div>
                      <label htmlFor="male">مرد</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="female"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={() => handleGenderCheckboxChange("female")}
                        style={{ display: "none" }} // hide the default checkbox
                      />
                      <div
                        className={`w-4 p-2 h-4 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer ${
                          formData.gender === "female"
                            ? "bg-primary"
                            : "bg-white"
                        }`}
                        onClick={() => handleGenderCheckboxChange("female")}
                      >
                        {formData.gender === "female" && (
                          <span className="text-white text-s flex items-center justify-center mt-[1px]">
                            &#10003;
                          </span>
                        )}
                      </div>
                      <label htmlFor="female">زن</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <button
            type="submit"
            className="button px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            ثبت تغییرات
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateEvent;
