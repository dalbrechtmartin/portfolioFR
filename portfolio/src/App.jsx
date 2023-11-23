import { BrowserRouter } from 'react-router-dom';
import {
  About, Contact, Experience, Hero,
  Navbar, Tech, Works, StarsCanvas
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      {/* CONTAINER */}
      <div id='container' className='relative z-0 bg-primary'>
        
        {/* NAVBAR CONTAINER */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />

        {/* CONTACT CONTAINER */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>

      </div>
      {/* END OF CONTAINER */}
    </BrowserRouter>
  )
}

export default App;
