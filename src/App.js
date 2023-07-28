export default function App() {
  const title = "Blog Post";
  const body = "This is my blog post";
  const comments = [
    { id: 1, text: "Post One" },
    { id: 2, text: "Post Two" },
    { id: 3, text: "Post Three" },
  ];

  return (
    <div className="container mx-auto space-y-2 p-4 text-font-white">
      <h1 className="text-center text-3xl font-semibold">
        {title.toUpperCase()}
      </h1>
      <p className="text-center text-xl">{body}</p>

      <div className="comments">
        <h2 className="text-2xl">Comments ({comments.length})</h2>
        <ul>
          {comments.map((comment, index) => (
            <li className="justify-left pl-3 text-sm" key={index}>
              {comment.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
