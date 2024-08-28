import './Workers.css';
import AddButton from '../AddButton/AddButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import workplaceSlice from '../../redux/workplaceSlice';

export default function Workers() {
  const dispatch = useDispatch();

  const addWorker = () => dispatch(workplaceSlice.actions.addWorker());

  const workplace = useSelector((state) => state.workplace);

  return (
    <>
      <div className='workers'>
        <div className='day'>ראשון</div>
        <div className='day'>שני</div>
        <div className='day'>שלישי</div>
        <div className='day'>רביעי</div>
        <div className='day'>חמישי</div>
        <div className='day placeholder' />
        {workplace.workers.map((worker, key) => (
          <Worker worker={worker} key={key} />
        ))}
      </div>
      <AddButton onClick={() => addWorker()} />
    </>
  );
}

function Worker({ worker }) {
  const dispatch = useDispatch();
  const workplace = useSelector((state) => state.workplace);

  const { id, name, days } = worker;

  const onNameChange = (evt) => {
    console.log(evt.target.id);
  };

  const onDelete = () => {
    console.log(id);
    dispatch(workplaceSlice.actions.removeWorker(id));
    console.log(workplace);
  };

  return (
    <>
      <div className='worker__title'>
        <textarea
          defaultValue={name}
          onChange={onNameChange}
          className='worker__name'
          id={id + '_name'}
        />
        <button onClick={onDelete} className='worker__delete'>
          ×
        </button>
      </div>
      {days.morning.map((text, key) => (
        <textarea
          defaultValue={text}
          onChange={onNameChange}
          dir='rtl'
          key={key}
          className='worker__textarea morning'
          id={id + '_morning' + key}
        />
      ))}
      {days.night.map((text, key) => (
        <textarea
          defaultValue={text}
          onChange={onNameChange}
          dir='rtl'
          key={key}
          className='worker__textarea night'
          id={id + '_night' + key}
        />
      ))}
    </>
  );
}
