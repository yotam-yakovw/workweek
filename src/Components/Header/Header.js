import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import siteSlice from '../../redux/siteSlice';

export default function Header() {
  const dispatch = useDispatch();

  const switchEdit = () => dispatch(siteSlice.actions.switchEdit());

  const { workers, locations, notes, site } = {
    workers: useSelector((state) => state.workers.value),
    locations: useSelector((state) => state.locations.value),
    notes: useSelector((state) => state.notes.value),
    site: useSelector((state) => state.site),
  };

  return (
    <header className='header'>
      <h1 href='/header' className='header__title'>
        Header
      </h1>
      <button
        onClick={switchEdit}
        className={`header__edit ${site.isEdit && 'header__edit_active'}`}
      >
        {site.isEdit ? 'Save' : 'Edit'}
      </button>
      {/* <p>{date}</p> */}
      {/* <input
        type='date'
        value={date}
        onChange={onDateChange}
        className='header__date'
      /> */}
      <h3 className='header__icon'>ICO</h3>
    </header>
  );
}
