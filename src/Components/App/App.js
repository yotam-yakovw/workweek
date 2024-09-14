import './App.css';
import Header from '../Header/Header';
import Workers from '../Workers/Workers';
import Locations from '../Locations/Locations';
import Notes from '../Notes/Notes';
import Cookies from 'js-cookie';
import { getAllData } from '../../utils/api';
import { useDispatch } from 'react-redux';
import siteSlice from '../../redux/siteSlice';
import workersSlice from '../../redux/workersSlice';
import locationsSlice from '../../redux/locationsSlice';
import notesSlice from '../../redux/notesSlice';

function App() {
  const dispatch = useDispatch();

  const token = Cookies.get('token');

  const { setUser, setWorkers, setLocations, setNotes } = {
    setUser: (user) => dispatch(siteSlice.actions.setUser(user)),
    setWorkers: (workers) => dispatch(workersSlice.actions.setWorkers(workers)),
    setLocations: (locations) =>
      dispatch(locationsSlice.actions.setLocations(locations)),
    setNotes: (notes) => dispatch(notesSlice.actions.setNotes(notes)),
  };

  if (token) {
    getAllData(token)
      .then(({ user, workplace }) => {
        setUser(user);
        setWorkers(workplace.workers);
        setLocations(workplace.locations);
        setNotes(workplace.notes);
      })
      .catch((err) => console.log(err));
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
