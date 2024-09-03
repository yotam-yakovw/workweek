import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import siteSlice from '../../redux/siteSlice';

export default function Header() {
  const dispatch = useDispatch();

  const switchEdit = () => dispatch(siteSlice.actions.switchEdit());

  const site = useSelector((state) => state.site);

  const onSignIn = () => {};

  const onSignOut = () => {};

  return (
    <header className='header'>
      <h1 href='/header' className='header__title'>
        Header
      </h1>

      {site.user.username ? (
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
                {site.isEdit ? 'Save' : 'Edit'}
              </button>
            )}
            <button onClick={onSignOut} className='header__button'>
              Sign Out
            </button>
          </div>
        </>
      ) : (
        <div className='header__buttons'>
          <button onClick={onSignIn} className='header__button'>
            Sign In
          </button>
        </div>
      )}

      {/* <p>{date}</p> */}
      {/* <input
        type='date'
        value={date}
        onChange={onDateChange}
        className='header__date'
      /> */}
    </header>
  );
}
