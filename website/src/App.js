import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';


function App() {
  return (
    <>

      <div>
        <Navbar />

        <div className="container my-3">
          <Textform heading="Enter The Text To Analyse Below" />
        </div>
      </div>
    </>

  );
}

export default App;
