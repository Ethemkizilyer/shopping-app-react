import React, { useContext, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { createUser } from "../Context/firebase-config";
import { ThemeContext } from "../Context/ThemeProvider";

const Register = () => {
  const { setNavi } = useContext(ThemeContext);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [displayName, setRegisterdisplayName] = useState("");
  // console.log(navi);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setNavi(displayName);
    navigate("/");
    createUser(registerEmail, registerPassword, displayName);
  };

  return (
    <div
      style={{
        paddingTop: "70px",
        paddingBottom: "300px",
      }}
      className="d-flex align-items-center justify-content-center h-75 "
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Userame</Form.Label>
          <Form.Control
            value={displayName}
            onChange={(e) => setRegisterdisplayName(e.target.value)}
            type="text"
            placeholder="Enter username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        <Button className="w-100" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
