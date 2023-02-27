// import logo from './logo.svg';
import './App';
import './index';
// import { Navbar } from './components/Navbar/Navbar';
import { Header } from '../src/pages/Header/Header';
import { About } from '../src/pages/About/About';
import { Skills } from '../src/pages/Skills/Skills';
import { Projects } from '../src/pages/Projects/Projects';
import { Contacts } from './pages/Contacts/Contacts';
import { Footer } from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <Navbar /> */}
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />

    </div>
  );
}

export default App;
