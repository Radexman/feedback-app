import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

export default function AboutIconLink() {
  return (
    <div className="about-link fixed bottom-2 right-2">
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}
