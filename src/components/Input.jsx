const Input = () => {
  return (
    <section className="container mx-auto flex flex-col max-w-xl gap-4 mt-[104px]">
      <div className="flex flex-col gap-1.5">
        <h1>Title</h1>
        <div className="border border-gray-300 rounded-lg">
          <input
            type="text"
            placeholder="Type Here"
            className="bg-transparent focus:outline-none text-[#6A7282] w-full py-3 px-3"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <h1>Content</h1>
        <div className="border border-gray-300 rounded-lg min-h-[104px]">
          <input
            type="text"
            placeholder="Type Here"
            className="bg-transparent focus:outline-none text-[#6A7282] w-full  py-3 px-3"
          />
        </div>
      </div>
      <button className="flex justify-center items-center bg-[#1B80C7] h-11 rounded-xl text-white font-medium hover:scale-105 transition duration-500">
        Add note
      </button>
    </section>
  );
};

export default Input;
