function Cart({ cart, setCart }) {

  // Remove item
  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  // Total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "40px" }}>

      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={{
              background: "white",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "8px"
            }}>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              <button onClick={() => removeItem(index)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>
        </>
      )}

    </div>
  );
}

export default Cart;