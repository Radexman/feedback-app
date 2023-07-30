import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes onClick={() => handleDelete(item.id)} color="white" />
      </button>
      <div className="text-dispaly">{item.text}</div>
    </Card>
  );
}
export default FeedbackItem;
