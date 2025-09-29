import React, { useState } from 'react';

function TextCounter() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 100) {
      setText(inputValue);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h3>Bộ đếm ký tự</h3>
      <input
        type="text"
        placeholder="Nhập văn bản..."
        value={text}
        onChange={handleChange}
        style={{ width: '100%', padding: '8px', fontSize: '16px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <span
          style={{
            color: text.length > 100 ? 'red' : 'black',
            fontWeight: text.length > 100 ? 'bold' : 'normal',
          }}
        >
          Số ký tự: {text.length}
        </span>
      </div>
      {text.length === 100 && (
        <div style={{ color: 'red', marginTop: '5px' }}>
          Đã đạt giới hạn tối đa 100 ký tự!
        </div>
      )}
    </div>
  );
}

export default TextCounter;
