import Navbar from "../components/Navbar";

function CreateBlog() {
  return (
    <>
      <Navbar />
      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
  <div className="mt-10 text-center font-bold text-red-800">Wanna Join Us</div>
  <div className="mt-3 text-center text-4xl font-bold text-green-950">Create Blog</div>
  <div className="p-8">
    <div className="flex gap-4 mt-4">
      <input type="text" name="name" className="mt- block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Game*" />
      <input type="text" name="player" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Player *" />
    </div>
    <div className="flex gap-4 mt-5">
      <input type="text" name="address" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Address *" />
      <input type="file" name="image" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"/>
    </div>
   
    
    <div className="text-center mt-10">
      <a className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Create Blog</a>
    </div>
  </div>
</div>
    </>
  );
}

export default CreateBlog;
