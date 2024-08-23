import './Workers.css';
import { useState } from 'react';

export default function Workers() {
  const [workers, setWorkers] = useState(0);

  const addWorker = () => setWorkers(workers + 1);
  const subtractWorker = () => {
    if (workers != 0) {
      setWorkers(workers - 1);
    }
  };

  return (
    <div className='workers'>
      <div className='days'>
        <div className='day'>ראשון</div>
        <div className='day'>שני</div>
        <div className='day'>שלישי</div>
        <div className='day'>רביעי</div>
        <div className='day'>חמישי</div>
      </div>
      <div className='names'>
        {Array.from({ length: workers }).map((w, key) => (
          <div key={key}>worker {key + 1}</div>
        ))}
      </div>
      <button onClick={addWorker} className='button'>
        +
      </button>
      <button onClick={subtractWorker} className='button'>
        -
      </button>
    </div>
  );
}
