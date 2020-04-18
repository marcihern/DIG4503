import React from "react";
import Social from "../Social/index.js";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h2>Contact</h2>
        <br />Interested in working together?
        <br />Reach out to me on any of the social media below!
        <Social />
      </div>
    );
  }
}

export default Contact;
