import React from "react";
import Form from "../../components/Form";

const Register = () => {
  return <Form route="/api/auth/user/register/" method="register" />;
};

export default Register;
