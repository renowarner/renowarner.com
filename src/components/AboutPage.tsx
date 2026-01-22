import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image-placeholder">
              {/* Replace with your headshot image */}
              <div className="placeholder-box">Headshot Placeholder</div>
            </div>
            <div className="about-text">
              <p>
                I am a seasoned professional dedicated to enhancing business efficiency and client satisfaction through innovative technological solutions. My approach combines deep technical knowledge with a strong understanding of business processes, enabling me to deliver impactful and sustainable results. I thrive on solving complex problems and empowering businesses to achieve their full potential in a rapidly evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
