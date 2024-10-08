import './Header.css';
import { Fragment } from 'react';
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

  const { switchEdit, selectForm } = {
    switchEdit: () => dispatch(siteSlice.actions.switchEdit()),
    selectForm: (form) => dispatch(siteSlice.actions.selectForm(form)),
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

  const selectSignin = () => {
    if (site.selectedForm !== 'signin') {
      selectForm('signin');
    } else {
      selectForm('');
    }
  };

  const selectSignup = () => {
    if (site.selectedForm !== 'signup') {
      selectForm('signup');
    } else {
      selectForm('');
    }
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

  const onCancelClick = () => {
    switchEdit();
    window.location.reload();
  };

  return (
    <header className='header'>
      <h1 href='/header' className='header__title'>
        WorkWeek
      </h1>

      {site.user.email ? (
        <Fragment>
          <p className='header__workplace'>{site.user.workplace}</p>
          <div className='header__buttons'>
            {site.isEdit && (
              <button
                onClick={onCancelClick}
                className='header__button header__button_active header__button_cancel'
              >
                בטל
              </button>
            )}
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
        </Fragment>
      ) : (
        <Fragment>
          <div className='header__buttons'>
            <button
              onClick={selectSignin}
              className={`header__button ${
                site.selectedForm === 'signin' && 'header__button_active'
              }`}
            >
              התחבר
            </button>
            <button
              onClick={selectSignup}
              className={`header__button ${
                site.selectedForm === 'signup' && 'header__button_active'
              }`}
            >
              הרשמה
            </button>
          </div>
          {<UserForm />}
        </Fragment>
      )}
    </header>
  );
}
