import './AboutPage.css';
import headshot from '../assets/ai_headshot_bw_final.png';

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image-container">
              <img src={headshot} alt="Reno Warner" className="headshot-img" />
            </div>
            <div className="about-text">
              <p>
                I am a seasoned professional with a deep background in business administration and operational management. I specialize in enhancing efficiency and driving growth by bridging the gap between core business processes and innovative technological solutions. My approach combines strategic administrative oversight with hands-on technical expertise.
              </p>
              <p>
                I have a proven track record of optimizing small business operations through advanced AI integration, custom scripting, and automated workflows. I am highly proficient in a diverse toolkit including Zapier, Make.com, and InfusionSoft (Keap), along with CRMs like Pipedrive and HubSpot. My technical foundation spans development in Python and JavaScript, cloud management on AWS, and lead capture optimization. I am dedicated to solving complex problems and empowering businesses to thrive in an increasingly automated landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
