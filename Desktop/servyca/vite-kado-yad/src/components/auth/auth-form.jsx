import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../@core/api/authApi";
import TextInput from "../../@core/utils/text-input";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const navigate = useNavigate();

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setEmail("");
    setPassword("");
  };

  const handleSubmitBtn = async () => {
    let res;

    if (!isSignUp) {
      res = await login({ username: email, password });
    }

    // Check the response and display appropriate toast message
    if (!res?.detail && res?.code !== 400) {
      toast.success("loginSuccess");
      navigate("/"); // Redirect to "/" after successful login
    } else {
      toast.error(res?.message ? res?.message : "loginFailed");
    }
  };

  return (
    <div className="mt-20 md:max-w-[400px] mx-auto justify-center items-center p-4 h-screen">
      <div className="w-full">
        <h1 className="!text-right mb-10 font-extrabold max-w-[60%] text-4xl">
          ورود به حساب
        </h1>
        <form>
          <p className="text-[18px] text-right">
            شماره موبایل خود را وارد کنید
          </p>
          <div className="input-container !h-min relative">
            <TextInput
              placeholder="مثلا 09121234567"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="button !mt-20 block"
            onClick={handleSubmitBtn}
          >
            تایید
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
