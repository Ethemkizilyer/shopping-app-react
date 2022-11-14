import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../Context/firebase-config";
import { ThemeContext } from "../Context/ThemeProvider";

const Login = () => {
  const { setNavi } = useContext(ThemeContext);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("/");
      setNavi(auth?.currentUser?.displayName);
      alert(`Hoş geldiniz Sn. ${auth?.currentUser?.displayName}`);
    } catch (err) {
      alert(err.message);
    }
  };
  const signInWithGoo = () => {
    navigate("/");
    return signInWithGoogle();
  };
  return (
    <div className="d-flex align-items-center justify-content-center h-75 ">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Link to="/register">Register</Link>
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Submit
        </Button>
        <Button
          className="w-100 mt-3"
          variant="success"
          onClick={signInWithGoo}
        >
          SIGN IN WITH GOOGLE
        </Button>
      </Form>
    </div>
  );
};

export default Login;
