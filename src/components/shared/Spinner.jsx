import spinner from "../assets/spinner.gif";
import Card from "./Card";

function Spinner() {
  return (
    <Card>
      <h2>Loading...</h2>
      <img
        src={spinner}
        alt="Loading"
        style={{ width: "100px", margin: "auto", display: "block" }}
      />
    </Card>
  );
}
export default Spinner;
