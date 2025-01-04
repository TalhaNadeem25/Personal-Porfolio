import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="contact-container" name="Contacts">
      <div className="contact-content">
        <div className="contact-header">
          <h2 className="contact-title">
            Contact
            <div className="title-underline"></div>
          </h2>
        </div>

        <form 
          className="contact-form"
          action="https://getform.io/f/b1a80471-7805-44cd-a786-2f4e8a2aea9b" 
          method="POST"
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              placeholder="Name"
              className={`form-input ${focusedField === 'name' ? 'focused' : ''}`}
              required
            />
            <div className="input-highlight"></div>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              placeholder="Email"
              className={`form-input ${focusedField === 'email' ? 'focused' : ''}`}
              required
            />
            <div className="input-highlight"></div>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formState.message}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              placeholder="Message"
              className={`form-textarea ${focusedField === 'message' ? 'focused' : ''}`}
              required
            ></textarea>
            <div className="input-highlight"></div>
          </div>

          <button type="submit" className="submit-button">
            <span>Send Message</span>
            <div className="button-glow"></div>
          </button>
        </form>
      </div>
      
      <div className="background-glow left"></div>
      <div className="background-glow right"></div>
    </div>
  );
};

export default Contact;
