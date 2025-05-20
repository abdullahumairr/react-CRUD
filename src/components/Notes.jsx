import { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

const Notes = ({ searchQuery }) => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (note) => {
    setNotes((prev) => [note, ...prev]);
  };

  const handleDeleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const handleArchiveNote = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  return (
    <>
      <NoteForm onAddNote={handleAddNote} />
      <section className="container mx-auto flex flex-col gap-16 mt-16">
        <NoteList
          notes={activeNotes}
          title="Active"
          onDelete={handleDeleteNote}
          onArchive={handleArchiveNote}
        />
        <NoteList
          notes={archivedNotes}
          title="Archive"
          onDelete={handleDeleteNote}
          onArchive={handleArchiveNote}
        />
      </section>
    </>
  );
};

export default Notes;
