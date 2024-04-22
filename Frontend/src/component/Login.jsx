import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import style from "./css/Login.module.css";
import { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formsubmission = () => {
    fetch("http://localhost:4000/auth", {
      method: "post",
    });

    console.log("Email is =" + email);
    console.log("Password is = " + password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Page clicked");
    formsubmission();
  };

  return (
    <div className={`container ${style.main}`}>
      <div className={style.form}>
        <span className={style.font}>Login</span>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(value) => {
                console.log(value.target.value);
                setEmail(value.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(value) => {
                console.log(value.target.value);
                setPassword(value.target.value);
              }}
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
