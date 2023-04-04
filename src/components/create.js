import { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import PopupHeader from "./popupHeader";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const postData = () => {
    axios.post(`https://63ddb8f3df83d549cea50634.mockapi.io/fakeData`, {
      firstName,
      lastName,
      checkbox,
    });
  };
  const isPopup = () => {
    if (firstName && lastName) {
      setIsOpenPopup(!isOpenPopup);
    } else {
    }
  };
  return (
    <div>
      {/* <PopupHeader/> */}
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={() => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button
          onClick={() => {
            postData();
            isPopup();
          }}
          type="submit"
        >
          Submit
        </Button>

        {isOpenPopup && <PopupHeader/>}
        <Link to="/read">
          <Button>List</Button>
        </Link>
      </Form>
    </div>
  );
}
