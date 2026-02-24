import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={logo} alt="logo" className="logo" width="40" />
        <h2>PRODDEC Forum</h2>
      </div>

      <ul>
        <li>Home</li>
        <li>Categories</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;