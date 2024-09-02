import './Notes.css';
import AddButton from '../AddButton/AddButton';
import RemoveButton from '../RemoveButton/RemoveButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import notesSlice from '../../redux/notesSlice';
import reactTextareaAutosize from 'react-textarea-autosize';
import ReactTextareaAutosize from 'react-textarea-autosize';

export default function Notes() {
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes.value);
  const isEdit = useSelector((state) => state.site.isEdit);

  const addNote = () => dispatch(notesSlice.actions.addNote());

  return (
    <div className='notes'>
      <p className='notes__title'>הערות</p>
      {notes.map((note, key) => (
        <Note note={note} key={key} />
      ))}
      {isEdit && <AddButton onClick={addNote} />}
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

  const isEdit = useSelector((state) => state.site.isEdit);

  const onTextChange = (evt) => {
    const { id, value } = evt.target;
    setNote({ id, value });
  };

  const onDelete = () => {
    removeNote(id);
  };

  return (
    <div className='note'>
      {isEdit ? (
        <RemoveButton onClick={onDelete} />
      ) : (
        <p className='note__dot'>•</p>
      )}
      <ReactTextareaAutosize
        disabled={!isEdit}
        maxRows={5}
        value={text}
        onChange={onTextChange}
        className={`note__input ${isEdit && 'note__input_edit'}`}
        id={id + '_note'}
      />
    </div>
  );
}
