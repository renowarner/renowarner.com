import './ContactPage.css';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <section id="contact" className="contact-section">
        <div className="container">
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <form 
            action="https://formspree.io/f/reno@renowarner.com" 
            method="POST" 
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="note">Note</label>
              <textarea id="note" name="note" required placeholder="Your Message" rows={5}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          <div className="consultation-link">
            <span>Or </span>
            <Link to="/schedule-consultation">Schedule a Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
