import React from 'react';
import ColorPaletteGenerator from '../components/ColorPaletteGenerator';

const ColorPalettePage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome to the Color Palette Generator</h2>
      <ColorPaletteGenerator />
    </div>
  );
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
    fontSize: '36px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
};

export default ColorPalettePage;
