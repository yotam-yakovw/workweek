import './App.css';
import Header from '../Header/Header';
import Workers from '../Workers/Workers';
import Locations from '../Locations/Locations';
import Notes from '../Notes/Notes';
import { useSelector } from 'react-redux';

function App() {
  const { workers, locations, notes } = {
    workers: useSelector((state) => state.workers.value),
    locations: useSelector((state) => state.locations.value),
    notes: useSelector((state) => state.notes.value),
  };

  const buttonClick = () => {
    console.log(workers, locations, notes);
  };

  return (
    <div className='App'>
      <Header />
      <button onClick={buttonClick} />
      <Workers />
      <Locations />
      <Notes />
    </div>
  );
}

export default App;
