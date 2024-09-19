import './Workers.css';
import { Fragment } from 'react';
import AddButton from '../AddButton/AddButton';
import RemoveButton from '../RemoveButton/RemoveButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import workersSlice from '../../redux/workersSlice';
import { useState } from 'react';

export default function Workers() {
  const [selectedWorker, setSelectedWorker] = useState({});
  const weekdays = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי'];

  const dispatch = useDispatch();

  const addWorker = () => dispatch(workersSlice.actions.addWorker());

  const workers = useSelector((state) => state.workers.value);
  const isEdit = useSelector((state) => state.site.isEdit);

  const clearSelection = () => {
    setSelectedWorker({});
  };

  return (
    <Fragment>
      <div className={`workers ${selectedWorker.name && 'workers_single'}`}>
        {selectedWorker.name ? (
          <Fragment>
            <RemoveButton onClick={clearSelection} />
            <p className='workers_single__name'>{selectedWorker.name}</p>
            <div className='workers_single__days'>
              {weekdays.map((day, index) => (
                <div className='workers_single__day' key={index}>
                  <p className='workers_single__text'>{day}</p>
                  <p className='workers_single__text'>
                    {selectedWorker.days.morning[index]}
                  </p>
                  <p className='workers_single__text'>
                    {selectedWorker.days.night[index]}
                  </p>
                </div>
              ))}
            </div>
          </Fragment>
        ) : (
          <Fragment>
            {weekdays.map((day, key) => (
              <div className='day' key={key}>
                {day}
              </div>
            ))}
            <div className='day placeholder' />
            {workers.map((worker, key) => (
              <Worker
                worker={worker}
                key={key}
                selectWorker={setSelectedWorker}
              />
            ))}
          </Fragment>
        )}
      </div>
      {isEdit && <AddButton onClick={() => addWorker()} />}
    </Fragment>
  );
}

function Worker({ worker, selectWorker }) {
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

  const onWorkerSelect = () => {
    selectWorker(worker);
  };

  return (
    <Fragment>
      <div className='worker__title'>
        <textarea
          readOnly={!isEdit}
          onClick={isEdit ? undefined : onWorkerSelect}
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
    </Fragment>
  );
}
