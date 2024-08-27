import './Locations.css';
import AddButton from '../AddButton/AddButton';
import locationsSlice from '../../redux/locationsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Locations() {
  const dispatch = useDispatch();

  const addLocation = () => dispatch(locationsSlice.actions.addLocation());

  const locations = useSelector((state) => state.locations.value);

  return (
    <>
      <div className='locations'>
        <p className='locations__title'>אתר</p>
        <p className='locations__title'>א</p>
        <p className='locations__title'>ב</p>
        <p className='locations__title'>ג</p>
        <p className='locations__title'>ד</p>
        <p className='locations__title'>ה</p>
        <p className='locations__title'>ו</p>
        <p className='locations__title'>ש</p>
        {Array.from({ length: locations }).map((element, key) => (
          <Location key={key} />
        ))}
      </div>
      <AddButton onClick={addLocation} />
    </>
  );
}

function Location() {
  return (
    <>
      <textarea className='location__textarea' />
      {Array.from({ length: 7 }).map((element, key) => (
        <textarea dir='rtl' key={key} className='location__textarea' />
      ))}
    </>
  );
}
