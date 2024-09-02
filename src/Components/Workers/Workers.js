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
  const isEdit = useSelector((state) => state.site.isEdit);

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
      {isEdit && <AddButton onClick={() => addWorker()} />}
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

  const isEdit = useSelector((state) => state.site.isEdit);

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
          disabled={!isEdit}
          value={name || ''}
          onChange={onNameChange}
          className={`worker__name ${isEdit && 'worker__name_edit'}`}
          id={id + '_name'}
        />
        {isEdit && <RemoveButton onClick={onDelete} />}
      </div>
      {days.morning.map((text, key) => (
        <textarea
          disabled={!isEdit}
          value={text}
          onChange={onDayChange}
          dir='rtl'
          key={key}
          className={`worker__textarea morning ${
            isEdit && 'worker__textarea_edit'
          }`}
          id={id + '_morning_' + key}
        />
      ))}
      {days.night.map((text, key) => (
        <textarea
          disabled={!isEdit}
          value={text}
          onChange={onDayChange}
          dir='rtl'
          key={key}
          className={`worker__textarea night ${
            isEdit && 'worker__textarea_edit'
          }`}
          id={id + '_night_' + key}
        />
      ))}
    </>
  );
}
