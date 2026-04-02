import "./ProductDetails.css";

function ProductDetails({ product, setPage, products, setSelectedProduct }) {

  if (!product) return <h2>No product selected</h2>;

  const similar = (products || []).filter(p => p.id !== product.id);

  return (
    <div className="details">

      <button onClick={() => setPage("products")}>⬅ Back</button>

      <div className="details-container">

        <img src="https://via.placeholder.com/300" alt="" />

        <div>
          <h2>{product.name}</h2>
          <p className="price">₹{product.price}</p>

          <p>
            Beautiful cotton saree perfect for daily wear and special occasions.
          </p>

          <p><b>Available Colors:</b></p>
          <div className="colors">
            <span style={{ background: "red" }}></span>
            <span style={{ background: "green" }}></span>
            <span style={{ background: "blue" }}></span>
          </div>

          <p className="rating">⭐⭐⭐⭐☆ (4.0)</p>

          <button 
            className="btn"
            onClick={() => {
            setCart([...cart, product]);
            alert("Added to cart");
  }}
>
  Add to Cart
</button>
        </div>

      </div>

      {/* 🔥 SIMILAR PRODUCTS */}
      <div className="similar-section">
        <h3>You may also like</h3>

        <div className="grid">
          {similar.map((p) => (
            <div 
              className="card" 
              key={p.id}
              onClick={() => {
                window.scrollTo(0, 0); // scroll top
                setPage("details");
                setSelectedProduct(p);
              }}
            >
              <img src="https://via.placeholder.com/200" />
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default ProductDetails;