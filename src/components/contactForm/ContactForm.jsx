import React from "react";

function ContactForm() {

  // const submitHandler = (e)=>{
  //   e.preventDefault();
  //   alert("message send");
  // }
  return (
    <React.Fragment>
      <form className="messageForm">
        <label htmlFor="name">Name*</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">Email*</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="contact">Contact*</label>
        <input type="phone" name="phone" id="contact" required />
        <div className="checkCont">
          <p>What are you looking for*</p>
          <div className="checkBoxCont">
            <div className="checkBox">
              <input type="checkbox" className="check" name="spanish" />
              <p>Spanish</p>
            </div>
            <div className="checkBox">
              <input type="checkbox" className="check" name="spanish" />
              <p>French</p>
            </div>
            <div className="checkBox">
              <input type="checkbox" className="check" name="spanish" />
              <p>Japanese</p>
            </div>
            <div className="checkBox">
              <input type="checkbox" className="check" name="spanish" />
              <p>German</p>
            </div>
            <div className="checkBox">
              <input type="checkbox" className="check" name="spanish" />
              <p>English&nbsp;&&nbsp;IELTS</p>
            </div>
            <div className="checkBox">
              <input type="checkbox" className="check" name="spanish" />
              <p>Sanskrit</p>
            </div>
          </div>
        </div>
        <label htmlFor="message">Message*</label>
        <textarea name="message" id="message" required></textarea>
        <button type="submit" id="messageBtn" className="btn2">
          Send Message
        </button>
      </form>
    </React.Fragment>
  );
}

export default ContactForm;
