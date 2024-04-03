

export default function Navbar() {
  return (
    <nav className="w-100">
      <span className="navbar">
        <a href="/" className="navbar1">
          Home
        </a>
        <a href="/" className="navbar1">
          Myproject
        </a>
        <a href="/contact" className="navbar1">
          Contact
        </a>
      </span>
      <span className="icon">
        <a href="https://github.com/amrullahmukhtar">
          <i className="fa fa-github" style={{ fontSize: "24px" }}></i>
        </a>
      </span>
    </nav>
  );
}
