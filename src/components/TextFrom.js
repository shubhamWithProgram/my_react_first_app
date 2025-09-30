import React, { useState, useRef } from 'react';

export default function TextForm(props) {
    // Find & Replace state
    const [findValue, setFindValue] = useState("");
    const [replaceValue, setReplaceValue] = useState("");
    const handleFindReplace = () => {
        if (!findValue) return;
        // Use global, case-insensitive replacement
        const regex = new RegExp(findValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        setText(text.replace(regex, replaceValue));
        props.showAlert && props.showAlert(`All occurrences of "${findValue}" replaced!`, "success");
    };
    // Reverse the entire text
    const [text, setText] = useState("");
    const [isSpeaking, setIsSpeaking] = useState(false);
    const utterRef = useRef(null);
    const handleReverseText = () => {
        setText(text.split('').reverse().join(''));
        props.showAlert && props.showAlert("Text reversed!", "success");
    };
    const handleReverseWords = () => {
        setText(text.split(' ').map(word => word.split('').reverse().join('')).join(' '));
        props.showAlert && props.showAlert("Each word reversed!", "success");
    };
    const handleRemovePunctuation = () => {
        setText(text.replace(/[\p{P}$+<=>^`|~]/gu, ''));
        props.showAlert && props.showAlert("Punctuation removed!", "success");
    };
    const handleUppercaseClick = () => {
        setText(text.toUpperCase());
        props.showAlert && props.showAlert("Converted to Uppercase!", "success");
    };
    const handleLowercaseClick = () => {
        setText(text.toLowerCase());
        props.showAlert && props.showAlert("Converted to Lowercase!", "success");
    };
    const handleChange = (event) => {
        setText(event.target.value);
    };
    const handleCopy = () => {
        var textArea = document.getElementById("myBox");
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
        props.showAlert && props.showAlert("Copied to clipboard!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert && props.showAlert("Extra spaces removed!", "success");
    }
    const handleReset = () => {
        setText("");
        props.showAlert && props.showAlert("Text reset!", "warning");
    }
    const handleTitleCase = () => {
        const titleCased = text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
        setText(titleCased);
        props.showAlert && props.showAlert("Converted to Title Case!", "success");
    }
    const handleSpeak = () => {
        if (!text) {
            props.showAlert && props.showAlert("No text to read!", "warning");
            return;
        }
        const synth = window.speechSynthesis;
        if (synth.speaking) {
            synth.cancel();
            setIsSpeaking(false);
            return;
        }
        const utter = new window.SpeechSynthesisUtterance(text);
        utter.lang = 'en-US';
        utter.onend = () => setIsSpeaking(false);
        utter.onerror = () => setIsSpeaking(false);
        utterRef.current = utter;
        synth.speak(utter);
        setIsSpeaking(true);
        props.showAlert && props.showAlert("Reading text aloud!", "info");
    }
    const handleStop = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        props.showAlert && props.showAlert("Speech stopped!", "warning");
    }
    const textareaStyle = {
        backgroundColor: props.darkMode ? '#212529' : 'white',
        color: props.darkMode ? 'white' : 'black',
        border: props.darkMode ? '1px solid #495057' : '1.5px solid #bdbdbd',
        boxShadow: props.darkMode ? 'none' : '0 1px 2px rgba(0,0,0,0.03)',
        transition: 'background-color 0.3s, color 0.3s, border 0.3s'
    };
    return (
        <div className="container-fluid py-4 px-2 px-md-4">
            <style>{`
                .trendy-btn {
                    border: none !important;
                    border-radius: 8px !important;
                    font-weight: 400;
                    font-size: 0.89rem;
                    padding: 0.18rem 0.65rem;
                    background: linear-gradient(90deg, #f8f9fa 0%, #e9ecef 100%);
                    color: #343a40 !important;
                    transition: background 0.18s, color 0.18s;
                    display: flex;
                    align-items: center;
                    gap: 0.22rem;
                    letter-spacing: 0.01em;
                    box-shadow: none !important;
                }
                .trendy-btn:active { transform: scale(0.99); }
                .trendy-btn.trendy-secondary { background: linear-gradient(90deg, #f8f9fa 0%, #f1f3f5 100%); color: #495057 !important; }
                .trendy-btn.trendy-success { background: linear-gradient(90deg, #e6fcf5 0%, #b2f2bb 100%); color: #2f9e44 !important; }
                .trendy-btn.trendy-warning { background: linear-gradient(90deg, #fff9db 0%, #fff3bf 100%); color: #b08900 !important; }
                .trendy-btn.trendy-danger { background: linear-gradient(90deg, #fff5f5 0%, #ffe3e3 100%); color: #c92a2a !important; }
                .trendy-btn.trendy-dark { background: linear-gradient(90deg, #495057 0%, #343a40 100%); color: #f8f9fa !important; }
                .trendy-btn.trendy-info { background: linear-gradient(90deg, #f1f3f5 0%, #e7f5ff 100%); color: #1971c2 !important; }
                .trendy-btn.trendy-light { background: linear-gradient(90deg, #fffbe6 0%, #fff9db 100%); color: #856404 !important; }
                .trendy-btn svg { margin-bottom: 0px; width: 11px; height: 11px; }
                .d-flex.flex-wrap.gap-2.mb-2 { gap: 0.45rem !important; }
            `}</style>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10 col-xl-8">
                    <div className={`card shadow-sm mb-4 ${props.darkMode ? 'bg-dark text-light border-secondary' : 'border border-2 border-primary-subtle'}`}
                        style={props.darkMode ? { backgroundColor: '#23272b', color: '#f8f9fa' } : { borderColor: '#bdbdbd', backgroundColor: '#fff', color: '#212529' }}>
                        <div className="card-body p-4">
                            <div className="d-flex align-items-center mb-3 flex-wrap gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="me-2 text-primary" viewBox="0 0 16 16">
                                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h7A2.5 2.5 0 0 1 14 2.5v11A2.5 2.5 0 0 1 11.5 16h-7A2.5 2.5 0 0 1 2 13.5v-11zM4.5 1A1.5 1.5 0 0 0 3 2.5v11A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 11.5 1h-7z"/>
                                    <path d="M3.5 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                                <h2 className="fw-bold mb-0 text-primary" style={{letterSpacing: '1px'}}>{props.heading}</h2>
                            </div>
                            <hr className="mb-4 mt-0" style={{borderTop: '2px solid #0d6efd', opacity: 0.15}} />
                            {/* Find & Replace Feature */}
                            <div className="mb-3">
                                <div className="row g-2 mb-2">
                                    <div className="col-12 col-sm-5 col-md-4">
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Find..."
                                            value={findValue}
                                            onChange={e => setFindValue(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-5 col-md-4">
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Replace with..."
                                            value={replaceValue}
                                            onChange={e => setReplaceValue(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-2 col-md-4 d-grid">
                                        <button
                                            className="btn btn-outline-primary btn-sm"
                                            style={{fontWeight: 500, borderRadius: 8}}
                                            onClick={handleFindReplace}
                                            disabled={!findValue}
                                            title="Replace all occurrences"
                                        >
                                            Replace All
                                        </button>
                                    </div>
                                </div>
                                <div style={{position: 'relative'}}>
                                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleChange} style={textareaStyle}></textarea>
                                    <button
                                        type="button"
                                        onClick={isSpeaking ? handleStop : handleSpeak}
                                        style={{
                                            position: 'absolute',
                                            right: '10px',
                                            bottom: '10px',
                                            background: isSpeaking
                                                ? 'linear-gradient(135deg, #ff6b6b 0%, #c92a2a 100%)'
                                                : 'linear-gradient(135deg, #aab6fe 0%, #6c63ff 100%)',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '38px',
                                            height: '38px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 16px #0001',
                                            cursor: 'pointer',
                                            zIndex: 2,
                                            transition: 'background 0.2s, box-shadow 0.2s'
                                        }}
                                        title={isSpeaking ? "Stop speaking" : "Speak text"}
                                    >
                                        {isSpeaking ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 24 24">
                                                <rect x="5" y="5" width="14" height="14" rx="3" fill="#fff"/>
                                                <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#c92a2a">■</text>
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                <path d="M3 9v6h4l5 5V4L7 9H3z" fill="#212529"/>
                                                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03z" fill="#212529"/>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap gap-2 mb-2">
                                {/* Modern trending button styles and all text utility buttons */}
                                {/* ...existing code for buttons... */}
                                <button className="trendy-btn" onClick={handleUppercaseClick} title="Uppercase">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><text x="2" y="14" fontSize="14" fontWeight="bold">A</text></svg>
                                    Uppercase
                                </button>
                                <button className="trendy-btn trendy-secondary" onClick={handleLowercaseClick} title="Lowercase">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><text x="2" y="14" fontSize="14" fontWeight="bold">a</text></svg>
                                    Lowercase
                                </button>
                                <button className="trendy-btn trendy-info" onClick={handleTitleCase} title="Title Case">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><text x="2" y="14" fontSize="14" fontWeight="bold">Aa</text></svg>
                                    Title Case
                                </button>
                                <button className="trendy-btn trendy-warning" style={{ minWidth: '140px' }} title="Reverse All Text" onClick={handleReverseText}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 1 1 .894-.448A4 4 0 1 0 8 4V1.5a.5.5 0 0 1 1 0v3A.5.5 0 0 1 8.5 5h-3a.5.5 0 0 1 0-1H8z"/></svg>
                                    Reverse Text
                                </button>
                                <button className="trendy-btn trendy-warning" style={{ minWidth: '140px' }} title="Reverse Each Word" onClick={handleReverseWords}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm3.5 7a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11a.5.5 0 0 1 .5.5z"/></svg>
                                    Reverse Words
                                </button>
                                <button className="trendy-btn trendy-dark" onClick={handleRemovePunctuation} title="Remove Punctuation">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><text x="2" y="14" fontSize="14" fontWeight="bold">!?</text></svg>
                                    Remove Punctuation
                                </button>
                                <button className="trendy-btn trendy-success" onClick={handleCopy} title="Copy">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M10 1.5A1.5 1.5 0 0 1 11.5 3v1H13a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1.5V3A1.5 1.5 0 0 1 8 1.5h2zm-2 1A.5.5 0 0 0 7.5 3v1h3V3a.5.5 0 0 0-.5-.5h-2zM5 5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5z"/></svg>
                                    Copy
                                </button>
                                <button className="trendy-btn trendy-warning" onClick={handleExtraSpaces} title="Remove Spaces">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8zm2.354-3.646a.5.5 0 1 0-.708.708L4.793 6.5H2.5a.5.5 0 0 0 0 1h2.293l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/></svg>
                                    Remove Spaces
                                </button>
                                {/* Speak/Stop button moved inside textarea, removed from here */}
                                <button className="trendy-btn trendy-danger" onClick={handleReset} title="Reset">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M2.5 2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-11zm1 .5v10h9V3h-9zm2.354 2.646a.5.5 0 1 1 .708.708L8.207 8l2.147 2.146a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5z"/></svg>
                                    Reset
                                </button>
                            </div>
                            {/* Responsive summary and preview cards */}
                            <div className="row g-4 mt-2">
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className={`card shadow-sm flex-grow-1 h-100 ${props.darkMode ? 'bg-dark text-light border-secondary' : 'border border-2 border-primary-subtle'}`}
                                        style={props.darkMode ? { backgroundColor: '#23272b', color: '#f8f9fa' } : { borderColor: '#bdbdbd', backgroundColor: '#fff', color: '#212529' }}>
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className={`me-2 ${props.darkMode ? 'text-info' : 'text-primary'}`} viewBox="0 0 16 16">
                                                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13A6 6 0 1 1 8 2a6 6 0 0 1 0 12z"/>
                                                    <path d="M4.285 12.433a.5.5 0 0 1-.433-.75C4.97 9.566 6.387 8.5 8 8.5s3.03 1.066 4.148 3.183a.5.5 0 1 1-.866.5C10.97 10.434 9.613 9.5 8 9.5s-2.97.934-3.282 2.683a.5.5 0 0 1-.433.25zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                                </svg>
                                                <h5 className={`card-title mb-0 fw-bold ${props.darkMode ? 'text-info' : 'text-primary'}`}>Your Text Summary</h5>
                                            </div>
                                            <ul className="list-group list-group-flush mb-3">
                                                <li className={`list-group-item d-flex justify-content-between align-items-center ${props.darkMode ? 'bg-dark text-light border-secondary' : ''}`}
                                                    style={props.darkMode ? { backgroundColor: '#23272b', color: '#f8f9fa' } : {}}>
                                                    <span>Words</span>
                                                    <span className="badge bg-primary rounded-pill">{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length}</span>
                                                </li>
                                                <li className={`list-group-item d-flex justify-content-between align-items-center ${props.darkMode ? 'bg-dark text-light border-secondary' : ''}`}
                                                    style={props.darkMode ? { backgroundColor: '#23272b', color: '#f8f9fa' } : {}}>
                                                    <span>Characters</span>
                                                    <span className="badge bg-secondary rounded-pill">{text.length}</span>
                                                </li>
                                                <li className={`list-group-item d-flex justify-content-between align-items-center ${props.darkMode ? 'bg-dark text-light border-secondary' : ''}`}
                                                    style={props.darkMode ? { backgroundColor: '#23272b', color: '#f8f9fa' } : {}}>
                                                    <span>Estimated Read Time</span>
                                                    <span className="badge bg-success rounded-pill">{(0.008 * text.split(" ").length).toFixed(2)} min</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className={`card shadow-sm flex-grow-1 h-100 ${props.darkMode ? 'bg-dark text-light border-secondary' : 'border border-2 border-primary-subtle'}`}
                                        style={props.darkMode ? { backgroundColor: '#23272b', color: '#f8f9fa' } : { borderColor: '#bdbdbd', backgroundColor: '#fff', color: '#212529' }}>
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className={`me-2 ${props.darkMode ? 'text-info' : 'text-primary'}`} viewBox="0 0 16 16">
                                                    <path d="M3 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                                                </svg>
                                                <h5 className={`card-title mb-0 fw-bold ${props.darkMode ? 'text-info' : 'text-primary'}`}>Preview</h5>
                                            </div>
                                            <div className="card-text" style={{whiteSpace: 'pre-wrap', minHeight: '120px'}}>
                                                {text.length > 0 ? text : <span className="text-muted">Nothing to preview!</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
