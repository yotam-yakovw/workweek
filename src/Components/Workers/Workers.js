import './Workers.css';
import AddButton from '../AddButton/AddButton';
import workersSlice from '../../redux/workersSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Workers() {
  const dispatch = useDispatch();

  const addWorker = () => dispatch(workersSlice.actions.addWorker());

  const workers = useSelector((state) => state.workers.value);
  return (
    <>
      <div className='workers'>
        <div className='day'>ראשון</div>
        <div className='day'>שני</div>
        <div className='day'>שלישי</div>
        <div className='day'>רביעי</div>
        <div className='day'>חמישי</div>
        <div className='day placeholder' />
        {Array.from({ length: workers }).map((w, key) => (
          <Worker key={key} />
        ))}
      </div>
      <AddButton onClick={addWorker} />
    </>
  );
}

function Worker() {
  return (
    <>
      <textarea className='worker-name' />
      {Array.from({ length: 5 }).map((element, key) => (
        <textarea dir='rtl' key={key} className='textarea morning' />
      ))}
      {Array.from({ length: 5 }).map((element, key) => (
        <textarea dir='rtl' key={key} className='textarea night' />
      ))}
    </>
  );
}
