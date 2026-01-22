import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="logo">
            <Link to="/">RENO WARNER</Link>
          </h1>
          <nav className="main-nav">
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills-tooling">Skills & Tooling</Link></li>
              <li><Link to="/managed-ai-chatbots">Managed AI Chatbots</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li>
                <Link to="/schedule-consultation">Schedule Consultation</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
