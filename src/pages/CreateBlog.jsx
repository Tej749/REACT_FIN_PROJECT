import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate();
  // const [game, setGame] = useState("")
  // const [player, setPlayer] = useState("")
  // const [add, setAdd] = useState("")
  // const [image, setImage] = useState("")

  const [data, setData] = useState({
    game: "",
    player: "",
    add: "",
    image: "",
  });

  const changeHandle = (e) => {
    // const value = e.target.value
    // const name = e.target.name
    // console.log(e.target.name)  ---> print title
    // console.log(e.target.value) ----> print value

    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };

  console.log(data);
  // console.log(name);

  const newCreateBLog = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://express-project-1fmh.onrender.com/blog",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200) {
      navigate("/");
    } else {
      alert("Something went wrong...");
    }

    console.log("form submitted");
  };

  return (
    <>
      <Navbar />
      <form onSubmit={newCreateBLog}>
        <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
          <div className="mt-10 text-center font-bold text-red-800 ">
            Wanna Join Us
          </div>
          <div className="mt-3 text-center text-4xl font-bold text-green-950">
            Create Blog
          </div>
          <div className="p-8">
            <div className="flex gap-4 mt-4">
              <input
                type="text"
                name="game"
                className="mt- block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Game*"
                onChange={changeHandle}
              />
              <input
                type="text"
                name="player"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Player *"
                onChange={changeHandle}
              />
            </div>
            <div className="flex gap-4 mt-5">
              <input
                type="text"
                name="add"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Address *"
                onChange={changeHandle}
              />
              <input
                type="file"
                name="image"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                onChange={changeHandle}
              />
            </div>

            <div className="text-center mt-10">
              <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">
                Create Blog
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateBlog;
