import './UserForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import siteSlice from '../../redux/siteSlice';
import { signIn } from '../../api/api';

export default function UserForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const isOpen = useSelector((state) => state.site.isForm);

  const setUser = (user) => dispatch(siteSlice.actions.setUser(user));

  const onSignIn = () => {
    signIn()
      .then((data) => setUser(data.userHash))
      .catch((response) => setError(response.data));
  };

  return (
    <div className={`user-form ${isOpen ? 'user-form_open' : ''}`}>
      <input placeholder='email' className='user-form__input' />
      <input placeholder='password' className='user-form__input' />
      <button onClick={onSignIn} className='user-form__submit'>
        התחבר
      </button>
      <p
        className={`user-form__error ${error ? 'user-form__error_active' : ''}`}
      >
        {error}
      </p>
    </div>
  );
}
