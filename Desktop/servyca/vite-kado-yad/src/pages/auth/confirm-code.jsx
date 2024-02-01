import { useState } from "react";

import { Link } from "react-router-dom";
import TextInput from "../../@core/utils/text-input";
const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // router.push("/");
    console.log(`Reset password for email: ${email}`);
  };

  return (
    <div className="mt-20 w-full justify-center p-4 items-center h-screen">
      <div className="">
        <h1 className="text-right max-w-[60%] mb-8 font-extrabold text-4xl">
          ورود به حساب
        </h1>
        <form>
          <p>کد پیامک شده را وارد کنید</p>
          <div className="input-container">
            <TextInput
              // label="Email Or Username"
              placeholder={"enterEmailAddress"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex px-4 text-center mb-16  mt-6 ">
            <p className="font-bold">شماره موبایل ثبت شده:</p>
            <span className="mx-3">09121234567</span>
          </div>
          <Link to="/auth" className="text-center text-primary block ">
            تغییر شماره موبایل
          </Link>
          <button
            type="button"
            className="button  my-1"
            onClick={handleResetPassword}
          >
            تایید
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
