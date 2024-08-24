import './Workers.css';
import { useState } from 'react';
import Worker from '../Worker/Worker';

export default function Workers() {
  const [workers, setWorkers] = useState(0);

  const addWorker = () => setWorkers(workers + 1);

  return (
    <div className='workers'>
      <div className='day'>חמישי</div>
      <div className='day'>רביעי</div>
      <div className='day'>שלישי</div>
      <div className='day'>שני</div>
      <div className='day'>ראשון</div>
      <div className='day placeholder' />
      {Array.from({ length: workers }).map((w, key) => (
        <Worker />
      ))}
      <button onClick={addWorker} className='button'>
        +
      </button>
    </div>
  );
}
