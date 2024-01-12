import React, { useState } from "react";
import Nav from "../layout/Nav/Nav";
import ContactForm from "../components/contactForm/ContactForm";
import errorImg from "../assets/svg/404.svg";
import { HashLink } from "react-router-hash-link";

function ErrorPage() {
  const [showForm, setShowForm] = useState(false);

  const showContactForm = () => {
    setShowForm(!showForm);
  };
  return (
    <React.Fragment>
      <section className="errorPage sectionPadding">
        <Nav getForm={showContactForm} />
        {showForm && <ContactForm />}
        <div className="errorCont">
          <h1>We lost this page</h1>
          <p>
            We searched high and low but couldn’t find what you’re looking for.
            Let’s find a better place for you to go.
          </p>
          <HashLink to="/">
            <button className="goHomeBtn">Hyflex Home</button>
          </HashLink>
          <img className="errorPic" src={errorImg} alt="ErrorPage Image" />
        </div>
      </section>
    </React.Fragment>
  );
}

export default ErrorPage;
