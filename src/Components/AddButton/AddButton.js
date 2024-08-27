import './AddButton.css';

export default function AddButton(props) {
  return (
    <button onClick={props.onClick} className='button'>
      הוסף +
    </button>
  );
}
