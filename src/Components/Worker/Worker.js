import './Worker.css';

export default function Worker() {
  return (
    <>
      <p className='worker-name'>Worker name</p>
      {Array.from({ length: 5 }).map((element, key) => (
        <textarea
          type='textarea'
          dir='rtl'
          key={key}
          className='textarea morning'
        />
      ))}
      {Array.from({ length: 5 }).map((element, key) => (
        <textarea
          type='textarea'
          dir='rtl'
          key={key}
          className='textarea night'
        />
      ))}
    </>
  );
}
