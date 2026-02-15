import React, { useState, useEffect } from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/theme.css';

function App() {
  const [cart, setCart] = useState([]);
  const [currency, setCurrency] = useState('fcfa');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Charger le panier depuis localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('4night-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    const savedCurrency = localStorage.getItem('4night-currency');
    if (savedCurrency) {
      setCurrency(savedCurrency);
    }
  }, []);

  // Sauvegarder le panier dans localStorage
  useEffect(() => {
    localStorage.setItem('4night-cart', JSON.stringify(cart));
  }, [cart]);

  // Sauvegarder la devise dans localStorage
  useEffect(() => {
    localStorage.setItem('4night-currency', currency);
  }, [currency]);

  // Fonction pour afficher une notification
  const showToast = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  // Ajouter au panier
  const addToCart = (product) => {
    const existingItem = cart.find(
      item => item.id === product.id && item.selectedSize === product.selectedSize
    );

    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      showToast(`${product.name} quantité mise à jour !`);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      showToast(`${product.name} ajouté au panier !`);
    }
  };

  // Mettre à jour la quantité
  const updateQuantity = (productId, size, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId, size);
      return;
    }

    setCart(
      cart.map(item =>
        item.id === productId && item.selectedSize === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Retirer du panier
  const removeFromCart = (productId, size) => {
    setCart(cart.filter(item => !(item.id === productId && item.selectedSize === size)));
    showToast('Produit retiré du panier');
  };

  // Vider le panier
  const clearCart = () => {
    setCart([]);
    showToast('Panier vidé');
  };

 return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar cart={cart} currency={currency} setCurrency={setCurrency} />

      <main className="flex-grow">
        <Routes>
           <Route path="/" element={<Home onAddToCart={addToCart} currency={currency}/>} />
          <Route 
            path="/collections/:category" 
            element={<Collection onAddToCart={addToCart} currency={currency} />} 
          />

        
         
          <Route 
            path="/collections" 
            element={<Collection onAddToCart={addToCart} currency={currency} />} 
          />
          
          <Route 
            path="/produit/:id" 
            element={<ProductDetails onAddToCart={addToCart} currency={currency} />} 
          />
          <Route 
            path="/panier" 
            element={
              <Cart 
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
                currency={currency}
              />
            }
          />
          <Route 
            path="/commande" 
            element={
              <Checkout 
                cart={cart}
                clearCart={clearCart}
                currency={currency}
              />
            }
          />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      {showNotification && (
        <div className="fixed bottom-8 right-8 z-50 toast-enter">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-4 rounded-xl shadow-2xl shadow-amber-500/50 flex items-center space-x-3">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            <span className="font-semibold">{notificationMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;