import React from 'react';
import TimeZoneConverter from '../components/TimeZoneConverter';

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

function TimeZoneConverterPage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome to the Time Zone Converter</h2>
      <TimeZoneConverter />
    </div>
  );
}

export default TimeZoneConverterPage;
