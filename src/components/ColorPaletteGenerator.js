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

const ColorPaletteGenerator = () => {
  const [baseColor, setBaseColor] = useState('#8f2c24');
  const [palette, setPalette] = useState([]);
  const [copied, setCopied] = useState(null);

  const generatePalette = () => {
    const hsl = hexToHSL(baseColor);
    const newPalette = [];

    // Analogous colors (adjacent on the color wheel)
    newPalette.push(hslToHex(hsl.h - 30, hsl.s, hsl.l));
    newPalette.push(baseColor);
    newPalette.push(hslToHex(hsl.h + 30, hsl.s, hsl.l));

    // Complementary color
    newPalette.push(hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l));

    // Monochromatic variations
    newPalette.push(hslToHex(hsl.h, hsl.s, Math.max(0, hsl.l - 20)));
    newPalette.push(hslToHex(hsl.h, hsl.s, Math.min(100, hsl.l + 20)));

    setPalette(newPalette);
  };

  const hexToHSL = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: h = 0;
      }
      h = Math.round(h * 60);
    }

    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { h, s, l };
  };

  const hslToHex = (h, s, l) => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  const copyToClipboard = (color, index) => {
    navigator.clipboard.writeText(color);
    setCopied(index);
    setTimeout(() => setCopied(null), 1000);
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
          <h1 className="page-title">Color Palette Generator</h1>
          <p style={{ textAlign: 'center', fontSize: '0.9em', color: '#8f2c24', marginTop: '10px' }}>
            Create beautiful color combinations from a base color
          </p>
        </div>

        <div className="scrollable-content">
          <div className="form-group">
            <label className="form-label" htmlFor="baseColor">
              Choose Base Color:
            </label>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <input
                type="color"
                id="baseColor"
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
                style={{
                  width: '50px',
                  height: '50px',
                  padding: '0',
                  border: '2px solid rgba(143, 44, 36, 0.3)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  background: 'transparent'
                }}
              />
              <div style={{ position: 'relative', flex: 1 }}>
                <input
                  type="text"
                  value={baseColor}
                  onChange={(e) => setBaseColor(e.target.value.startsWith('#') ? e.target.value : '#' + e.target.value)}
                  className="form-input"
                  placeholder="Enter hex color code (e.g., #FF5733)..."
                  style={{
                    color: '#8f2c24',
                    fontFamily: 'monospace',
                    fontSize: '1.2em',
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
                  🎨
                </div>
              </div>
            </div>
          </div>

          <button className="form-button" onClick={generatePalette}>
            Generate Palette
          </button>

          {palette.length > 0 && (
            <div className="form-group" style={{ marginTop: '20px' }}>
              <label className="form-label">Generated Palette:</label>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '15px',
                marginTop: '10px'
              }}>
                {palette.map((color, index) => (
                  <div
                    key={index}
                    onClick={() => copyToClipboard(color, index)}
                    style={{
                      background: color,
                      height: '100px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'transform 0.2s ease',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <span style={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      fontSize: '0.9em',
                      color: '#8f2c24',
                      fontFamily: 'monospace'
                    }}>
                      {copied === index ? 'Copied!' : color}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteGenerator;
