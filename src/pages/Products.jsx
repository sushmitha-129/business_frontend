import { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";

function Products({ setPage, setSelectedProduct, cart, setCart}) {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // 🔥 Fetch from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  // 🔍 Search filter
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-page">

      <h2>Shop Sarees</h2>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search sarees..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      {/* PRODUCTS */}
      <div className="grid">
        {filtered.map((p) => (
          <div 
            className="card" 
            key={p._id}
            onClick={() => {
              setSelectedProduct(p);
              setPage("details");
            }}
          >
            <img src={p.image || "https://via.placeholder.com/200"} alt="" />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>

           <button
  onClick={(e) => {
    e.stopPropagation(); // prevents opening details
    setCart([...cart, p]);
    alert("Added to cart");
  }}
>
  Add to Cart
</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Products;