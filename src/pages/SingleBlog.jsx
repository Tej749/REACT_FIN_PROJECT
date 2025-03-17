import axios from "axios";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function SingleBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});
  
  const fetchSingleBlog = async () => {
    const response = await axios.get("https://express-project-1fmh.onrender.com/blog/" + id);
    setBlog(response.data.data); // response hold data in object form: key & value pair
    //console.log(response.data.data)
  };

  useEffect(() => {
    fetchSingleBlog();
  }, []);

  const deleteBlog = async () => {
    const response = await axios.delete("https://express-project-1fmh.onrender.com/blog/" + id);
    console.log(response.status);
    if (response.status === 200) {
      alert("Delete successfully...!!");
      navigate("/");
    } else {
      alert("Something went wrong....!!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={blog.image}
                  alt="Product Image"
                />
              </div>

              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <Link to={`/edit/${blog._id}`}>
                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                      Edit
                    </button>
                  </Link>
                </div>
                <div className="w-1/2 px-2">
                  <button
                    className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                    onClick={deleteBlog}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {blog.game}
              </h2>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {blog.add}
              </h2>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Welcome to Our Website.. please visit us for the best service... Tezn49@Info Tech Nepalgunj
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleBlog;
