import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextFrom';
import AgeCompare from './components/AgeCompare';
import About from './components/About';
import TodoList from './components/TodoList';
// import QRCodeGenerator from './components/QRCodeGenerator';


function App() {
  // Load dark mode from localStorage on mount
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === null ? false : JSON.parse(saved);
  });

  const [alert, setAlert] = useState(null);
  // About modal state
  const [showAboutModal, setShowAboutModal] = useState(true);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1700);
  } 

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      showAlert(
        newMode ? 'Dark mode has been enabled' : 'Light mode has been enabled',
        newMode ? 'dark' : 'light'
      );
      return newMode;
    });
  };

  return (
    <div className={darkMode ? 'app-dark' : 'app-light'} style={{ minHeight: '100vh' }}>
      {/* About modal component */}
      <About darkMode={darkMode} show={showAboutModal} onClose={() => setShowAboutModal(false)} />
      {/* Main app content always visible */}
      <Navbar title="TextNova" aboutText="About" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Alert alert={alert} type={darkMode ? 'dark' : 'light'} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" darkMode={darkMode} showAlert={showAlert} />} />
          <Route path="/age-compare" element={<AgeCompare darkMode={darkMode} />} />
          <Route path="/todo-list" element={<TodoList darkMode={darkMode} />} />
          {/* <Route path="/qr-code-generator" element={<QRCodeGenerator darkMode={darkMode} />} /> */}
        </Routes>
      </div>
      {/* Footer */}
      <footer className="app-footer" style={{
        width: '100%',
        textAlign: 'center',
        padding: '1.5rem 0 1rem 0',
        fontSize: '1.1rem',
        color: darkMode ? '#e0e0e0' : '#222',
        background: darkMode ? '#181a1b' : '#f8f9fa',
        borderTop: darkMode ? '1px solid #23272f' : '1px solid #e3e3e3',
        letterSpacing: '0.01em',
        marginTop: 'auto'
      }}>
        Copyright © 2025 All Rights Reserved by TextNova | Design by <span style={{color: '#6c63ff', fontWeight: 500}}>Shubham Joshi</span>
      </footer>
    </div>
  );
}

export default App;
