import "./Navbar.css";

function Navbar({ setPage }) {
  return (
    <div className="navbar">

      <h2 className="logo">Sudha Textiles 💜</h2>

      <div className="nav-links">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("products")}>Shop</button>
        <button onClick={() => setPage("cart")}>Cart</button>
      </div>

    </div>
  );
}

export default Navbar;