// AgeCalculator.js
import React, { useState } from 'react';

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
    <div style={styles.container}>
      <h2 style={styles.title}>Age Calculator</h2>
      <label style={styles.label} htmlFor="birthdate">
        Enter your birthdate:
      </label>
      <input
        style={styles.input}
        type="date"
        id="birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <label style={styles.label} htmlFor="todayDate">
        Enter today's date:
      </label>
      <input
        style={styles.input}
        type="date"
        id="todayDate"
        value={todayDate}
        onChange={(e) => setTodayDate(e.target.value)}
      />
      <button style={styles.button} onClick={calculateAge}>
        Calculate Age
      </button>

      {age.years !== null && (
        <div style={styles.resultContainer}>
          <h3 style={styles.resultTitle}>Your age is:</h3>
          <p>Years: {age.years}</p>
          <p>Months: {age.months}</p>
          <p>Days: {age.days}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
    container: {
      maxWidth: '400px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '24px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '15px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
    },
    button: {
      backgroundColor: '#e50914',
      textAlign: 'center',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease-in-out', // Smooth transition effect
    },
    'button:hover': {
      backgroundColor: '#ff4500', // Change the color on hover
    },
    resultContainer: {
      marginTop: '20px',
    },
    resultTitle: {
      fontSize: '18px',
      marginBottom: '10px',
    },
  };
  

export default AgeCalculator;
