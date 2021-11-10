import "./App.css";
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Header">
        <Header />
        <About />
        <Contact />
        <Footer />
        <div className="FooterEnd">
          <div className="FooterLink">
            Powered by
            <button style={{ 
              background: '#000',
              marginLeft: 5,
              paddingTop: 24,
              paddingBottom: 11,
              }}>w3.css</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
