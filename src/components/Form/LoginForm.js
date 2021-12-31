import {
  Form,
  Button,
  InputGroup,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

//#region
/**
 *
 * @param {String} regExp - Regular expression to validate the input
 * @param {state} fieldState - The current state to be updated
 * @param {Value} fieldValue - The value of the target field
 * @param {stateUpdateCallback} setState - The function of Updating the state
 * @param {"states"} states
 */
const isValidInput = (regExp, fieldState, fieldValue, setState, states) => {
  if (regExp.test(fieldValue)) {
    setState({
      ...states,
      fieldState: true,
    });
  } else {
    setState({
      ...states,
      fieldState: false,
    });
  }
};
//#endregion

const LoginForm = () => {

  /* Initialize states */
  const [valid, setValid] = useState({
    email: false,
    password: false,
  });
  const [userEm , setUsr] = useState('')
  /*<--------->*/
  const [showB, setShowB] = useState(false);
  const toggleShowToast = () => setShowB(!showB);
  /*<=========>*/
  /* Event Handlers */
  /*<---{Form}--->*/
  const submitHandler = (e) => {
    
    e.preventDefault();
    if (valid.email & valid.password) {
      setShowB(true);
    } else {
      return false;
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
      setUsr((e.target.value.split('@'))[0])

    } else {
      setValid({
        ...valid,
        email: false,
      });
    }
  };
  /*<---{Password}--->*/
  const passInputHandler = (e) => {
    const passRegex = /^[a-zA-Z\d]{8,}$/;

    if (passRegex.test(e.target.value)) {

      setValid({
        ...valid,
        password: true
      });
    } else {
      setValid({
        ...valid,
        password: false
      });
    }
  };

  const [passType, setPassType] = useState("password");
  const togglePass = () => {
    setPassType((prevState) => {
      if (prevState === "password") {
        return "text";
      } else {
        return "password";
      }
    });
  };
  return (
    <>
      <Form className="p-3" onSubmit={submitHandler}>
        <Form.Group className="mb-3" >
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
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={passType}
              onChange={passInputHandler}
              placeholder="Password"
              required
            />
            <Button
              onClick={togglePass}
              variant={`${!passType.match("text") ? "primary" : "danger"}`}
            >
              <i
                className={`bi bi-eye-fill text-${
                  passType.match("text") ? "dark" : "light"
                }`}
              ></i>
            </Button>
          </InputGroup>
          <div className={`text-danger ${valid.password? "d-none" : null}`}>
            Password must contain at least 8 chars
          </div>
        </Form.Group>
        <Button variant="primary" className="w-100" type="submit">
          Login
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

export default LoginForm;
