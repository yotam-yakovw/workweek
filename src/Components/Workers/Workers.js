import './Workers.css';
import AddButton from '../AddButton/AddButton';
// import workersSlice from '../../redux/workersSlice';
// import { useDispatch } from 'react-redux';
import { workers as workersDB } from '../../temp/database';

export default function Workers() {
  // const dispatch = useDispatch();

  // const addWorker = () => dispatch(workersSlice.actions.addWorker());

  return (
    <>
      <div className='workers'>
        <div className='day'>ראשון</div>
        <div className='day'>שני</div>
        <div className='day'>שלישי</div>
        <div className='day'>רביעי</div>
        <div className='day'>חמישי</div>
        <div className='day placeholder' />
        {workersDB.map((worker, key) => (
          <Worker worker={worker} key={key} />
        ))}
      </div>
      <AddButton onClick={() => console.log('clicked')} />
    </>
  );
}

function Worker({ worker }) {
  return (
    <>
      <textarea defaultValue={worker.name} className='worker-name' />
      {worker.days.mor.map((text, key) => (
        <textarea
          defaultValue={text}
          dir='rtl'
          key={key}
          className='textarea morning'
        />
      ))}
      {worker.days.ngt.map((text, key) => (
        <textarea
          defaultValue={text}
          dir='rtl'
          key={key}
          className='textarea night'
        />
      ))}
    </>
  );
}
