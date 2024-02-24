// BMICalculatorPage.js
import React from 'react';
import BMICalculator from '../components/BMICalculator';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#141414', // Dark background color
    color: '#fff', // White text color
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
};

function BMICalculatorPage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome to the BMI Calculator</h2>
      <BMICalculator />
    </div>
  );
}

export default BMICalculatorPage;
