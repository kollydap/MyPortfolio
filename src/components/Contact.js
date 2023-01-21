import React, { useState } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import EmailIcon from "@material-ui/icons/Email";

import "../styles/Contact.css";

function Contact() {
  const initialFormData = Object.freeze({
    name: "",
    email: "",
    message: "",
  });

  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://kolakolly.herokuapp.com/customer/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })
      // .then(setFormData(e.target.value = ""))

      .then(alert("we'll get back to you shortly"));
  };

  return (
    <div>
      <div className="contact">
        <strong style={{ fontSize: "24px" }}>Leave A Message</strong>
        <form>
          <input
            placeholder="Your Name"
            required
            onChange={handleChange}
            name="name"
          ></input>
          <input
            placeholder="Your Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
          ></input>
          <input
            className="msgbody"
            required
            onChange={handleChange}
            placeholder="Your Message"
            name="message"
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>

      <div className="touch tc">
        <strong style={{ fontSize: "24px", display: "block" }}>
          Get In Touch
        </strong>

        <div>
          <LocationOnIcon  />
          <strong style={{ fontSize: "14px", display: "block" }}>
            My Location
          </strong>
          <p className="contact-p">FUTA || Ayobo Lagos</p>
        </div>
        <div>
          <PhoneEnabledIcon />
          <strong style={{ fontSize: "14px", display: "block" }}>
            Phone Number
          </strong>
          <p className="contact-p">+2347083842098</p>
          <p className="contact-p">+2347063406436</p>
        </div>
        <div>
          <EmailIcon />
          <strong style={{ fontSize: "14px", display: "block" }}>
            Email Address
          </strong>
          <p className="contact-p">
            <a href="http://dapkolly@gmail.com">dapkolly@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
