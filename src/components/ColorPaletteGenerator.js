import React, { useState } from 'react';

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ColorPaletteGenerator = () => {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);

  const generatePalette = () => {
    const newPalette = Array.from({ length: 5 }, () => generateRandomColor());
    setColors(newPalette);
    setSelectedColor(null);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    copyToClipboard(color);
  };

  const copyToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  return (
    <center>
    <div style={styles.container}>
      <h2 style={styles.title}>Color Palette Generator</h2>
      <button style={styles.button} onClick={generatePalette}>
        Generate Palette
      </button>

      <div style={styles.palette}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ ...styles.colorBox, backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        
          
          ))}
      </div>

      {selectedColor && (
        <div style={styles.selectedColor}>
          <h3>Selected Color:</h3>
          <p>{selectedColor}</p>
          <small>Color Code Copied to clipboard Succesfully</small>
        </div>
      )}
    </div>
    </center> );
};

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
      fontSize: '24px',
      marginBottom: '20px',
    },
    button: {
      backgroundColor: '#e50914',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      marginBottom: '20px',
    },
    palette: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0px',
    },
    colorBox: {
      width: '50px',
      height: '50px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      cursor: 'pointer',
      marginRight: '10px', // Space between color boxes
    },
    selectedColor: {
      marginTop: '20px',
    },
  };
  

export default ColorPaletteGenerator;
