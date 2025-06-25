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

const CurrencyCalculator = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);

  const currencies = [
    { code: 'USD', name: 'US Dollar', rate: 1 },
    { code: 'INR', name: 'Indian Rupee', rate: 83.12 },
    { code: 'EUR', name: 'Euro', rate: 0.92 },
    { code: 'GBP', name: 'British Pound', rate: 0.79 },
    { code: 'JPY', name: 'Japanese Yen', rate: 149.50 },
    { code: 'AUD', name: 'Australian Dollar', rate: 1.52 },
    { code: 'CAD', name: 'Canadian Dollar', rate: 1.35 },
    { code: 'CHF', name: 'Swiss Franc', rate: 0.87 },
    { code: 'CNY', name: 'Chinese Yuan', rate: 7.19 },
    { code: 'SGD', name: 'Singapore Dollar', rate: 1.34 }
  ];

  // Mock exchange rates (for demonstration)
  const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.73, JPY: 110.0, AUD: 1.35, CAD: 1.25, CHF: 0.92, CNY: 6.45, INR: 74.5, NZD: 1.42 },
    EUR: { USD: 1.18, GBP: 0.86, JPY: 129.5, AUD: 1.59, CAD: 1.47, CHF: 1.08, CNY: 7.59, INR: 87.7, NZD: 1.67 },
    GBP: { USD: 1.37, EUR: 1.16, JPY: 150.5, AUD: 1.85, CAD: 1.71, CHF: 1.26, CNY: 8.83, INR: 102.0, NZD: 1.94 },
    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0066, AUD: 0.012, CAD: 0.011, CHF: 0.0084, CNY: 0.059, INR: 0.68, NZD: 0.013 },
    AUD: { USD: 0.74, EUR: 0.63, GBP: 0.54, JPY: 81.5, CAD: 0.93, CHF: 0.68, CNY: 4.78, INR: 55.2, NZD: 1.05 },
    CAD: { USD: 0.80, EUR: 0.68, GBP: 0.58, JPY: 88.0, AUD: 1.08, CHF: 0.74, CNY: 5.16, INR: 59.6, NZD: 1.14 },
    CHF: { USD: 1.09, EUR: 0.93, GBP: 0.79, JPY: 119.6, AUD: 1.47, CAD: 1.36, CNY: 7.01, INR: 81.0, NZD: 1.54 },
    CNY: { USD: 0.15, EUR: 0.13, GBP: 0.11, JPY: 17.1, AUD: 0.21, CAD: 0.19, CHF: 0.14, INR: 11.6, NZD: 0.22 },
    INR: { USD: 0.013, EUR: 0.011, GBP: 0.0098, JPY: 1.48, AUD: 0.018, CAD: 0.017, CHF: 0.012, CNY: 0.086, NZD: 0.019 },
    NZD: { USD: 0.70, EUR: 0.60, GBP: 0.52, JPY: 77.5, AUD: 0.95, CAD: 0.88, CHF: 0.65, CNY: 4.54, INR: 52.5 }
  };

  const convertCurrency = () => {
    if (!amount) {
      alert('Please enter an amount');
      return;
    }

    const fromRate = currencies.find(c => c.code === fromCurrency).rate;
    const toRate = currencies.find(c => c.code === toCurrency).rate;
    
    // Convert to USD first (base currency), then to target currency
    const amountInUSD = amount / fromRate;
    const convertedAmount = amountInUSD * toRate;
    
    setResult(convertedAmount.toFixed(2));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult(null);
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
          <h1 className="page-title">Currency Calculator</h1>
          <p style={{ textAlign: 'center', fontSize: '0.9em', color: '#8f2c24', marginTop: '10px' }}>
            Convert between different currencies using latest exchange rates
          </p>
        </div>

        <div className="scrollable-content">
          <div className="form-group">
            <label className="form-label" htmlFor="amount">
              Amount:
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="number"
                id="amount"
                className="form-input"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount in numbers..."
                style={{
                  color: '#8f2c24',
                  paddingRight: '30px',
                  '::placeholder': { color: 'rgba(143, 44, 36, 0.6)' }
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
                💰
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
              <label className="form-label" htmlFor="fromCurrency">
                From Currency:
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  id="fromCurrency"
                  className="form-select"
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  style={{
                    color: '#8f2c24',
                    paddingRight: '30px',
                    cursor: 'pointer'
                  }}
                >
                  {currencies.map(currency => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code} - {currency.name}
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
                  💱
                </div>
              </div>
            </div>

            <button
              className="form-button"
              onClick={swapCurrencies}
              style={{
                width: 'auto',
                padding: '12px',
                marginTop: '25px'
              }}
            >
              ⇄
            </button>

            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label" htmlFor="toCurrency">
                To Currency:
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  id="toCurrency"
                  className="form-select"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  style={{
                    color: '#8f2c24',
                    paddingRight: '30px',
                    cursor: 'pointer'
                  }}
                >
                  {currencies.map(currency => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code} - {currency.name}
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
                  💱
                </div>
              </div>
            </div>
          </div>

          <button className="form-button" onClick={convertCurrency}>
            Convert
          </button>

          {result && (
            <div className="result-text">
              <h3>Converted Amount:</h3>
              <p>{amount} {fromCurrency} = {result} {toCurrency}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyCalculator;
