// BMICalculator.js
import React, { useState } from 'react';

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  input: {
    width: '20%',
    padding: '8px',
    marginLeft: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#e50914',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  resultContainer: {
    marginTop: '20px',
  },
  resultTitle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
};

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>BMI Calculator</h2>
      <label htmlFor="height">Enter your height (in cm):</label>
      <input
        style={styles.input}
        type="number"
        id="height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      /><br></br>
      <label htmlFor="weight">Enter your weight (in kg):</label>
      <input
        style={styles.input}
        type="number"
        id="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      /><br></br>
      <button style={styles.button} onClick={calculateBMI}>
        Calculate BMI
      </button>

      {bmi !== null && (
        <div style={styles.resultContainer}>
          <h3 style={styles.resultTitle}>Your BMI is:</h3>
          <p>{bmi}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
