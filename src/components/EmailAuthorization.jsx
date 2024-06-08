import React, { useState } from 'react';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
    } else if (!validateEmail(email)) {
      setError('Invalid email address');
    } else if (email.endsWith('@ez.works')) {
      setError('Emails ending with @ez.works are not allowed');
    } else {
      try {
        const response = await fetch('http://34.225.132.160:8002/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (!response.ok) {
          setError(data.message || 'An error occurred');
        } else {
          setSuccess('Email submitted successfully!');
          setEmail('');  // Clear the email field on successful submission
        }
      } catch (err) {
        setError('An error occurred while submitting the form');
      }
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form className='formid' onSubmit={handleSubmit}>
        <input 
          type="text"
          value={email}
          onChange={handleChange}
          placeholder="Email Address"
        />
        <button type="submit">Contact Me</button>
      </form>
    </div>
  );
}

export default EmailForm;
