import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="c-left">
        <div className="c-l-top">
          <div className="cu">
            <i className="fa fa-phone btn-primary"></i> <b>Call To Us</b>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +91 96030 83867</p>
          </div>
        </div>
        <hr />
        <div className="c-l-top">
          <div className="c-l-top">
            <div className="cu">
              <i className="fa fa-envelope btn-primary"></i> <b>Write To Us</b>
              <p>Fill out our form and we will contact you with in 24 hours.</p>
              <p>Email: customer@support.com</p>
              <p>Email: myecom@help.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="c-right">
        <div className="c-r-top">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="phone" placeholder="Your Phone" />
        </div>
        <div className="c-r-mid">
          <input type="text" placeholder="Your Subject" />
        </div>
        <div className="c-r-bottom">
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="btn-primary">Send</button>
      </div>
    </div>
  );
};

export default Contact;
