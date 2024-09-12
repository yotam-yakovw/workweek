import './App.css';
import Header from '../Header/Header';
import Workers from '../Workers/Workers';
import Locations from '../Locations/Locations';
import Notes from '../Notes/Notes';
import Cookies from 'js-cookie';
import { getUser } from '../../api/api';
import { useDispatch } from 'react-redux';
import siteSlice from '../../redux/siteSlice';

function App() {
  const dispatch = useDispatch();

  const setUser = (user) => dispatch(siteSlice.actions.setUser(user));

  if (Cookies.get('token')) {
    getUser()
      .then((user) => setUser(user))
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
