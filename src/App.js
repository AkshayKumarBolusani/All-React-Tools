import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AgeCalculatorPage from './pages/AgeCalculatorPage';
import BMICalculatorPage from './pages/BMICalculatorPage';
import CurrencyCalculatorPage from './pages/CurrencyCalculatorPage';
import PasswordGeneratorPage from './pages/PasswordGeneratorPage';
import TimeZoneConverterPage from './pages/TimeZoneConverterPage';
import ColorPalettePage from './pages/ColorPalettePage';
import LanguageTranslatorPage from './pages/LanguageTranslatorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/age-calculator" element={<AgeCalculatorPage />} />
        <Route path="/bmi-calculator" element={<BMICalculatorPage />} />
        <Route path="/currency-calculator" element={<CurrencyCalculatorPage />} />
        <Route path="/password-generator" element={<PasswordGeneratorPage />} />
        <Route path="/timezone-converter" element={<TimeZoneConverterPage />} />
        <Route path="/color-palette" element={<ColorPalettePage />} />
        <Route path="/language-translator" element={<LanguageTranslatorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
