import { Archive, Trash2 } from 'lucide-react';

const NoteItem = ({ note, onDelete, onArchive }) => {
  return (
    <div className="rounded-lg shadow mb-2 w-72">
      <div className={`h-3 rounded-t-lg ${note.archived ? 'bg-gray-300' : 'bg-[#0F7ECD]'}`}></div>
      <div className="flex justify-between p-4">
        <div>
          <h3 className="font-semibold">{note.title}</h3>
          <p className="text-sm text-gray-600">~{note.date}</p>
        </div>
        <div className="flex gap-2 mt-2">
          <button onClick={() => onDelete(note.id)} className="bg-red-100 border border-red-500 rounded-lg px-1">
            <Trash2 className="text-red-600 w-5" />
          </button>
          <button onClick={() => onArchive(note.id)} className="bg-orange-100 border border-orange-500 rounded-lg px-1">
            <Archive className="text-orange-500 w-5" />
          </button>
        </div>
      </div>
      <p className="px-4 pb-10">{note.content}</p>
    </div>
  );
};

export default NoteItem;
