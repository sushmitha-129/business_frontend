import "./Home.css";

function Home({ setPage }) {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="hero">
        <h1>Elegant Cotton Sarees</h1>
        <p>Minimal. Traditional. Beautiful.</p>

        {/* ✅ NAVIGATION ADDED */}
        <button 
          className="btn"
          onClick={() => setPage("products")}
        >
          Shop Now
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="products">
        <h2>Featured Sarees</h2>

        <div className="grid">

          <div className="card">
            <img src="https://th.bing.com/th/id/OIP.Zq5QTPnw1lSZpKUEqYWTwAHaJ4?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="saree" />
            <h3>Cotton Saree</h3>
            <p>₹1200</p>
          </div>

          <div className="card">
            <img src="https://th.bing.com/th/id/OIP.3O9sJXzp98h6AgbAWFILNAHaJ4?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="saree" />
            <h3>Handloom Saree</h3>
            <p>₹1500</p>
          </div>

          <div className="card">
            <img src="https://th.bing.com/th/id/OIP.EbqcbWWKT-HshTdgtWUpLQHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="saree" />
            <h3>Traditional Saree</h3>
            <p>₹1800</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;