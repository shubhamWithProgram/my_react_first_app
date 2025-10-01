import React from 'react';

export default function About({ darkMode = false, show = false, onClose = () => {} }) {
    if (!show) return null;

    const aboutInfo = {
        title: 'About TextNova',
        logo: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" className="me-2">
                <rect x="4" y="4" width="32" height="32" rx="10" fill="#0d6efd" />
                <text x="20" y="27" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#fff" fontFamily="Segoe UI, Arial, sans-serif">TN</text>
            </svg>
        ),
        description: (
            <>
                <strong>TextNova</strong> is a modern text utility platform designed to simplify your writing and editing tasks.
            </>
        ),
        features: [
            '✨ Count words and characters instantly',
            '✨ Convert text to different cases',
            '✨ Seamless dark/light mode for comfort'
        ],
        mission: 'Empowering users with intuitive tools to write smarter and edit faster.'
    };

    return (
        <>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 9998,
                background: darkMode ? 'rgba(30,32,40,0.25)' : 'rgba(220,225,255,0.25)',
                backdropFilter: 'blur(7px)',
                WebkitBackdropFilter: 'blur(7px)'
            }} onClick={onClose} />
            <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
                width: 'min(360px, 90vw)',
                minWidth: '240px',
                maxWidth: '90vw',
                background: darkMode ? 'linear-gradient(135deg,#23272b 0%,#6c63ff 100%)' : 'linear-gradient(135deg,#fff 0%,#6c63ff 100%)',
                color: darkMode ? '#f8f9fa' : '#23263a',
                borderRadius: '1rem',
                boxShadow: darkMode ? '0 8px 32px rgba(108,99,255,0.5)' : '0 8px 32px rgba(108,99,255,0.3)',
                border: '1.5px solid #6c63ff',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                justifyContent: 'flex-start',
                gap: '1rem'
            }}>
                <div style={{display:'flex',alignItems:'center',width:'100%',gap:'0.6rem',marginBottom:'0.5rem'}}>
                    {aboutInfo.logo}
                    <h4 className="fw-bold text-primary" style={{letterSpacing:'0.3px',margin:'0',fontSize:'1.2rem',textShadow:'0 2px 8px rgba(108,99,255,0.2)',flex:1}}>{aboutInfo.title}</h4>
                    <button type="button" className="btn-close" aria-label="Close" onClick={onClose} style={{filter:darkMode?'invert(1)':'none',marginLeft:'0',fontSize:'1.2rem',alignSelf:'center'}}></button>
                </div>
                <p style={{marginBottom:'0.5rem',fontSize:'0.95rem',fontWeight:500,lineHeight:'1.6',color:darkMode?'#f3f3fa':'#23263a'}}>{aboutInfo.description}</p>
                <div style={{display:'flex',flexDirection:'column',gap:'0.5rem',marginBottom:'0.5rem',width:'100%'}}>
                    {aboutInfo.features.map((f,i)=>(
                        <span key={i} style={{background:darkMode?'#35355a':'#f6f7fb',color:darkMode?'#ffeedd':'#6c63ff',borderRadius:'0.7rem',padding:'0.4rem 0.8rem',fontSize:'0.9rem',fontWeight:500,boxShadow:darkMode?'0 1px 6px rgba(108,99,255,0.3)':'0 1px 4px rgba(108,99,255,0.2)',border:darkMode?'1px solid #6c63ff':'1px solid #e3e6ee',textAlign:'left',fontFamily:'Montserrat,sans-serif',overflow:'hidden',textOverflow:'ellipsis',display:'block'}}>{f}</span>
                    ))}
                </div>
                <div style={{borderRadius:'0.8rem',fontSize:'0.9rem',background:darkMode?'linear-gradient(90deg,#35355a 0%,#23272b 100%)':'linear-gradient(90deg,#e3e6ee 0%,#fff 100%)',color:darkMode?'#ffeedd':'#23263a',boxShadow:'0 2px 8px rgba(108,99,255,0.2)',fontWeight:500,padding:'0.8rem 1rem',marginBottom:0,width:'100%',fontFamily:'Montserrat,sans-serif'}}>
                    <strong>Mission:</strong> {aboutInfo.mission}
                </div>
            </div>
        </>
    );
}
