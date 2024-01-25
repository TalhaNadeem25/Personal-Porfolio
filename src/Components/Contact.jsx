import React from "react";

function Contact() {
  return (
    <>
      <form action="https://getform.io/f/b1a80471-7805-44cd-a786-2f4e8a2aea9b" method="POST">
        <div className="Contact--Container" name='Contacts'> 
          <div className="Title">
            <span>Contact</span>
          </div>
          <div className="Contact--Info">
            <div className="Name--title">
              <input type="text" placeholder="Name" name="name" />
            </div>
            <div className="Email--title"> 
              <input type="email" placeholder="Email" name="email" />
            </div>
            <div className="Message--title">
              <textarea placeholder="Message" name="Message"></textarea>
            </div>
            <div className="submit--button">
                <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
