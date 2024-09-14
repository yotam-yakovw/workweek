import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import UserForm from '../UserForm/UserForm';
import siteSlice from '../../redux/siteSlice';
import workersSlice from '../../redux/workersSlice';
import locationsSlice from '../../redux/locationsSlice';
import notesSlice from '../../redux/notesSlice';
import { editWorkplace } from '../../utils/api';

export default function Header() {
  const dispatch = useDispatch();

  const { switchEdit, switchForm } = {
    switchEdit: () => dispatch(siteSlice.actions.switchEdit()),
    switchForm: () => dispatch(siteSlice.actions.switchForm()),
  };

  const { clearUser, clearWorkers, clearLocations, clearNotes } = {
    clearUser: () => dispatch(siteSlice.actions.clearUser()),
    clearWorkers: () => dispatch(workersSlice.actions.clearWorkers()),
    clearLocations: () => dispatch(locationsSlice.actions.clearLocations()),
    clearNotes: () => dispatch(notesSlice.actions.clearNotes()),
  };

  const { site, workers, locations, notes } = {
    site: useSelector((state) => state.site),
    workers: useSelector((state) => state.workers.value),
    locations: useSelector((state) => state.locations.value),
    notes: useSelector((state) => state.notes.value),
  };

  const onSignOut = () => {
    Cookies.remove('token');
    clearUser();
    clearWorkers();
    clearLocations();
    clearNotes();
  };

  const onEditClick = () => {
    if (site.isEdit) {
      editWorkplace({ workers, locations, notes });
    }
    switchEdit();
  };

  return (
    <header className='header'>
      <h1 href='/header' className='header__title'>
        Header
      </h1>

      {site.user.email ? (
        <>
          <p className='header__workplace'>{site.user.workplace}</p>
          <div className='header__buttons'>
            {site.user.isAdmin && (
              <button
                onClick={onEditClick}
                className={`header__button ${
                  site.isEdit && 'header__button_active'
                }`}
              >
                {site.isEdit ? 'שמור' : 'עריכה'}
              </button>
            )}
            <button onClick={onSignOut} className='header__button'>
              התנתק
            </button>
          </div>
        </>
      ) : (
        <>
          <div className='header__buttons'>
            <button
              onClick={switchForm}
              className={`header__button ${
                site.isForm && 'header__button_active'
              }`}
            >
              התחבר
            </button>
          </div>
          {<UserForm />}
        </>
      )}
    </header>
  );
}
