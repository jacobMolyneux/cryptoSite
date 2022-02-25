import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const LogInPage = () => {
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");
  return (
    <Form style={{ width: "30rem" }} className="border p-3">
      <div className="d-flex justify-content-center ">
        <h1>Log In</h1>
      </div>

      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username"></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
        ></Form.Control>
      </Form.Group>
      <Button varient="Primary" className="m-3">
        Log In
      </Button>
    </Form>
  );
};
export { LogInPage };
