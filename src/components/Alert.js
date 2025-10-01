import React from 'react';

const typeIcon = {
    success: (
        <svg width="22" height="22" fill="currentColor" className="me-2" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#51cf66"/><path d="M12 5.5l-4.5 4.5-2-2" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
    ),
    warning: (
        <svg width="22" height="22" fill="currentColor" className="me-2" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#fcc419"/><path d="M8 5v3.5M8 11h.01" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
    ),
    danger: (
        <svg width="22" height="22" fill="currentColor" className="me-2" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff6b6b"/><path d="M5.5 5.5l5 5m0-5l-5 5" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
    ),
    info: (
        <svg width="22" height="22" fill="currentColor" className="me-2" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#339af0"/><text x="8" y="13" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">i</text></svg>
    ),
    dark: (
        <svg width="22" height="22" fill="currentColor" className="me-2" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#212529"/><path d="M12 5.5l-4.5 4.5-2-2" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
    ),
    light: (
        <svg width="22" height="22" fill="currentColor" className="me-2" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ffe066"/><text x="8" y="13" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#212529">!</text></svg>
    ),
};

const Alert = (props) => {
    if (!props.alert) return null;
    let colorClass = 'info';
    if (props.alert.type === 'dark') colorClass = 'dark';
    else if (props.alert.type === 'light') colorClass = 'light';
    else if (props.alert.type === 'success') colorClass = 'success';
    else if (props.alert.type === 'warning') colorClass = 'warning';
    else if (props.alert.type === 'danger') colorClass = 'danger';

    // Custom style for modern, unique look
    const alertStyle = {
        borderRadius: '1.2rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        border: 'none',
        fontWeight: 300,
        fontSize: '0.9rem',
        display: 'flex',
        alignItems: 'center',
        padding: '0.85rem 1.5rem',
        margin: '1rem auto',
        maxWidth: 350,
        letterSpacing: '0.01em',
        animation: 'fadeInAlert 0.5s',
        background: colorClass === 'dark' ? '#23272b' : colorClass === 'light' ? '#fffbe6' : undefined,
        color: colorClass === 'dark' ? '#f8f9fa' : colorClass === 'light' ? '#856404' : undefined,
        borderLeft: colorClass === 'success' ? '6px solid #51cf66' : colorClass === 'warning' ? '6px solid #fcc419' : colorClass === 'danger' ? '6px solid #ff6b6b' : colorClass === 'dark' ? '6px solid #212529' : colorClass === 'light' ? '6px solid #ffe066' : '6px solid #339af0',
    };

    return (
        <div
            className={`alert alert-${colorClass} d-flex align-items-center shadow-sm fade show`}
            role="alert"
            style={alertStyle}
        >
            {typeIcon[props.alert.type] || typeIcon.info}
            <span>
                <strong className="me-1">{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}:</strong> {props.alert.message}
            </span>
            <style>{`
                @keyframes fadeInAlert {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default Alert;