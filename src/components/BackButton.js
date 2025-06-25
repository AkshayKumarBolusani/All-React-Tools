import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        padding: '10px 20px',
        background: 'rgba(143, 44, 36, 0.9)',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        fontSize: '1em',
        transition: 'background 0.3s ease',
      }}
      onMouseOver={(e) => e.target.style.background = 'rgba(214, 76, 66, 0.9)'}
      onMouseOut={(e) => e.target.style.background = 'rgba(143, 44, 36, 0.9)'}
    >
      ← Back to Home
    </button>
  );
};

export default BackButton; 