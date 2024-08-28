import './Workers.css';
import AddButton from '../AddButton/AddButton';
import RemoveButton from '../RemoveButton/RemoveButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import workersSlice from '../../redux/workersSlice';

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
        {workers.map((worker, key) => (
          <Worker worker={worker} key={key} />
        ))}
      </div>
      <AddButton onClick={() => addWorker()} />
    </>
  );
}

function Worker({ worker }) {
  const { id, name, days } = worker;

  const dispatch = useDispatch();

  const { removeWorker, setWorkerName, setWorkerDay } = {
    removeWorker: (id) => dispatch(workersSlice.actions.removeWorker(id)),
    setWorkerName: ({ id, value }) =>
      dispatch(workersSlice.actions.setWorkerName({ id, value })),
    setWorkerDay: ({ id, value }) =>
      dispatch(workersSlice.actions.setWorkerDay({ id, value })),
  };

  const onNameChange = (evt) => {
    const { id, value } = evt.target;
    setWorkerName({ id, value });
  };

  const onDayChange = (evt) => {
    const { id, value } = evt.target;
    setWorkerDay({ id, value });
  };

  const onDelete = () => {
    removeWorker(id);
  };

  return (
    <>
      <div className='worker__title'>
        <textarea
          value={name || ''}
          onChange={onNameChange}
          className='worker__name'
          id={id + '_name'}
        />
        <RemoveButton onClick={onDelete} />
      </div>
      {days.morning.map((text, key) => (
        <textarea
          value={text}
          onChange={onDayChange}
          dir='rtl'
          key={key}
          className='worker__textarea morning'
          id={id + '_morning_' + key}
        />
      ))}
      {days.night.map((text, key) => (
        <textarea
          value={text}
          onChange={onDayChange}
          dir='rtl'
          key={key}
          className='worker__textarea night'
          id={id + '_night_' + key}
        />
      ))}
    </>
  );
}
