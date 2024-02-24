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
    fontSize: '32px',
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '20%',
    padding: '8px',
    fontSize: '20px',
    marginLeft: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  checkboxLabel: {
    display: 'block',
    marginBottom: '10px',
  },
  checkbox: {
    marginRight: '5px',
    fontSize: '32px',
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
  'button-hover': {
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

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+=<>?/{}';

    let validChars = lowercaseChars;
    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      newPassword += validChars[randomIndex];
    }

    setGeneratedPassword(newPassword);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Password Generator</h2>

      <label style={styles.label} htmlFor="passwordLength">
        Password Length:
      </label>
      <input
        style={styles.input}
        type="number"
        id="passwordLength"
        value={passwordLength}
        onChange={(e) => setPasswordLength(e.target.value)}
      />

      <label style={styles.checkboxLabel}>
        <input
          style={styles.checkbox}
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
        Include Uppercase
      </label>

      <label style={styles.checkboxLabel}>
        <input
          style={styles.checkbox}
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
        Include Numbers
      </label>

      <label style={styles.checkboxLabel}>
        <input
          style={styles.checkbox}
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
        Include Symbols
      </label>

      <button style={styles.button} onClick={generatePassword}>
        Generate Password
      </button>

      {generatedPassword && (
        <div style={styles.resultContainer}>
          <h3 style={styles.resultTitle}>Generated Password:</h3>
          <p>{generatedPassword}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
