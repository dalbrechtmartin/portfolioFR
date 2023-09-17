import { BrowserRouter } from 'react-router-dom';
import {
  About, Contact, Experience, Hero,
  Navbar, Tech, Works, StarsCanvas
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div id='container' className='relative z-0 bg-primary'>
        <div id='hero' className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div> {/* .hero */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <div id='contact' className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div> {/* .contact */}
      </div> {/* .container */}
    </BrowserRouter>
  )
}

export default App;
