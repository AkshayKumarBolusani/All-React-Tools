import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import bg from '../assets/images/bg.jpg';
import girl from '../assets/images/girl.png';
import trees from '../assets/images/trees.png';
import leafImage from '../assets/images/leaf_01.png';
import leafImage2 from '../assets/images/leaf_02.png';
import leafImage3 from '../assets/images/leaf_03.png';
import leafImage4 from '../assets/images/leaf_04.png';

const toolsData = [
  { title: 'Age Calculator', description: 'Calculate your age based on the date of birth.', route: '/age-calculator' },
  { title: 'BMI Calculator', description: 'Find out if your weight is healthy.', route: '/bmi-calculator' },
  { title: 'Currency Calculator', description: 'Convert currency values between different currencies.', route: '/currency-calculator' },
  { title: 'Password Generator', description: 'Create strong and secure passwords.', route: '/password-generator' },
  { title: 'Time Zone Converter', description: 'Find the time difference between international time zones.', route: '/timezone-converter' },
  { title: 'Language Translator', description: 'Translate text between multiple languages.', route: '/language-translator' },
  { title: 'Color Palette Generator', description: 'Generate beautiful color palettes.', route: '/color-palette' },
];

function HomePage() {
  return (
    <section>
      <img src={bg} className="bg" alt="Background" />
      <img src={trees} className="trees" alt="Trees" />
      <img src={girl} className="girl" alt="Girl" />

      <div className="leaves">
        <div className="set">
          <div><img src={leafImage} alt="leaf" /></div>
          <div><img src={leafImage2} alt="leaf" /></div>
          <div><img src={leafImage3} alt="leaf" /></div>
          <div><img src={leafImage4} alt="leaf" /></div>
          <div><img src={leafImage} alt="leaf" /></div>
          <div><img src={leafImage2} alt="leaf" /></div>
          <div><img src={leafImage3} alt="leaf" /></div>
          <div><img src={leafImage4} alt="leaf" /></div>
        </div>
      </div>

      <div className="home-container">
        <div className="header-section">
          <h1 className="home-title">Welcome to Handy Hub Application</h1>
        </div>
        
        <div className="scrollable-section">
          <div className="cards-grid">
            {toolsData.map((tool, index) => (
              <div key={index} className="tool-card">
                <h2>{tool.title}</h2>
                <p>{tool.description}</p>
                <Link className="link-button" to={tool.route}>
                  Go to Tool
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
