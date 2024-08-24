import './Worker.css';

export default function Worker() {
  return (
    <>
      {Array.from({ length: 5 }).map((element, key) => (
        <textarea
          type='textarea'
          dir='rtl'
          key={key}
          className='textarea morning'
        />
      ))}
      <p className='worker-name'>Worker name</p>
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
