import React, { useState, useEffect, useRef } from 'react';

function TrafficLight() {
  const lights = ['red', 'green', 'yellow'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const nextLight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % lights.length);
  };
  useEffect(() => {
    intervalRef.current = setInterval(nextLight, 2000);
    return () => clearInterval(intervalRef.current);
  }, []);
  const handleButtonClick = () => {
    clearInterval(intervalRef.current);
    nextLight();
    intervalRef.current = setInterval(nextLight, 2000);
  };
  const lightStyle = (color) => ({
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: color === lights[currentIndex] ? color : '#ccc',
    margin: '10px auto',
    transition: 'background-color 0.5s ease',
  });

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', marginTop: '30px' }}>
      <h3>Đèn giao thông</h3>
      <div>
        <div style={lightStyle('red')}></div>
        <div style={lightStyle('yellow')}></div>
        <div style={lightStyle('green')}></div>
      </div>
      <button
        onClick={handleButtonClick}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Chuyển đèn
      </button>
    </div>
  );
}

export default TrafficLight;
