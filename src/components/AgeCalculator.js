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

const getFormattedDate = (date) => {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
};

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [todayDate, setTodayDate] = useState(getFormattedDate(new Date()));
  const [age, setAge] = useState({
    years: null,
    months: null,
    days: null,
  });

  const calculateAge = () => {
    const birthDateObj = new Date(birthdate);
    const todayDateObj = new Date(todayDate);

    let years = todayDateObj.getFullYear() - birthDateObj.getFullYear();
    let months = todayDateObj.getMonth() - birthDateObj.getMonth();
    let days = todayDateObj.getDate() - birthDateObj.getDate();

    if (days < 0) {
      const lastMonth = new Date(todayDateObj.getFullYear(), todayDateObj.getMonth() - 1, 0);
      days += lastMonth.getDate();
      months -= 1;
    }

    if (months < 0) {
      months += 12;
      years -= 1;
    }

    setAge({
      years,
      months,
      days,
    });
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
          <h1 className="page-title">Age Calculator</h1>
          <p style={{ textAlign: 'center', fontSize: '0.9em', color: '#8f2c24', marginTop: '10px' }}>
            Calculate your exact age in years, months, and days
          </p>
        </div>

        <div className="scrollable-content">
          <div className="form-group">
            <label className="form-label" htmlFor="birthdate">
              Enter your birthdate:
            </label>
            <div style={{ position: 'relative' }}>
              <input
                className="form-input"
                type="date"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                style={{
                  color: '#8f2c24',
                  fontFamily: 'inherit',
                  cursor: 'pointer',
                  paddingRight: '30px'
                }}
              />
              <div style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                color: '#8f2c24'
              }}>
                📅
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="todayDate">
              Enter today's date:
            </label>
            <div style={{ position: 'relative' }}>
              <input
                className="form-input"
                type="date"
                id="todayDate"
                value={todayDate}
                onChange={(e) => setTodayDate(e.target.value)}
                style={{
                  color: '#8f2c24',
                  fontFamily: 'inherit',
                  cursor: 'pointer',
                  paddingRight: '30px'
                }}
              />
              <div style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                color: '#8f2c24'
              }}>
                📅
              </div>
            </div>
          </div>

          <button className="form-button" onClick={calculateAge}>
            Calculate Age
          </button>

          {age.years !== null && (
            <div className="result-text">
              <h3>Your age is:</h3>
              <p>Years: {age.years}</p>
              <p>Months: {age.months}</p>
              <p>Days: {age.days}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
