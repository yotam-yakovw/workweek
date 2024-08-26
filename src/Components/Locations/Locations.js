import './Locations.css';
import Location from '../Location/Location';
import AddButton from '../AddButton/AddButton';
import locationsSlice from '../../redux/locationsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Locations() {
  const dispatch = useDispatch();

  const addLocation = () => dispatch(locationsSlice.actions.addLocation());

  const locations = useSelector((state) => state.locations.value);

  return (
    <div className='locations'>
      <p className='top-line'>אתר</p>
      <p className='top-line'>א</p>
      <p className='top-line'>ב</p>
      <p className='top-line'>ג</p>
      <p className='top-line'>ד</p>
      <p className='top-line'>ה</p>
      <p className='top-line'>ו</p>
      <p className='top-line'>ש</p>
      {Array.from({ length: locations }).map((element, key) => (
        <Location key={key} />
      ))}
      <AddButton onClick={addLocation} />
    </div>
  );
}
