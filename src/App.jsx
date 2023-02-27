
import './App';
import './index';
import { Header } from '../src/pages/Header/Header';
import { About } from '../src/pages/About/About';
import { Skills } from '../src/pages/Skills/Skills';
import { Projects } from '../src/pages/Projects/Projects';
import { Contacts } from './pages/Contacts/Contacts';
import { Footer } from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
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
