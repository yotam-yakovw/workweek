import './App.css';
import Header from '../Header/Header';
import Workers from '../Workers/Workers';
import Locations from '../Locations/Locations';
import Notes from '../Notes/Notes';
import Cookies from 'js-cookie';
import { getUser, getWorkplace } from '../../api/api';
import { useDispatch } from 'react-redux';
import siteSlice from '../../redux/siteSlice';
import workersSlice from '../../redux/workersSlice';
import locationsSlice from '../../redux/locationsSlice';
import notesSlice from '../../redux/notesSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  const { setUser, setWorkers, setLocations, setNotes } = {
    setUser: (user) => dispatch(siteSlice.actions.setUser(user)),
    setWorkers: (workers) => dispatch(workersSlice.actions.setWorkers(workers)),
    setLocations: (locations) =>
      dispatch(locationsSlice.actions.setLocations(locations)),
    setNotes: (notes) => dispatch(notesSlice.actions.setNotes(notes)),
  };

  if (Cookies.get('token')) {
    getUser()
      .then((user) => setUser(user))
      .catch((err) => console.log(err));
    getWorkplace().then(({ workers, locations, notes }) => {
      setWorkers(workers);
      setLocations(locations);
      setNotes(notes);
    });
  }

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
