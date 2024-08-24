import './Locations.css';
import AddButton from '../AddButton/AddButton';

export default function Locations() {
  return (
    <div className='locations'>
      <p className='top-line'>אתר</p>
      <p className='top-line'>א</p>
      <p className='top-line'>ב</p>
      <p className='top-line'>ג</p>
      <p className='top-line'>ד</p>
      <p className='top-line'>ה</p>
      <p className='top-line'>ו</p>
      <p className='top-line'>ש</p>
      <AddButton onClick={() => console.log('click!')} />
    </div>
  );
}
