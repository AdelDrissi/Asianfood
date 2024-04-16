import Header from './components/Header';
import MainContent from './components/MainContent';
import InfoCuisine from './components/InfoCuisine';
import Loader from './components/Loader';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <InfoCuisine />
      <Loader />
    </div>
  );
}

export default App;
