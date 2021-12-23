
import './App.css';
import Landing from './components/Landing/Landing';
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer';
import RealEstate from './components/RealEstate/RealEstate';
function App() {
  return (
    <div className="App">
      <Landing/>
      <Portfolio/>
      <RealEstate/>
      <Footer/>
    </div>
  );
}

export default App;
