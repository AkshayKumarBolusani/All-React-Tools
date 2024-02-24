// AgeCalculatorPage.js
import React from 'react';
import AgeCalculator from '../components/AgeCalculator';

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
  image: {
    width: '200px', // Set the width as needed
    marginBottom: '20px', // Adjust margin as needed
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
};

function AgeCalculatorPage() {
  return (
    <div style={styles.container}>
      
      <h2 style={styles.title}>Welcome to the Age Calculator</h2>
      <AgeCalculator />
    </div>
  );
}

export default AgeCalculatorPage;
