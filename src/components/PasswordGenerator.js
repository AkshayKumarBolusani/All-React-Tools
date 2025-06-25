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

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let charset = '';
    let newPassword = '';

    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (charset === '') {
      alert('Please select at least one character type');
      return;
    }

    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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
          <h1 className="page-title">Password Generator</h1>
          <p style={{ textAlign: 'center', fontSize: '0.9em', color: '#8f2c24', marginTop: '10px' }}>
            Create strong and secure passwords instantly
          </p>
        </div>

        <div className="scrollable-content">
          <div className="form-group">
            <label className="form-label" htmlFor="length">
              Password Length: {length}
            </label>
            <input
              type="range"
              id="length"
              min="8"
              max="32"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                outline: 'none',
                opacity: '0.7',
                transition: 'opacity .2s',
                accentColor: '#8f2c24'
              }}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Include Characters:</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8f2c24' }}>
                <input
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                  style={{ accentColor: '#8f2c24' }}
                />
                Uppercase (A-Z)
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8f2c24' }}>
                <input
                  type="checkbox"
                  checked={includeLowercase}
                  onChange={(e) => setIncludeLowercase(e.target.checked)}
                  style={{ accentColor: '#8f2c24' }}
                />
                Lowercase (a-z)
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8f2c24' }}>
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                  style={{ accentColor: '#8f2c24' }}
                />
                Numbers (0-9)
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8f2c24' }}>
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                  style={{ accentColor: '#8f2c24' }}
                />
                Symbols (!@#$%^&*)
              </label>
            </div>
          </div>

          <button className="form-button" onClick={generatePassword}>
            Generate Password
          </button>

          {password && (
            <div className="form-group" style={{ marginTop: '20px' }}>
              <label className="form-label">Generated Password:</label>
              <div style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
              }}>
                <input
                  type="text"
                  value={password}
                  readOnly
                  className="form-input"
                  style={{
                    color: '#8f2c24',
                    fontFamily: 'monospace',
                    fontSize: '1.2em'
                  }}
                />
                <button
                  className="form-button"
                  onClick={copyToClipboard}
                  style={{
                    width: 'auto',
                    padding: '12px 20px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
