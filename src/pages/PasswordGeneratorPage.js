import React from 'react';
import PasswordGenerator from '../components/PasswordGenerator';

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

function PasswordGeneratorPage() {
  return (
    <div style={styles.container}>
      {/* Replace the image source with the correct path */}
      <img src="C:\Users\shiva\Downloads\Untitled design (8).png" alt="Password Generator Image" />
      <h2 style={styles.title}>Welcome to the Password Generator</h2>
      <PasswordGenerator />
    </div>
  );
}

export default PasswordGeneratorPage;
