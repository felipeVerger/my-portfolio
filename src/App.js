import { About, Footer, Header, Skills, Testimonial, Work } from './pages/index';
import { Navbar } from './componets';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
