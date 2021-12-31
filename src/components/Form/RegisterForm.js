import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import {
  Form,
  Button,
  InputGroup,
  Toast,
  ToastContainer,
} from "react-bootstrap";

const RegisterForm = () => {
  /* Initialize states */
  // input fields
  const [valid, setValid] = useState({
    name: false,
    email: false,
    password: false,
    repassword: false,
  });
  const [userEm, setUsr] = useState("");
  /*<--------->*/
  const [showB, setShowB] = useState(false);
  /*<--------->*/
  const [passType, setPassType] = useState({
    pass: "password",
    repass: "password",
  });
  /*<--------->*/
  const [passText, setPassText] = useState("");
  /*<--------->*/
  const toggleShowToast = () => setShowB(!showB);
  /*<=========>*/
  /* Event Handlers */

  /*<---{Form}--->*/
  const submitHandler = (e) => {
    e.preventDefault();
    if (valid.name & valid.email & valid.password & valid.repassword) {
      setShowB(true);
    } else {
      return false;
    }
  };
  /*<---{Name}--->*/
  const nameInputHandler = () => {};
  /*<---{User Name}--->*/
  const userInputHandler = (e) => {
    const usrRgx = /^[\S]+$/gm;
    if (usrRgx.test(e.target.value)) {
      setValid({
        ...valid,
        name: true,
      });
    } else {
      setValid({
        ...valid,
        name: false,
      });
    }
  };
  /*<---{Email}--->*/
  const emailInputHandler = (e) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (emailRegex.test(e.target.value)) {
      setValid({
        ...valid,
        email: true,
      });
      setUsr(e.target.value.split("@")[0]);
      console.log(userEm);
    } else {
      setValid({
        ...valid,
        email: false,
      });
    }
  };
  /*<---{Password}--->*/
  const passInputHandler = (e) => {

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*\d)[a-zA-Z\d@#$%^&+=]{8,}$/;
    setPassText(e.target.value);
    console.log(passRegex.test(passText));
    if (passRegex.test(passText)) {
      setValid({
        ...valid,
        password: true,
      });
    } else {
      setValid({
        ...valid,
        password: false,
      });
    }
  };
  /*<---{Re-Entered Password}--->*/
  const rePassInputHandler = (e) => {
    console.log(passText);
    if (passText === e.target.value) {
      setValid({
        ...valid,
        repassword: true,
      });
    } else {
      setValid({
        ...valid,
        repassword: false,
      });
    }
  };

  const togglePass = (field) => {
    setPassType((prevState) => {
      if (field === "pass") {
        if (prevState.pass === "password") {
          return {
            ...passType,
            pass: "text",
          };
        } else {
          return {
            ...passType,
            pass: "password",
          };
        }
      } else {
        if (prevState.repass === "password") {
          return {
            ...passType,
            repass: "text",
          };
        } else {
          return {
            ...passType,
            repass: "password",
          };
        }
      }
    });
  };
  return (
    <>
      <Form className="p-3" onSubmit={submitHandler}>
        {/* some tries to build a component */}
        {/* <FormField
          name="Name"
          type="text"
          placeholder="Enter Your Name"
          noValidMessage="Please enter your name"
          required={true}
          fieldRegEx= {/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g}
        /> */}

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={nameInputHandler}
            placeholder="Enter your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            onChange={userInputHandler}
            placeholder="User name"
            required
          />
          <div className={`text-danger ${valid.name ? "d-none" : null}`}>
            User Name should not contain any spaces
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={emailInputHandler}
            placeholder="Enter email"
            required
          />
          <div className={`text-danger ${valid.email ? "d-none" : null}`}>
            Please write a valid email address
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={passType.pass}
              onChange={passInputHandler}
              placeholder="Password"
              required
            />
            <Button
              onClick={togglePass.bind(this, "pass")}
              variant={`${!passType.pass.match("text") ? "primary" : "danger"}`}
            >
              <i
                className={`bi bi-eye-fill text-${
                  passType.pass.match("text") ? "dark" : "light"
                }`}
              ></i>
            </Button>
          </InputGroup>
          <div className={`text-danger ${valid.password ? "d-none" : null}`}>
            Password must contain at least 8 chars
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Re-enter Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={passType.repass}
              onChange={rePassInputHandler}
              placeholder="Password"
              required
            />
            <Button
              onClick={togglePass.bind(this, "repass")}
              variant={`${
                !passType.repass.match("text") ? "primary" : "danger"
              }`}
            >
              <i
                className={`bi bi-eye-fill text-${
                  passType.repass.match("text") ? "dark" : "light"
                }`}
              ></i>
            </Button>
          </InputGroup>
          <div className={`text-danger ${valid.repassword ? "d-none" : null}`}>
            Password should be matched
          </div>
        </Form.Group>
        <Button variant="success"  type="submit">
          Register
        </Button>
      </Form>

      <ToastContainer position="bottom-end" className="p-5 m-5">
        <Toast onClose={toggleShowToast} show={showB} animation={true}>
          <Toast.Header>
            <strong className="me-auto">Welcome</strong>
            <small>{userEm}</small>
          </Toast.Header>
          <Toast.Body>Welcome to my site, Enjoy it!</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default RegisterForm;
