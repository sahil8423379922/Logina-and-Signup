import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import style from "./css/Login.module.css";

export default function Register() {
  return (
    <div className={`container ${style.main}`}>
      <div className={style.form}>
        <span className={style.font}>Register</span>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
