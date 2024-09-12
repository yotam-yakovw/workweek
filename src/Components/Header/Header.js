import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import siteSlice from '../../redux/siteSlice';
import UserForm from '../UserForm/UserForm';
import workersSlice from '../../redux/workersSlice';
import locationsSlice from '../../redux/locationsSlice';
import notesSlice from '../../redux/notesSlice';

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

  const site = useSelector((state) => state.site);

  const onSignIn = () => {
    switchForm();
  };

  const onSignOut = () => {
    Cookies.remove('token');
    clearUser();
    clearWorkers();
    clearLocations();
    clearNotes();
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
                onClick={switchEdit}
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
              onClick={onSignIn}
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
