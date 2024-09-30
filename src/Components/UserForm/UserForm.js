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
  const selectedForm = useSelector((state) => state.site.selectedForm);
  const { email, password, workplace } = useSelector((state) => state.input);

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
      className={`user-form ${selectedForm ? 'user-form_open' : ''}`}
    >
      {selectedForm === 'signup' && (
        <p className='user-form__notice'>
          כדי למנוע משתמשים מיותרים ההרשמה עובדת כבקשה,
          <br />
          עסק שרוצה לפתוח משתמש ימלא פרטים והבקשה תטופל
          <br />
          <br />
          הרשמה מיודעת לעסק חדש ולא לעובדים,
          <br />
          עובדים יקבלו את הפרטים מהמעסיק
        </p>
      )}
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
      {selectedForm === 'signup' && (
        <input
          required
          type='text'
          value={workplace || ''}
          onChange={onValueChange}
          placeholder='workplace'
          id='workplace'
          className='user-form__input'
        />
      )}
      <button type='submit' className='user-form__submit'>
        {selectedForm === 'signup' ? 'שלח בקשה' : 'התחבר'}
      </button>
      <p
        className={`user-form__error ${error ? 'user-form__error_active' : ''}`}
      >
        {error}
      </p>
    </form>
  );
}
