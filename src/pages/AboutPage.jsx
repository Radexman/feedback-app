import Card from "../components/shared/Card";

export default function AboutPage() {
  return (
    <Card>
      <h1 className="about">About This Project</h1>
      <p>This is a React app to leave feedback for product or sercice</p>
      <p>Version: 1.0.0 </p>

      <p>
        <a href="/">Back To Home</a>
      </p>
    </Card>
  );
}
