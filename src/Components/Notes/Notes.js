import './Notes.css';
import AddButton from '../AddButton/AddButton';
import RemoveButton from '../RemoveButton/RemoveButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import notesSlice from '../../redux/notesSlice';

export default function Notes() {
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes.value);

  const addNote = () => dispatch(notesSlice.actions.addNote());

  return (
    <div className='notes'>
      <p className='notes__title'>הערות</p>
      {notes.map((note, key) => (
        <Note note={note} key={key} />
      ))}
      <AddButton onClick={addNote} />
    </div>
  );
}

function Note({ note }) {
  const { id, text } = note;

  const dispatch = useDispatch();

  const { removeNote, setNote } = {
    removeNote: (id) => dispatch(notesSlice.actions.removeNote(id)),
    setNote: ({ id, value }) =>
      dispatch(notesSlice.actions.setNote({ id, value })),
  };

  const onTextChange = (evt) => {
    const { id, value } = evt.target;
    setNote({ id, value });
  };

  const onDelete = () => {
    removeNote(id);
  };

  return (
    <div className='note'>
      <p className='note__dot'>•</p>
      <input
        type='text'
        value={text}
        onChange={onTextChange}
        className='note__input'
        id={id + '_note'}
      />
      <RemoveButton onClick={onDelete} />
    </div>
  );
}
