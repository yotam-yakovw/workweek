import './RemoveButton.css';

export default function RemoveButton({ onClick }) {
  return (
    <button onClick={onClick} className='remove-button'>
      ×
    </button>
  );
}
