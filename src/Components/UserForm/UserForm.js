import { useSelector } from 'react-redux';
import './UserForm.css';

export default function UserForm() {
  const isForm = useSelector((state) => state.site.isForm);

  return (
    <div className={`user-form ${isForm ? 'user-form_open' : ''}`}>
      <input placeholder='email' className='user-form__input' />
      <input placeholder='password' className='user-form__input' />
      <button className='user-form__submit'>התחבר</button>
    </div>
  );
}
