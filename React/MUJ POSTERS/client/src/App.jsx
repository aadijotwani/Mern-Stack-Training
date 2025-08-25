import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider } from "./context/ToastContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CartDrawer from "./components/CartDrawer"; // ✅ Import CartDrawer here

const App = () => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  // Simple scroll restoration handling
  React.useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Ensure page starts at top on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <ToastProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar onCartOpen={() => setIsCartOpen(true)} />   {/* pass handler */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ToastProvider>
  );
};

export default App;
