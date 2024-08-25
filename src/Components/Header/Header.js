import './Header.css';

export default function Header() {
  const onDateChange = (evt) => {
    const day = new Date(evt.target.value);
    console.log(day.getDay());
  };
  return (
    <header className='header'>
      <input type='date' onChange={onDateChange} className='date' />
      <h1 href='/header' className='title'>
        Header
      </h1>
      <h3 className='icon'>ICO</h3>
    </header>
  );
}
