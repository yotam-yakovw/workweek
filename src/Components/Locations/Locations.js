import './Locations.css';
import { Fragment } from 'react';
import AddButton from '../AddButton/AddButton';
import locationsSlice from '../../redux/locationsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import RemoveButton from '../RemoveButton/RemoveButton';

export default function Locations() {
  const dispatch = useDispatch();

  const locations = useSelector((state) => state.locations.value);
  const isEdit = useSelector((state) => state.site.isEdit);

  const addLocation = () => dispatch(locationsSlice.actions.addLocation());

  return (
    <Fragment>
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
      {isEdit && <AddButton onClick={addLocation} />}
    </Fragment>
  );
}

function Location({ location }) {
  const { id, name, days } = location;

  const dispatch = useDispatch();

  const { removeLocation, setLocationName, setLocationDay } = {
    removeLocation: (id) => dispatch(locationsSlice.actions.removeLocation(id)),
    setLocationName: ({ id, value }) =>
      dispatch(locationsSlice.actions.setLocationName({ id, value })),
    setLocationDay: ({ id, value }) =>
      dispatch(locationsSlice.actions.setLocationDay({ id, value })),
  };

  const isEdit = useSelector((state) => state.site.isEdit);

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
  };

  return (
    <Fragment>
      <div className='location__title'>
        {isEdit && <RemoveButton onClick={onDelete} />}
        <textarea
          disabled={!isEdit}
          value={name}
          onChange={onNameChange}
          className={`location__textarea location__textarea_name ${
            isEdit && 'location__textarea_edit'
          }`}
          id={id + '_name'}
        />
      </div>
      {days.map((day, key) => (
        <textarea
          disabled={!isEdit}
          value={day}
          onChange={onDayChange}
          dir='rtl'
          key={key}
          className={`location__textarea ${
            isEdit && 'location__textarea_edit'
          }`}
          id={id + '_' + key}
        />
      ))}
    </Fragment>
  );
}
