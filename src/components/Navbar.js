

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg shadow-sm ${props.darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`} style={{borderBottom: props.darkMode ? '1.5px solid #222' : '1.5px solid #e3e3e3'}}>
            <div className="container-fluid py-2">
                <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect width="32" height="32" rx="8" fill={props.darkMode ? '#0dcaf0' : '#6c63ff'} />
                        <text x="16" y="21" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white" fontFamily="Segoe UI, Arial">N</text>
                        <circle cx="25" cy="8" r="3" fill="#FFD600" stroke="#fff" strokeWidth="1.2" />
                        <g>
                          <line x1="25" y1="4.5" x2="25" y2="2.5" stroke="#FFD600" strokeWidth="1.2" />
                          <line x1="25" y1="13.5" x2="25" y2="15.5" stroke="#FFD600" strokeWidth="1.2" />
                          <line x1="21.5" y1="8" x2="19.5" y2="8" stroke="#FFD600" strokeWidth="1.2" />
                          <line x1="28.5" y1="8" x2="30.5" y2="8" stroke="#FFD600" strokeWidth="1.2" />
                        </g>
                    </svg>
                    {props.title}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active fw-semibold" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-2 ms-lg-3 mt-2 mt-lg-0">
                        <span className={`fw-semibold ${props.darkMode ? 'text-light' : 'text-dark'}`}>{props.darkMode ? 'Dark' : 'Light'} Mode</span>
                        <button
                            className={`theme-toggle-btn ${props.darkMode ? 'dark' : 'light'}`}
                            onClick={props.toggleDarkMode}
                            aria-label="Toggle dark/light mode"
                            style={{
                                border: 'none',
                                background: 'none',
                                outline: 'none',
                                cursor: 'pointer',
                                padding: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '44px',
                                height: '28px',
                                borderRadius: '20px',
                                boxShadow: props.darkMode ? '0 2px 8px #0002' : '0 2px 8px #0001',
                                transition: 'background 0.3s'
                            }}
                        >
                            {props.darkMode ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="#FFD600"/>
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="5" fill="#FFC107"/>
                                    <g stroke="#FFC107" strokeWidth="2">
                                        <line x1="12" y1="1" x2="12" y2="3"/>
                                        <line x1="12" y1="21" x2="12" y2="23"/>
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                        <line x1="1" y1="12" x2="3" y2="12"/>
                                        <line x1="21" y1="12" x2="23" y2="12"/>
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                                    </g>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes ={
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  darkMode: PropTypes.bool,
  toggleDarkMode: PropTypes.func
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About Txt',
  darkMode: false,
  toggleDarkMode: () => {}
}
