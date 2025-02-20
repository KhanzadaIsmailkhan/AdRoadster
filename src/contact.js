import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Static OOH',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-form-section">
      <h3>Contact Us</h3>
      {submitted ? (
        <div className="success-message">
          🎉 Congratulations! Your form has been submitted successfully.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name <span className='red_star'>*</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="form-input"
            />
          </label>
          <label>
            Email <span className='red_star'>*</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your active email address"
              className="form-input"
            />
          </label>
          <label>
            Phone <span className='red_star'>*</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your contact number"
              className="form-input"
            />
          </label>
          <label>
            Services <span className='red_star'>*</span>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="Billboards/Hoardings">Billboards/Hoardings</option>
              <option value="Outdoor SMD’S">Outdoor SMD’S</option>
              <option value="Digital Streamers">Digital Streamers</option>
              <option value="3D Signs">3D Signs</option>
              <option value="Bus Shelters">Bus Shelters</option>
              <option value="Vehicle Branding">Vehicle Branding</option>
            </select>
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message or comments here"
              className="form-textarea"
            />
          </label>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactSection;
