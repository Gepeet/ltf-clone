
import './App.css';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import { SliderData } from './components/hero-banner/Dummydata';
import Hero from './components/hero-banner/Hero';
import IwantTfc from './components/iwant-tfc/IwantTfc';
// import { Route,Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import Pricing from './components/pricing/Pricing';
import StreamFeature from './components/stream-feature/StreamFeature';

function App() {
  return (

    <div className="App">
  
      <Navigation/>
      <Hero slides={SliderData} />
      <IwantTfc/>
      <Features/>
      <Pricing/>
      <StreamFeature/>
      <Footer/>
    </div>
  );
}

export default App;
