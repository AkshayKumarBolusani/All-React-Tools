import React, { useState, useEffect } from 'react';
import '../styles/CommonLayout.css';
import bg from '../assets/images/bg.jpg';
import girl from '../assets/images/girl.png';
import trees from '../assets/images/trees.png';
import leafImage from '../assets/images/leaf_01.png';
import leafImage2 from '../assets/images/leaf_02.png';
import leafImage3 from '../assets/images/leaf_03.png';
import leafImage4 from '../assets/images/leaf_04.png';
import BackButton from './BackButton';

const TimeZoneConverter = () => {
  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const [sourceTime, setSourceTime] = useState(getCurrentDateTime());
  const [sourceZone, setSourceZone] = useState('UTC');
  const [targetZone, setTargetZone] = useState('America/New_York');
  const [convertedTime, setConvertedTime] = useState('');

  const timeZones = [
    { id: 'UTC', name: 'UTC (Coordinated Universal Time)' },
    { id: 'Asia/Kolkata', name: 'IST (Indian Standard Time)' },
    { id: 'America/New_York', name: 'New York (EST/EDT)' },
    { id: 'America/Los_Angeles', name: 'Los Angeles (PST/PDT)' },
    { id: 'Europe/London', name: 'London (GMT/BST)' },
    { id: 'Europe/Paris', name: 'Paris (CET/CEST)' },
    { id: 'Asia/Tokyo', name: 'Tokyo (JST)' },
    { id: 'Asia/Shanghai', name: 'Shanghai (CST)' },
    { id: 'Asia/Dubai', name: 'Dubai (GST)' },
    { id: 'Australia/Sydney', name: 'Sydney (AEST/AEDT)' },
    { id: 'Pacific/Auckland', name: 'Auckland (NZST/NZDT)' }
  ];

  useEffect(() => {
    // Update time every minute
    const interval = setInterval(() => {
      setSourceTime(getCurrentDateTime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const convertTime = () => {
    if (!sourceTime) {
      alert('Please enter a time');
      return;
    }

    try {
      const sourceDate = new Date(sourceTime);
      const sourceOptions = { timeZone: sourceZone };
      const targetOptions = { timeZone: targetZone };

      // Format the time in both zones
      const sourceFormatted = sourceDate.toLocaleString('en-US', {
        ...sourceOptions,
        dateStyle: 'full',
        timeStyle: 'long'
      });

      const targetFormatted = sourceDate.toLocaleString('en-US', {
        ...targetOptions,
        dateStyle: 'full',
        timeStyle: 'long'
      });

      setConvertedTime(`${sourceFormatted}\n=\n${targetFormatted}`);
    } catch (error) {
      alert('Error converting time. Please check your input.');
      console.error('Time conversion error:', error);
    }
  };

  const swapZones = () => {
    setSourceZone(targetZone);
    setTargetZone(sourceZone);
    setConvertedTime('');
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
          <h1 className="page-title">Time Zone Converter</h1>
          <p style={{ textAlign: 'center', fontSize: '0.9em', color: '#8f2c24', marginTop: '10px' }}>
            Convert time between different time zones worldwide
          </p>
        </div>

        <div className="scrollable-content">
          <div className="form-group">
            <label className="form-label" htmlFor="sourceTime">
              Select Date and Time:
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="datetime-local"
                id="sourceTime"
                className="form-input"
                value={sourceTime}
                onChange={(e) => setSourceTime(e.target.value)}
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
                🕒
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '20px'
          }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label" htmlFor="sourceZone">
                From Time Zone:
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  id="sourceZone"
                  className="form-select"
                  value={sourceZone}
                  onChange={(e) => setSourceZone(e.target.value)}
                  style={{
                    color: '#8f2c24',
                    paddingRight: '30px',
                    cursor: 'pointer'
                  }}
                >
                  {timeZones.map(zone => (
                    <option key={zone.id} value={zone.id}>
                      {zone.name}
                    </option>
                  ))}
                </select>
                <div style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  color: '#8f2c24'
                }}>
                  🌍
                </div>
              </div>
            </div>

            <button
              className="form-button"
              onClick={swapZones}
              style={{
                width: 'auto',
                padding: '12px',
                marginTop: '25px'
              }}
            >
              ⇄
            </button>

            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label" htmlFor="targetZone">
                To Time Zone:
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  id="targetZone"
                  className="form-select"
                  value={targetZone}
                  onChange={(e) => setTargetZone(e.target.value)}
                  style={{
                    color: '#8f2c24',
                    paddingRight: '30px',
                    cursor: 'pointer'
                  }}
                >
                  {timeZones.map(zone => (
                    <option key={zone.id} value={zone.id}>
                      {zone.name}
                    </option>
                  ))}
                </select>
                <div style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  color: '#8f2c24'
                }}>
                  🌍
                </div>
              </div>
            </div>
          </div>

          <button className="form-button" onClick={convertTime}>
            Convert Time
          </button>

          {convertedTime && (
            <div className="result-text" style={{ whiteSpace: 'pre-line' }}>
              <h3>Converted Time:</h3>
              <p>{convertedTime}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeZoneConverter;
