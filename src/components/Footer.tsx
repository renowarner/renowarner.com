
import './Footer.css'; // Assuming a CSS file for styling

const Footer = () => {
  return (
    <footer className="site-footer">
      <section id="experience" className="experience-section">
        <div className="container">

          <div className="experience-item">
            <h4>Owner and Principal Consultant</h4>
            <h4>@Reno Warner Consulting</h4>
            <p>2022 - Current</p>
          </div>
          <div className="experience-item">
            <h4>Lead Tech, Automation Engineer, Systems Support</h4>
            <h4>@Bold Patent Law</h4>
            <p>2017 - Current</p>
          </div>
          <div className="experience-item">
            <h4>Automation Test Engineer</h4>
            <h4>@247Waiter</h4>
            <p>2016-2017</p>
          </div>
          <div className="experience-item">
            <h4>Quality Assurance Automation Engineer</h4>
            <h4>@Search For Yeti</h4>
            <p>2014 - 2016</p>
          </div>
        </div>
      </section>
      <p className="copyright">Copyright © 2026</p>
    </footer>
  );
};

export default Footer;
