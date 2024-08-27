import './Workers.css';
import AddButton from '../AddButton/AddButton';
import dataEntry from '../../temp/database';

export default function Workers() {
  return (
    <>
      <div className='workers'>
        <div className='day'>ראשון</div>
        <div className='day'>שני</div>
        <div className='day'>שלישי</div>
        <div className='day'>רביעי</div>
        <div className='day'>חמישי</div>
        <div className='day placeholder' />
        {dataEntry.workers.map((worker, key) => (
          <Worker worker={worker} key={key} />
        ))}
      </div>
      <AddButton onClick={() => console.log('click')} />
    </>
  );
}

function Worker({ worker }) {
  const { id, name, days } = worker;
  const onChange = (evt) => {
    console.log(evt.target.id);
  };

  return (
    <>
      <textarea
        defaultValue={name}
        onChange={onChange}
        className='worker-name'
        id={id + '_name'}
      />
      {days.morning.map((text, key) => (
        <textarea
          defaultValue={text}
          onChange={onChange}
          dir='rtl'
          key={key}
          className='textarea morning'
          id={id + '_morning' + key}
        />
      ))}
      {days.night.map((text, key) => (
        <textarea
          defaultValue={text}
          onChange={onChange}
          dir='rtl'
          key={key}
          className='textarea night'
          id={id + '_night' + key}
        />
      ))}
    </>
  );
}
