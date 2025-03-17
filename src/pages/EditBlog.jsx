import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    game: "",
    player: "",
    add: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };

  const editBlog = async (e) => {
    e.preventDefault();
    const response = await axios.patch(
      "https://express-project-1fmh.onrender.com/blog/" + id,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200) {
      navigate("/blog/" + id);
    } else {
      alert("Something went wrong...");
    }
  };

  const fetchSingleBlog = async () => {
    const response = await axios.get(
      "https://express-project-1fmh.onrender.com/blog/" + id
    );
    if (response.status === 200) {
      setData({
        game: response.data.data.game,
        player: response.data.data.player,
        add: response.data.data.add,
      });
    } else {
      alert("Something went wrong...");
    }
  };

  useEffect(() => {
    fetchSingleBlog();
  }, []);

  console.log(data);

  return (
    <>
      <Navbar />
      <form onSubmit={editBlog}>
        <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
          <div className="mt-10 text-center font-bold text-red-800 ">
            Wanna Edit Me
          </div>
          <div className="mt-3 text-center text-4xl font-bold text-green-950">
            Edit Blog
          </div>
          <div className="p-8">
            <div className="flex gap-4 mt-4">
              <input
                type="text"
                name="game"
                className="mt- block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Game*"
                onChange={handleChange}
                value={data.game}
              />

              <input
                type="text"
                name="player"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Player *"
                onChange={handleChange}
                value={data.player}
              />
            </div>
            <div className="flex gap-4 mt-5">
              <input
                type="text"
                name="add"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Address *"
                onChange={handleChange}
                value={data.add}
              />
              <input
                type="file"
                name="image"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                onChange={handleChange}
              />
            </div>

            <div className="text-center mt-10">
              <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">
                Edit Blog
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditBlog;
