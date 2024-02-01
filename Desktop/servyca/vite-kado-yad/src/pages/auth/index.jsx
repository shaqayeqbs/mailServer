import React from "react";
import AuthForm from "../../components/auth/auth-form";

// const AuthForm = dynamic(() => import("../../components/auth/auth-form"), {
//   ssr: false,
// });

function Index() {
  return (
    <>
      <AuthForm />
    </>
  );
}

export default Index;
