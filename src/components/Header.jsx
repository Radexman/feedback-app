function Header({ text }) {
  return (
    <header>
      <div className="container text-center">
        <h1 className="font-semibold">{text}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
};

export default Header;
