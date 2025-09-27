import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextFrom';

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About"/> */}
      <Navbar title="TextUtils" aboutText="About"/>
      <div className="container">
        {/* <TextForm heading="Enter the text to analyze below"/> */}
        <About />
      </div>
    </>
  );
}

export default App;
