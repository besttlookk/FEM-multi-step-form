import { useState } from "react";
import { useContext } from "react";
import Button from "../components/Button";
import Information from "../components/Information";
import Input from "../components/Input";
import { AppContext } from "../contexts/appContext";

const InfoStep = () => {
  const { appState, setAppState } = useContext(AppContext);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log({ formData });
    //! check for error
    const isValid = checkForErrors();
    console.log(isValid);

    if (!isValid) return;

    setAppState({
      ...appState,
      stepNo: "2",
    });
  };

  const checkForErrors = () => {
    let isValid = true;
    const { name, email, phone } = formData;
    let errors = { name: "", email: "", phone: "" };
    if (!name || !email || !phone) {
      const empty = "This field is required";
      if (!name) errors = { ...errors, name: empty };
      if (!email) errors = { ...errors, email: empty };
      if (!phone) errors = { ...errors, phone: empty };
    }

    const validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const validPhoneRegex = /^[1-9]\d{9}$/;

    if (email && !email.match(validEmailRegex))
      errors = { ...errors, email: "Not a valid email address" };

    if (phone && !phone.match(validPhoneRegex))
      errors = { ...errors, phone: "Not a valid phone number" };

    setErrors(errors);
    if (errors.email || errors.name || errors.phone) isValid = false;
    return isValid;
  };
  return (
    <div className="infoStep">
      <Information
        heading="Personal info"
        subheading="Please provide your email address and phone number"
      />

      <form>
        <div className="infoStep__inputs">
          <Input
            label="Name"
            type="text"
            placeholder="Stephen King"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Input
            label="Email address"
            type="email"
            placeholder="stephenking@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            label="Phone Number"
            type="number"
            placeholder="+91 1234567890"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
        </div>

        <div className="infoStep__button">
          <Button
            className="btn btn__next"
            text="Next Step"
            handleClick={handleClick}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default InfoStep;
