import React, { useState } from 'react';

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
    fontSize: '24px',
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '50%',
    padding: '8px',
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

const TimeZoneConverter = () => {
  const [inputTime, setInputTime] = useState('');
  const [selectedTimeZone, setSelectedTimeZone] = useState('UTC');
  const [convertedTime, setConvertedTime] = useState(null);

  const convertTime = () => {
    if (!inputTime) {
      alert('Please enter a valid time.');
      return;
    }

    try {
      const inputDate = new Date(inputTime);
      const convertedDate = new Date(inputDate.toLocaleString('en-US', { timeZone: selectedTimeZone }));
      setConvertedTime(convertedDate.toLocaleString());
    } catch (error) {
      console.error('Error converting time:', error);
      alert('Error converting time. Please check your input.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Time Zone Converter</h2>

      <label style={styles.label} htmlFor="inputTime">
        Enter time:
      </label>
      <input
        style={styles.input}
        type="datetime-local"
        id="inputTime"
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
      />

      <label style={styles.label} htmlFor="timeZone">
        Select time zone:
      </label>
      <select
        style={styles.input}
        id="timeZone"
        value={selectedTimeZone}
        onChange={(e) => setSelectedTimeZone(e.target.value)}
      >
        {/* Add other time zone options as needed */}
<option value="Asia/India">Asia/India</option>
<option value="Europe/London">Europe/London</option>
<option value="Asia/Tokyo">Asia/Tokyo</option>
<option value="Australia/Sydney">Australia/Sydney</option>
<option value="America/Los_Angeles">America/Los_Angeles</option>
<option value="Asia/Dubai">Asia/Dubai</option>
<option value="Europe/Paris">Europe/Paris</option>
<option value="America/Chicago">America/Chicago</option>
<option value="Asia/Shanghai">Asia/Shanghai</option>
<option value="Africa/Cairo">Africa/Cairo</option>
<option value="Pacific/Honolulu">Pacific/Honolulu</option>
{/* ... */}

      </select>

      <button style={styles.button} onClick={convertTime}>
        Convert Time
      </button>

      {convertedTime !== null && (
        <div style={styles.resultContainer}>
          <h3 style={styles.resultTitle}>Converted Time:</h3>
          <p>{convertedTime}</p>
        </div>
      )}
    </div>
  );
};

export default TimeZoneConverter;
