// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AgeCalculatorPage from './pages/AgeCalculatorPage';
import BMICalculatorPage from './pages/BMICalculatorPage';
import CurrencyCalculatorPage from './pages/CurrencyCalculatorPage';
import AgeCalculator from './components/AgeCalculator';
import PasswordGenerator from './components/PasswordGenerator';
import TimeZoneConverter from './components/TimeZoneConverter';
import ColorPaletteGenerator from './components/ColorPaletteGenerator';
import ColorPalettePage from './pages/ColorPalettePage';
import LanguageTranslator from './components/LanguageTranslator';
import LanguageTranslatorPage from './pages/LanguageTranslatorPage'; // Corrected import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/age-calculator" element={<AgeCalculatorPage />} />
        <Route path="/bmi-calculator" element={<BMICalculatorPage />} />
        <Route path="/currency-calculator" element={<CurrencyCalculatorPage />} />
        <Route path="/age-calculator" element={<AgeCalculator />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/timezoneconverter" element={<TimeZoneConverter />} />
        <Route path="/ColorPaletteGenerator" element={<ColorPaletteGenerator />} />
        <Route path="/ColorPaletteGenerator" element={<ColorPalettePage />} />


        {/* Add routes for other tools/pages if needed */}
      </Routes>
    </Router>
  );
}

export default App;
