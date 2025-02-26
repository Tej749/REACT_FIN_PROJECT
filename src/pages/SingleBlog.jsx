import axios from "axios";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleBlog() {

  const {id} = useParams() 

  const [blog, setBlog] = useState({})
  
  console.log(id)
  const fetchSingleBlog = async () =>{
    const response = await axios.get("http://localhost:3000/blog/" + id)
    setBlog(response.data.data) // response hold data in object form: key & value pair 
    //console.log(response.data.data)
  }
 
  useEffect(() =>{
    fetchSingleBlog() 
  }, [])

  const deleteBlog = async () =>{
    const response = await axios.delete("http://localhost:3000/blog/" + id)
    console.log("delete blog execute vayo hai...")
  }

  const editBlog = () =>{
    console.log("Edit block executed hudai xa...")
  }
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src={`http://localhost:3000/` + blog.image} alt="Product Image" />
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700" onClick={editBlog}>Edit</button>
                    </div>
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={deleteBlog}>Delete</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{blog.game}</h2>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{blog.add}</h2>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                   Webpage design using express on backend & ReactJS on frontend (UI) and MongoDB (No SQL Database)
                </p>
               
                <div>
                  <h2>Player Name </h2>
                    <span className="font-bold text-gray-700 dark:text-gray-300">{blog.player}</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  );
}
export default SingleBlog;
