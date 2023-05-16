import './App.css';
import HomePage from './components/HomePage';
import Services from './components/Services';
import ContactPage from './components/ContactPage';
import PricingPage from './components/PricingPage';
import FooterPage from './components/FooterPage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Services />
      <PricingPage />
      <ContactPage />
      <FooterPage />
    </div>
  );
}

export default App;
