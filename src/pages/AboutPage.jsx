import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

export default function AboutPage() {
  return (
    <Card>
      <h1 className="text-2xl font-semibold">About This Project</h1>
      <p>This is a React app to leave feedback for product or service</p>
      <p>Version: 1.0.0 </p>

      <p className="underline hover:text-blue-700">
        <Link to="/">Back To Home</Link>
      </p>
    </Card>
  );
}
