import './UserForm.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Cookies from 'js-cookie';
import siteSlice from '../../redux/siteSlice';
import inputSlice from '../../redux/inputSlice';
import { signIn } from '../../utils/api';

export default function UserForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const isOpen = useSelector((state) => state.site.isForm);
  const { email, password } = useSelector((state) => state.input);

  const setUser = (user) => dispatch(siteSlice.actions.setUser(user));
  const updateValue = (values) =>
    dispatch(inputSlice.actions.updateValue(values));

  const onSignIn = (evt) => {
    evt.preventDefault();
    console.log('default prevented?');
    signIn({ email, password })
      .then(({ userHash, token }) => {
        setUser(userHash);
        Cookies.set('token', token);
        window.location.reload();
      })
      .catch((err) => setError(err.data));
  };

  const onValueChange = (evt) => {
    const { id, value } = evt.target;
    updateValue({
      id,
      value,
    });
  };

  return (
    <form
      onSubmit={onSignIn}
      className={`user-form ${isOpen ? 'user-form_open' : ''}`}
    >
      <input
        required
        type='email'
        value={email || ''}
        onChange={onValueChange}
        placeholder='email'
        id='email'
        className='user-form__input'
      />
      <input
        required
        type='password'
        minLength='8'
        value={password || ''}
        onChange={onValueChange}
        placeholder='password'
        id='password'
        className='user-form__input'
      />
      <button type='submit' className='user-form__submit'>
        התחבר
      </button>
      <p
        className={`user-form__error ${error ? 'user-form__error_active' : ''}`}
      >
        {error}
      </p>
    </form>
  );
}
