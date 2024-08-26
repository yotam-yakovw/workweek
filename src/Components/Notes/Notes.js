import './Notes.css';
import AddButton from '../AddButton/AddButton';
import { useState } from 'react';

export default function Notes() {
  const [notes, setNotes] = useState(0);

  const addNote = () => setNotes(notes + 1);

  return (
    <div className='notes'>
      <p className='title'>הערות</p>
      {Array.from({ length: notes }).map((element, key) => (
        <Note key={key} />
      ))}
      <AddButton onClick={addNote} />
    </div>
  );
}

function Note() {
  return (
    <div className='note'>
      <p className='note__dot'>•</p>
      <input type='text' className='note__input' />
      <p className='note__delete'>×</p>
    </div>
  );
}
