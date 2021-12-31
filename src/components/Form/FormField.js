import { Form } from "react-bootstrap";
import { useState } from "react";

const FormField = (props) => {
  const [valid, setValid] = useState(false);
  const fieldRegEx = props.fieldRegEx;

  const inputHandler = (event) => {
    if(fieldRegEx){
      console.log("there is an exp")
    } else{
      
      console.log("there is no an exp")
    }
    if (fieldRegEx.test(event.target.value) ){
      console.log("HI")
    }
  };
  return (
    <Form.Group className="mb-3">
      <Form.Label>{props.name}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        onChange={inputHandler}
      />
      <div
      //   className={`text-danger ${valid.email ? "d-none" : null}`}
      >
        {props.noValidMessage}
      </div>
    </Form.Group>
  );
};

export default FormField;
