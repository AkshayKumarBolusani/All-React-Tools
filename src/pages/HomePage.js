// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

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
    fontSize: '48px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    padding: '10px',
    borderRadius: '8px',
    transition: 'background 0.3s ease-in-out',
    backgroundColor: '#e50914', // Netflix red color
    display: 'block',
    textAlign: 'center',
    width: '200px',
    margin: '0 auto',
  },
};

function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Handy Hub Application</h1>
      <table>
      <tr>
            <td>
            <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/age-calculator">
            
            Age Calculator
          </Link>
          
        </li>
        </ul>
        </td>
        <td><span></span></td>
        <td>
        <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/bmi-calculator">
            BMI Calculator
          </Link>
        </li>
        </ul>
            </td>
        </tr>

        <tr>
            <td>
            <ul style={styles.list}>
        <li style={styles.listItem}>
        <Link style={styles.link} to="/currency-calculator">            
            Currency Calculator
          </Link>
          
        </li>
        </ul>
        </td>
        <td><span></span></td>
        <td>
        <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/password-generator">
            Password Generator
          </Link>
        </li>
        </ul>
            </td>
        </tr>

        <tr>
            <td>
            <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/timezoneconverter">
            
            Time Zone Converter
          </Link>
          
        </li>
        </ul>
        </td>
        <td><span></span></td>
        <td>
        <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/LanguageTranslator">
            Language Translator
          </Link>
        </li>
        </ul>
            </td>
        </tr>

        <tr>
            <td>
            <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/ColorPaletteGenerator">
            
          Color Palette Generator
          </Link>
          
        </li>
        </ul>
        </td>
        <td><span></span></td>
        <td>
        <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/bmi-calculator">
            BMI Calculator
          </Link>
        </li>
        </ul>
            </td>
        </tr>
      </table>
      
      <ul style={styles.list}>
        <li style={styles.listItem}>
       
          <Link style={styles.link} to="/currency-calculator">
            
            Currency Calculator
          </Link>
        </li>
        {/* Add links for other tools/pages */}
      </ul>
    </div>
  );
}

export default HomePage;
