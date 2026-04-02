import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

function App() {

  const [page, setPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]); // 🔥 NEW

  return (
    <div>

      <Navbar setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}

      {page === "products" && (
        <Products 
          setPage={setPage}
          setSelectedProduct={setSelectedProduct}
          cart={cart}
          setCart={setCart}   // 🔥 PASS
        />
      )}

      {page === "cart" && (
        <Cart 
          cart={cart}
          setCart={setCart}   // 🔥 PASS
        />
      )}

      {page === "details" && (
        <ProductDetails 
          product={selectedProduct}
          setPage={setPage}
          cart={cart}
          setCart={setCart}   // 🔥 PASS
        />
      )}

    </div>
  );
}

export default App;