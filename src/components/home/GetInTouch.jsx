import React from "react";

const GetInTouch = ({ heading, message, email, phone, linkedIn }) => {
  return (
    <>
      <h2 id="contact" className="display-4 pb-3 text-center mt-5 contact-section">{heading}</h2>
      {/* <p className="lead text-center pb-3">
        {message}, <a href={`mailto:${email}`}>{email}</a>.
      </p> */}
      <div className="phone-email-section">
          <div>
              <i id="phone-icon" className="huge phone icon phone-section" ></i>
              <p id="phone-number" className="d-inline-block phone-section">{phone}</p>
          </div>
          <div className="email-section">
            <i id="envelope-icon" className="huge envelope outline icon email-section ml-5"></i>
            <a className = "email-section" id="email-link" href="mailto:valensh1@yahoo.com">{email}</a>
          </div>
      </div>
      <div className="linkedin-section">
            <a href={linkedIn} target="_blank"><i id="linkedin-icon" className="huge linkedin icon contact-social-media"></i></a>
            <a className = "linkedin-section contact-social-media" id="linkedin-link" href={linkedIn} target="_blank">{linkedIn}</a>
      </div>
    </>
  );
};

export default GetInTouch;
