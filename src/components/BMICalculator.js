// BMICalculator.js
import React, { useState } from 'react';
import '../styles/CommonLayout.css';
import bg from '../assets/images/bg.jpg';
import girl from '../assets/images/girl.png';
import trees from '../assets/images/trees.png';
import leafImage from '../assets/images/leaf_01.png';
import leafImage2 from '../assets/images/leaf_02.png';
import leafImage3 from '../assets/images/leaf_03.png';
import leafImage4 from '../assets/images/leaf_04.png';
import BackButton from './BackButton';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) {
      alert('Please enter both weight and height');
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBMI(bmiValue);

    // Determine BMI category
    if (bmiValue < 18.5) setCategory('Underweight');
    else if (bmiValue < 25) setCategory('Normal weight');
    else if (bmiValue < 30) setCategory('Overweight');
    else setCategory('Obese');
  };

  return (
    <div className="page-container">
      <BackButton />
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

      <div className="content-container">
        <div className="header-section">
          <h1 className="page-title">BMI Calculator</h1>
          <p style={{ textAlign: 'center', fontSize: '0.9em', color: '#8f2c24', marginTop: '10px' }}>
            Calculate your Body Mass Index (BMI)
          </p>
        </div>

        <div className="scrollable-content">
          <div className="form-group">
            <label className="form-label" htmlFor="weight">
              Weight (kg):
            </label>
            <input
              className="form-input"
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight in kilograms"
              style={{ color: '#8f2c24' }}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="height">
              Height (cm):
            </label>
            <input
              className="form-input"
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height in centimeters"
              style={{ color: '#8f2c24' }}
            />
          </div>

          <button className="form-button" onClick={calculateBMI}>
            Calculate BMI
          </button>

          {bmi && (
            <div className="result-text">
              <h3>Your BMI Results:</h3>
              <p>BMI: {bmi}</p>
              <p>Category: {category}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
