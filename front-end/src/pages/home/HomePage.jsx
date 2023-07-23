const postsData = [
  {
    id: 1,
    user: {
      name: "John Doe",
      image: "/blank_person.png",
    },
    text: "Hello, this is my first post!",
    image: "/blank_person.png",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      image: "/blank_person.png",
    },
    text: "Excited to share my latest adventure!",
    image: "/logo.png",
  },
  // Add more posts here
];

export default function HomePage() {
  return (
    <div className="container mx-auto py-6 max-w-xl">
      {postsData.map((post) => (
        <div key={post.id} className="post bg-white shadow-md rounded-md p-4 mb-4">
          <div className="flex items-center mb-4">
            <img src={post.user.image} alt={post.user.name} className="w-10 h-10 rounded-full mr-2" />
            <span className="font-bold">{post.user.name}</span>
          </div>
          <p className="text-gray-700 mb-2">{post.text}</p>
          {post.image && <img src={post.image} alt="Post" className="w-full rounded-md" />}
        </div>
      ))}
    </div>
  );
}
