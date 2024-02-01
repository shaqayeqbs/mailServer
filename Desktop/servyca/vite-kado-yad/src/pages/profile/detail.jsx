import React, { useState } from "react";
import BackButton from "../../@core/utils/back-button";
import TextInput from "../../@core/utils/text-input";
import { BoxArrowLeft } from "react-bootstrap-icons";

function ProfileDetail() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberEditable, setIsPhoneNumberEditable] = useState(false);

  const handlePhoneNumberEdit = () => {
    setIsPhoneNumberEditable(!isPhoneNumberEditable);
  };

  const handleSubmit = () => {
    // Perform any logic you need with the form data
    console.log("Submitted:", { fullName, email, phoneNumber });
  };

  return (
    <div className="p-5 container">
      <div className="flex justify-between items-center">
        <BackButton title="اطلاعات حساب کاربری" />
        <button className="button !w-min !rounded-[10px] !p-4 !py-1">
          خروج
          <BoxArrowLeft color="white" />
        </button>
      </div>

      <form>
        <p className="text-[18px] text-right">نام و نام خانوادگی </p>
        <div className="input-container !h-min relative">
          <TextInput
            placeholder=" نام خود را وارد کنید"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <p className="text-[18px] text-right">آدرس ایمیل</p>
        <div className="input-container !h-min relative">
          <TextInput
            placeholder="با وارد کردن ایمیل خود، زودتراز بقیه از جشنواره ها باخبر می شوید."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <p className="text-[18px] text-right">شماره تلفن</p>
        <div className="input-container !h-min relative">
          <TextInput
            placeholder="09121345678"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            disabled={!isPhoneNumberEditable}
          />
          <button
            type="button"
            className="text-primary !ml-2"
            onClick={handlePhoneNumberEdit}
          >
            ویرایش
          </button>
        </div>

        <button
          type="button"
          className="button !mt-20 block"
          onClick={handleSubmit}
        >
          تایید
        </button>
      </form>
    </div>
  );
}

export default ProfileDetail;
