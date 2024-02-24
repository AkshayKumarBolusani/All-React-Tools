import React, { useState, useEffect } from 'react';

const CurrencyCalculator = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();

        if (data && data.rates && data.rates[toCurrency]) {
          setExchangeRate(data.rates[toCurrency]);
        }
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const convertCurrency = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    if (!exchangeRate) {
      alert('Exchange rate not available.');
      return;
    }

    const result = amount * exchangeRate;
    setConvertedAmount(result.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Currency Calculator</h2>
      <label style={styles.label} htmlFor="amount">
        Enter amount:
      </label>
      <input
        style={styles.input}
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label style={styles.label} htmlFor="fromCurrency">
        From Currency:
      </label>
      <select
        style={styles.select}
        id="fromCurrency"
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        <option value="AUD">AUD</option>
        <option value="CAD">CAD</option>
        <option value="CHF">CHF</option>
        <option value="CNY">CNY</option>
        <option value="SEK">SEK</option>
        {/* Add other currency options as needed */}
      </select>

      <label style={styles.label} htmlFor="toCurrency">
        To Currency:
      </label>
      <select
        style={styles.select}
        id="toCurrency"
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        <option value="AUD">AUD</option>
        <option value="CAD">CAD</option>
        <option value="CHF">CHF</option>
        <option value="CNY">CNY</option>
        <option value="SEK">SEK</option>
        {/* Add other currency options as needed */}
      </select>

      <button style={styles.button} onClick={convertCurrency} disabled={loading}>
        {loading ? 'Converting...' : 'Convert'}
      </button>

      {convertedAmount !== null && (
        <div style={styles.resultContainer}>
          <h3 style={styles.resultTitle}>Converted Amount:</h3>
          <p>{convertedAmount} {toCurrency}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1080px',
    Height: '1920px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
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
  },
  resultContainer: {
    marginTop: '20px',
  },
  resultTitle: {
    fontSize: '18px',
    marginBottom: '10px',
  },
};

export default CurrencyCalculator;
