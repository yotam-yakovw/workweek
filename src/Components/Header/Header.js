import './Header.css';

export default function Header() {
  const onDateChange = (evt) => {
    const day = new Date(evt.target.value);
    console.log(day.getDay());
  };

  return (
    <header className='header'>
      <h1 href='/header' className='header__title'>
        Header
      </h1>
      <input type='date' onChange={onDateChange} className='header__date' />
      <h3 className='header__icon'>ICO</h3>
    </header>
  );
}
