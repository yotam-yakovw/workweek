import './Location.css';

export default function Location() {
  return (
    <>
      <p>location</p>
      {Array.from({ length: 7 }).map((element, key) => (
        <textarea dir='rtl' key={key} className='location-text' />
      ))}
    </>
  );
}
