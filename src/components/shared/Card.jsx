import PropTypes from "prop-types";

export default function Card({ children, reverse }) {
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#ffffff",
        color: reverse ? "#ffffff" : "#000000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: true,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
