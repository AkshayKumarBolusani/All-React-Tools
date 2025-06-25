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

// Translation dictionary for common phrases
const translations = {
  en: {
    hello: 'Hello',
    goodbye: 'Goodbye',
    thankyou: 'Thank you',
    please: 'Please',
    howareyou: 'How are you?',
    iloveyou: 'I love you',
    goodmorning: 'Good morning',
    goodnight: 'Good night',
    yes: 'Yes',
    no: 'No',
  },
  es: {
    hello: 'Hola',
    goodbye: 'Adiós',
    thankyou: 'Gracias',
    please: 'Por favor',
    howareyou: '¿Cómo estás?',
    iloveyou: 'Te amo',
    goodmorning: 'Buenos días',
    goodnight: 'Buenas noches',
    yes: 'Sí',
    no: 'No',
  },
  fr: {
    hello: 'Bonjour',
    goodbye: 'Au revoir',
    thankyou: 'Merci',
    please: 'S\'il vous plaît',
    howareyou: 'Comment allez-vous?',
    iloveyou: 'Je t\'aime',
    goodmorning: 'Bonjour',
    goodnight: 'Bonne nuit',
    yes: 'Oui',
    no: 'Non',
  },
  de: {
    hello: 'Hallo',
    goodbye: 'Auf Wiedersehen',
    thankyou: 'Danke',
    please: 'Bitte',
    howareyou: 'Wie geht es dir?',
    iloveyou: 'Ich liebe dich',
    goodmorning: 'Guten Morgen',
    goodnight: 'Gute Nacht',
    yes: 'Ja',
    no: 'Nein',
  },
  it: {
    hello: 'Ciao',
    goodbye: 'Arrivederci',
    thankyou: 'Grazie',
    please: 'Per favore',
    howareyou: 'Come stai?',
    iloveyou: 'Ti amo',
    goodmorning: 'Buongiorno',
    goodnight: 'Buonanotte',
    yes: 'Sì',
    no: 'No',
  }
};

const LanguageTranslator = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [fromLang, setFromLang] = useState('en');
  const [toLang, setToLang] = useState('es');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' }
  ];

  const translateText = () => {
    if (!inputText) {
      alert('Please enter text to translate');
      return;
    }

    // Convert input text to lowercase and remove punctuation for matching
    const processedInput = inputText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    
    // Find matching phrases in the dictionary
    let translated = inputText;
    Object.keys(translations[fromLang]).forEach(key => {
      const phrase = translations[fromLang][key].toLowerCase();
      if (processedInput.includes(phrase.toLowerCase())) {
        const targetPhrase = translations[toLang][key];
        translated = translated.replace(new RegExp(phrase, 'gi'), targetPhrase);
      }
    });

    if (translated === inputText) {
      setOutputText('Translation not available for this text. Only basic phrases are supported.');
    } else {
      setOutputText(translated);
    }
  };

  const swapLanguages = () => {
    const tempLang = fromLang;
    setFromLang(toLang);
    setToLang(tempLang);
    setInputText(outputText);
    setOutputText(inputText);
  };

  const getAvailablePhrases = () => {
    return Object.values(translations[fromLang]).join(', ');
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
          <h1 className="page-title">Language Translator</h1>
          <p style={{ textAlign: 'center', fontSize: '0.9em', color: '#8f2c24', marginTop: '10px' }}>
            Supports basic phrases and greetings
          </p>
        </div>

        <div className="scrollable-content">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '20px'
          }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label" htmlFor="fromLang">
                From:
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  className="form-select"
                  id="fromLang"
                  value={fromLang}
                  onChange={(e) => setFromLang(e.target.value)}
                  style={{
                    color: '#8f2c24',
                    paddingRight: '30px',
                    cursor: 'pointer'
                  }}
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
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
                  🌐
                </div>
              </div>
            </div>

            <button
              className="form-button"
              onClick={swapLanguages}
              style={{
                width: 'auto',
                padding: '12px',
                marginTop: '25px'
              }}
            >
              ⇄
            </button>

            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label" htmlFor="toLang">
                To:
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  className="form-select"
                  id="toLang"
                  value={toLang}
                  onChange={(e) => setToLang(e.target.value)}
                  style={{
                    color: '#8f2c24',
                    paddingRight: '30px',
                    cursor: 'pointer'
                  }}
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
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
                  🌐
                </div>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="inputText">
              Enter text to translate:
            </label>
            <textarea
              className="form-input"
              id="inputText"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type or paste your text here..."
              style={{
                minHeight: '100px',
                resize: 'vertical',
                color: '#8f2c24',
                '::placeholder': { color: 'rgba(143, 44, 36, 0.6)' }
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label className="form-label">
              Available phrases:
            </label>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '10px',
              borderRadius: '8px',
              fontSize: '0.9em'
            }}>
              {getAvailablePhrases()}
            </div>
          </div>

          <button
            className="form-button"
            onClick={translateText}
          >
            Translate
          </button>

          {outputText && (
            <div className="form-group" style={{ marginTop: '20px' }}>
              <label className="form-label">
                Translation:
              </label>
              <div style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '15px',
                borderRadius: '8px',
                minHeight: '100px',
                whiteSpace: 'pre-wrap',
                color: '#8f2c24'
              }}>
                {outputText}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageTranslator;
