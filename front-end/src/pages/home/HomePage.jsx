import { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosInstance";

export default function HomePage() {
  const [postsData, setPostData] = useState([]);

  useEffect(() => {
    const getPostData = async () => {
      try {
        const response = await axiosInstance.get("/post");
        console.log(response.data.data);
        setPostData(response.data.data);
      } catch (err) {
        console.log(err.response?.data);
      }
    };
    getPostData();
  }, []);

  return (
    <div className="container mx-auto py-6 max-w-xl">
      {postsData.map((post) => {
        return (
          <div key={post._id} className="post bg-white shadow-md rounded-md p-4 mb-4">
            <div className="flex items-center mb-4">
              <img src={"/blank_person.png"} alt={"Image"} className="w-10 h-10 rounded-full mr-2" />
              <span className="font-bold">{post.user_id.name}</span>
            </div>
            <p className="text-gray-700 mb-2">{post.content}</p>
            {/* {post.img_url && <img src={post.img_url} alt="Post" className="w-full rounded-md" />} */}
            {post.img_url && <img src={post.img_url} alt="Post" className="w-full rounded-md" />}
          </div>
        );
      })}
    </div>
  );
}
