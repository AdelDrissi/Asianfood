// import Header from './components/Header';
import MainContent from './components/MainContent';
import InfoCuisine from './components/InfoCuisine';
import Loader from './components/Loader';
import Header from './components/Header';
import Lunch from './components/Lunch';
import Reception from './components/Reception';
import Végés from './components/Végés';
import Dessert from './components/Dessert';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <InfoCuisine />
      <Loader />
      <Lunch />
      <Reception />
      <Végés />
      <Dessert />
      <Contact />
    </div>
  );
}

export default App;
