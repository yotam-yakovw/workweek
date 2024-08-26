import './Worker.css';

export default function Worker() {
  return (
    <>
      <p className='worker-name'>שם עובד</p>
      {Array.from({ length: 5 }).map((element, key) => (
        <textarea dir='rtl' key={key} className='textarea morning' />
      ))}
      {Array.from({ length: 5 }).map((element, key) => (
        <textarea dir='rtl' key={key} className='textarea night' />
      ))}
    </>
  );
}
