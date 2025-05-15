const Input = () => {
  return (
    <div className="container mx-auto  ">
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
    </div>
  );
};

export default Input;
