
export default function About({ darkMode }) {
    const myStyle = {
        backgroundColor: darkMode ? '#181a1b' : '#fff',
        color: darkMode ? '#f8f9fa' : '#212529',
        borderRadius: '1rem',
        boxShadow: darkMode
            ? '0 2px 16px rgba(0,0,0,0.7)'
            : '0 2px 16px rgba(0,0,0,0.08)',
        padding: '2rem',
        marginTop: '2rem',
        transition: 'background-color 0.3s, color 0.3s'
    };

    return (
        <div style={myStyle}>
            <div className="d-flex align-items-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" className="me-2">
                                    <rect x="4" y="4" width="32" height="32" rx="10" fill="#0d6efd" />
                                    <text x="20" y="27" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#fff" fontFamily="Segoe UI, Arial, sans-serif">TN</text>
                                </svg>
                <h2 className="fw-bold mb-0 text-primary">About TextNova</h2>
            </div>
            <p className="lead mb-4">
                <strong>TextNova</strong> is a modern, feature-rich online text utility platform designed to make your writing and editing tasks effortless. Whether you're a student, professional, content creator, or just someone who works with text, TextNova empowers you to transform, analyze, and optimize your content with a single click.
            </p>
            <ul className="list-group mb-4">
                <li className={`list-group-item ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}>✨ Instantly count words, characters, and estimate reading time</li>
                <li className={`list-group-item ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}>✨ Convert text to Uppercase, Lowercase, or Title Case</li>
                <li className={`list-group-item ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}>✨ Remove extra spaces, punctuation, or reverse your text</li>
                <li className={`list-group-item ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}>✨ Copy, reset, and listen to your text with built-in speech tools</li>
                <li className={`list-group-item ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}>✨ Beautiful, responsive, and distraction-free interface</li>
                <li className={`list-group-item ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}>✨ Seamless dark/light mode for comfortable reading anytime</li>
            </ul>
            <div className="alert alert-info mt-3" role="alert">
                <strong>Our Mission:</strong> To provide a fast, intuitive, and powerful text toolkit that helps you write smarter, edit faster, and communicate better.<br/>
                <span className="d-block mt-2"><strong>Tip:</strong> Try switching between dark and light mode for the best experience!</span>
            </div>
        </div>
    );
}
