import { Link } from "react-router-dom";

 function Card({ blog }) {
  console.log(blog);
 
  return (
    <> 
      <Link to={`/blog/${blog._id}`}>
        <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md">
          <div className="relative top-3">
            <img
              className="w-full h-64 object-cover"
              src={blog.image}
              alt="Image"
            />
            <div className="absolute top-0 right-0">
              <div className="w-32 h-8 absolute top-4 -right-8">
                <div className="h-full w-full bg-red-500 text-white text-center leading-8 font-semibold transform rotate-45">
                  SALE
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 min-w-5">
            <h3 className="text-xl font-semibold mb-2">{blog.game}</h3>
            <h4 className="text-xl font-semibold mb-2">{blog.player}</h4>

            <p className="text-gray-700 text-base">
              This is the page to boost your skill, so everyone please polished
              your skill to give shining to grow your best performance :: TEZN49
            </p>
            <h5 className="text-red-700 font-bold">{blog.add}</h5>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
