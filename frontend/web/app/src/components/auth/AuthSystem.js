import React, { useState } from 'react';

const AuthSystem = () => {
  const [currentView, setCurrentView] = useState('signin');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    userType: 'patient'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignIn = () => {
    if (!formData.email || !formData.password) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Sign in data:', { email: formData.email, password: formData.password });
    alert('Sign in successful! (Check console for data)');
  };

  const handleSignUp = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Sign up data:', formData);
    alert('Account created successfully! (Check console for data)');
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f0f9ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    authCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      padding: '40px',
      width: '100%',
      maxWidth: '450px',
      position: 'relative',
      overflow: 'hidden'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    logo: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#0ea5e9',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    logoIcon: {
      width: '40px',
      height: '40px',
      backgroundColor: '#0ea5e9',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '20px'
    },
    subtitle: {
      color: '#64748b',
      fontSize: '16px',
      marginBottom: '20px'
    },
    tabContainer: {  
      display: 'flex',
      backgroundColor: '#f1f5f9',
      borderRadius: '12px',
      padding: '4px',
      marginBottom: '30px'
    },
    tabButton: {
      flex: 1,
      padding: '12px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      backgroundColor: 'transparent',
      color: '#64748b'
    },
    activeTab: {
      backgroundColor: 'white',
      color: '#0ea5e9',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151'
    },
    input: {
      padding: '12px 16px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '16px',
      transition: 'border-color 0.2s ease',
      outline: 'none',
      backgroundColor: 'white'
    },
    select: {
      padding: '12px 16px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '16px',
      backgroundColor: 'white',
      cursor: 'pointer',
      outline: 'none'
    },
    rowInputs: {
      display: 'flex',
      gap: '12px'
    },
    submitButton: {
      backgroundColor: '#0ea5e9',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '14px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
      marginTop: '10px'
    },
    forgotPassword: {
      textAlign: 'right',
      marginTop: '8px'
    },
    forgotLink: {
      color: '#0ea5e9',
      textDecoration: 'none',
      fontSize: '14px',
      cursor: 'pointer'
    },
    decorativeCircle: {
      position: 'absolute',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #0ea5e9, #3b82f6)',
      opacity: 0.1,
      top: '-100px',
      right: '-100px',
      zIndex: 0
    },
    formContent: {
      position: 'relative',
      zIndex: 1
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.authCard}>
        <div style={styles.decorativeCircle}></div>
        <div style={styles.formContent}>
          <div style={styles.header}>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>⚕</div>
              MediLink
            </div>
            <p style={styles.subtitle}>
              {currentView === 'signin' ? 'Welcome back to your health portal' : 'Join our healthcare community'}
            </p>
          </div>

          <div style={styles.tabContainer}>
            <button
              style={{
                ...styles.tabButton,
                ...(currentView === 'signin' ? styles.activeTab : {})
              }}
              onClick={() => setCurrentView('signin')}
            >
              Sign In
            </button>  
            <button
              style={{
                ...styles.tabButton,
                ...(currentView === 'signup' ? styles.activeTab : {})
              }}
              onClick={() => setCurrentView('signup')}
            >
              Sign Up
            </button>
          </div>

          {currentView === 'signin' ? (
            <div style={styles.formContainer}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder="Enter your email"
                />
              </div>
              
              <div style={styles.inputGroup}>
                <label style={styles.label}>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder="Enter your password"
                />
                <div style={styles.forgotPassword}>
                  <a href="#" style={styles.forgotLink} onClick={(e) => {e.preventDefault(); alert('Forgot password feature coming soon!');}}>
                    Forgot Password?
                  </a>
                </div>
              </div>

              <button style={styles.submitButton} onClick={handleSignIn}>
                Sign In to MediLink
              </button>
            </div>
          ) : (
            <div style={styles.formContainer}>
              <div style={styles.rowInputs}>
                <div style={{...styles.inputGroup, flex: 1}}>
                  <label style={styles.label}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="First name"
                  />
                </div>
                <div style={{...styles.inputGroup, flex: 1}}>
                  <label style={styles.label}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder="Enter your email"
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder="Enter your phone number"
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>User Type</label>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder="Create a password"
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder="Confirm your password"
                />
              </div>

              <button style={styles.submitButton} onClick={handleSignUp}>
                Create MediLink Account
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthSystem;