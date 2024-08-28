import './Locations.css';
import AddButton from '../AddButton/AddButton';
import locationsSlice from '../../redux/locationsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import RemoveButton from '../RemoveButton/RemoveButton';

export default function Locations() {
  const dispatch = useDispatch();

  const locations = useSelector((state) => state.locations.value);

  const addLocation = () => {
    dispatch(locationsSlice.actions.addLocation());
    console.log(locations);
  };

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
        {locations.map((location, key) => (
          <Location location={location} key={key} />
        ))}
      </div>
      <AddButton onClick={addLocation} />
    </>
  );
}

function Location({ location }) {
  const { id, name, days } = location;

  const locations = useSelector((state) => state.locations.value);

  const dispatch = useDispatch();

  const { removeLocation, setLocationName, setLocationDay } = {
    removeLocation: (id) => dispatch(locationsSlice.actions.removeLocation(id)),
    setLocationName: ({ id, value }) =>
      dispatch(locationsSlice.actions.setLocationName({ id, value })),
    setLocationDay: ({ id, value }) =>
      dispatch(locationsSlice.actions.setLocationDay({ id, value })),
  };

  const onNameChange = (evt) => {
    const { id, value } = evt.target;
    setLocationName({ id, value });
  };

  const onDayChange = (evt) => {
    const { id, value } = evt.target;
    setLocationDay({ id, value });
  };

  const onDelete = () => {
    removeLocation(id);
    console.log(locations);
  };

  return (
    <>
      <div className='location__title'>
        <RemoveButton onClick={onDelete} />
        <textarea
          value={name}
          onChange={onNameChange}
          className='location__textarea location__textarea_name'
          id={id + '_name'}
        />
      </div>
      {days.map((day, key) => (
        <textarea
          value={day}
          onChange={onDayChange}
          dir='rtl'
          key={key}
          className='location__textarea'
          id={id + '_' + key}
        />
      ))}
    </>
  );
}
