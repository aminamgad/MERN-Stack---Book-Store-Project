const Spinner = () => {
  return (
    <>
      <h1 className="text-3xl p-4 font-mono drop-shadow-md hover:drop-shadow-xl">loading . . . . .</h1>

      <div className="flex flex-row">
        <div className="animate-ping animate-spin  w-4 h-4 m-4 rounded-full bg-sky-600"></div>
        <div className="animate-ping  w-4 h-4 m-4 rounded-full bg-sky-500"></div>
        <div className="animate-ping  w-4 h-4 m-4 rounded-full bg-sky-400"></div>
        <div className="animate-ping accent-lime-400  w-4 h-4 m-4 rounded-full bg-sky-300"></div>
        <div className="animate-ping  animate-pulse w-4 h-4 m-4 rounded-full bg-sky-100"></div>
        <div className="animate-ping animate-bounce w-4 h-4 m-4 rounded-full bg-sky-900"></div>
      </div>
    </>
  );
};

export default Spinner;
