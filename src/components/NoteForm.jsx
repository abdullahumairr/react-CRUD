import { useState } from 'react';

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const newNote = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      archived: false
    };

    onAddNote(newNote);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto max-w-xl flex flex-col gap-4 mt-[104px]">
      <div className="flex flex-col gap-1.5">
        <h1>Title</h1>
        <input
          type="text"
          placeholder="Type Here"
          className="border border-gray-300 rounded-lg py-3 px-3 text-[#6A7282]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h1>Content</h1>
        <input
          type="text"
          placeholder="Type Here"
          className="border border-gray-300 rounded-lg py-3 px-3 text-[#6A7282] min-h-[104px]"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-[#1B80C7] h-11 rounded-xl text-white font-medium hover:scale-105 transition duration-500"
      >
        Add note
      </button>
    </form>
  );
};

export default NoteForm;
