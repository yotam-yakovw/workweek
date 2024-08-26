import './Location.css';

export default function Location() {
  return (
    <>
      <p>שם אתר</p>
      {Array.from({ length: 7 }).map((element, key) => (
        <textarea dir='rtl' key={key} className='location-text' />
      ))}
    </>
  );
}
