import './App.css';
import Header from '../Header/Header';
import Workers from '../Workers/Workers';
import Locations from '../Locations/Locations';
import Notes from '../Notes/Notes';

function App() {
  return (
    <div className='App'>
      <Header />
      <Workers />
      <Locations />
      <Notes />
    </div>
  );
}

export default App;
