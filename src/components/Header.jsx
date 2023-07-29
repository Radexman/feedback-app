function Header({ text }) {
  return (
    <header>
      <div className="container text-center">
        <h1 className="font-semibold text-[#ff6a95]">{text}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback App",
};

export default Header;
