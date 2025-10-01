import React, { useState } from 'react';

export default function AgeCompare(props) {
  const [name1, setName1] = useState('');
  const [dob1, setDob1] = useState('');
  const [name2, setName2] = useState('');
  const [dob2, setDob2] = useState('');
  const [result, setResult] = useState('');

  function calculateAge(dob) {
    if (!dob) return null;
    const [year, month, day] = dob.split('-').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const handleCompare = () => {
    const ageA = calculateAge(dob1);
    const ageB = calculateAge(dob2);
    if (!name1 || !dob1 || !name2 || !dob2 || ageA === null || ageB === null) {
      setResult('Please enter both names and valid dates of birth.');
      return;
    }
    let msg = `${name1} is ${ageA} years old. ${name2} is ${ageB} years old. `;
    if (ageA === ageB) {
      msg += 'Both are of the same age.';
    } else if (ageA > ageB) {
      msg += `${name1} is older than ${name2}.`;
    } else {
      msg += `${name2} is older than ${name1}.`;
    }
    setResult(msg);
  };

  return (
    <div className="card shadow-sm p-4" style={{ maxWidth: 520, margin: '2.5rem auto', borderRadius: 18, background: props.darkMode ? '#23272b' : '#f8f9fc', boxShadow: props.darkMode ? '0 4px 24px #181a1b55' : '0 4px 24px #e3e6ee55' }}>
      <h3 className="mb-4 text-primary fw-bold" style={{letterSpacing: '0.5px'}}>Age Compare</h3>
      <form autoComplete="off" onSubmit={e => {e.preventDefault(); handleCompare();}}>
        <div className="mb-4">
          <label className="fw-semibold mb-1" htmlFor="name1">1st Name :</label>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter Name 1"
            id="name1"
            value={name1}
            onChange={e => setName1(e.target.value)}
            style={{border: '1.5px solid #6c63ff', fontSize: '1.08rem'}}
          />
          <div className="input-group mb-2">
            <input
              type="date"
              className="form-control"
              id="dob1"
              value={dob1}
              onChange={e => setDob1(e.target.value)}
              style={{border: '1.5px solid #6c63ff', fontSize: '1.08rem'}}
              placeholder="dd-mm-yyyy"
            />
            <span className="input-group-text bg-transparent border-0" style={{marginLeft: '-40px'}}>
              <svg width="22" height="22" fill="#6c63ff" viewBox="0 0 24 24"><path d="M7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V8h14v12zm0-14H5V6h14v2z"/></svg>
            </span>
          </div>
        </div>
        <div className="mb-4">
          <label className="fw-semibold mb-1" htmlFor="name2">2nd Name :</label>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter Name 2"
            id="name2"
            value={name2}
            onChange={e => setName2(e.target.value)}
            style={{border: '1.5px solid #6c63ff', fontSize: '1.08rem'}}
          />
          <div className="input-group mb-2">
            <input
              type="date"
              className="form-control"
              id="dob2"
              value={dob2}
              onChange={e => setDob2(e.target.value)}
              style={{border: '1.5px solid #6c63ff', fontSize: '1.08rem'}}
              placeholder="dd-mm-yyyy"
            />
            <span className="input-group-text bg-transparent border-0" style={{marginLeft: '-40px'}}>
              <svg width="22" height="22" fill="#6c63ff" viewBox="0 0 24 24"><path d="M7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V8h14v12zm0-14H5V6h14v2z"/></svg>
            </span>
          </div>
        </div>
        <button type="submit" className="btn w-100 fw-bold" style={{background: 'linear-gradient(90deg,#6c63ff 0%,#5f5fc4 100%)', color: '#fff', fontSize: '1.15rem', borderRadius: 12, boxShadow: '0 2px 8px #6c63ff22'}}>Compare Ages</button>
      </form>
      {result && <div className="alert alert-info mt-4 text-center" style={{fontSize: '1.08rem', borderRadius: 10}}>{result}</div>}
    </div>
  );
}
