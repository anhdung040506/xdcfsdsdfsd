import React, { useState } from 'react';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Tên không được để trống';
    if (!formData.email.trim()) newErrors.email = 'Email không được để trống';
    if (!formData.password.trim()) newErrors.password = 'Mật khẩu không được để trống';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedData(null);
    } else {
      setErrors({});
      setSubmittedData(formData);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '30px auto', fontFamily: 'Arial, sans-serif' }}>
      <h3>Form Đăng ký</h3>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Tên<br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', fontSize: '16px' }}
            />
          </label>
          {errors.name && <div style={{ color: 'red', marginTop: '5px' }}>{errors.name}</div>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Email<br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', fontSize: '16px' }}
            />
          </label>
          {errors.email && <div style={{ color: 'red', marginTop: '5px' }}>{errors.email}</div>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Mật khẩu<br />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', fontSize: '16px' }}
            />
          </label>
          {errors.password && <div style={{ color: 'red', marginTop: '5px' }}>{errors.password}</div>}
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Đăng ký
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: '30px', backgroundColor: '#e0f7fa', padding: '15px', borderRadius: '6px' }}>
          <h4>Thông tin đăng ký:</h4>
          <p><strong>Tên:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Mật khẩu:</strong> *******</p>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;
