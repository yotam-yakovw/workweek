import './Notes.css';
import AddButton from '../AddButton/AddButton';
import { useState } from 'react';

export default function Notes() {
  // const [notes, setNotes] = useState(0);
  const [altNotes, setAltNotes] = useState(['text', 'note', 'letter']);

  const addNote = () => setAltNotes([...altNotes, '']);

  return (
    <div className='notes'>
      <p className='notes__title'>הערות</p>
      {altNotes.map((text, key) => (
        <Note text={text} notes={altNotes} setNotes={setAltNotes} key={key} />
      ))}
      <AddButton onClick={addNote} />
    </div>
  );
}

function Note({ text, notes, setNotes }) {
  const [textValue, setTextValue] = useState(text);

  const onTextChange = (evt) => setTextValue(evt.target.value);

  const onDeleteClick = () => {
    setNotes([]);
    const newNotes = notes.filter((word) => word !== text);
    console.log(newNotes);
    setNotes([newNotes]);
  };

  return (
    <div className='note'>
      <p className='note__dot'>•</p>
      <input
        type='text'
        value={textValue || ''}
        onChange={onTextChange}
        className='note__input'
      />
      <p onClick={onDeleteClick} className='note__delete'>
        ×
      </p>
    </div>
  );
}
