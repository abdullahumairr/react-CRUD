import NoteItem from './NoteItem';
import { FileText, Archive as ArchiveIcon, StickyNote } from 'lucide-react';

const NoteList = ({ notes, title, onDelete, onArchive }) => {
  const isArchived = title === 'Archive';

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Section Title */}
      <div className="flex items-center gap-2 font-medium text-md">
        {isArchived ? <ArchiveIcon size={24} /> : <FileText size={24} />}
        <span>{title}</span>
      </div>

      {/* Notes */}
      <div className="flex flex-wrap gap-4">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ))
        ) : (
          <div className="w-full text-center flex flex-col items-center justify-center text-gray-400">
            <StickyNote size={72} />
            <p className="text-lg font-semibold">
              {isArchived ? 'No archived notes' : 'No active notes'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteList;
