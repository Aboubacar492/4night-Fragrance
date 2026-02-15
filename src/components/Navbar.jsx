import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({ cart, currency, setCurrency }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const location = useLocation();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-amber-500/30">
              <span className="text-black font-black text-2xl">4N</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-xl tracking-tight">4NIGHT</span>
              <span className="block text-amber-500 text-xs font-semibold tracking-widest">FRAGRANCE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'text-amber-500 bg-amber-500/10' 
                  : 'text-white hover:text-amber-500 hover:bg-white/5'
              }`}
            >
              Accueil
            </Link>

            {/* Collections Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCollectionOpen(true)}
              onMouseLeave={() => setIsCollectionOpen(false)}
            >
              <button
                className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-1 ${
                  isActive('/collections') || isActive('/collections/homme') || isActive('/collections/femme') || isActive('/collections/unisex')
                    ? 'text-amber-500 bg-amber-500/10' 
                    : 'text-white hover:text-amber-500 hover:bg-white/5'
                }`}
              >
                <span>Collections</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isCollectionOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isCollectionOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-amber-500/20 rounded-2xl shadow-2xl shadow-amber-500/10 overflow-hidden animate-fadeIn">
                  <div className="py-2">
                    <Link
                      to="/collections"
                      className="block px-6 py-3 text-white hover:bg-amber-500/10 hover:text-amber-500 transition-all duration-300"
                    >
                      <span className="font-medium">Toutes les Collections</span>
                    </Link>
                    <div className="h-px bg-amber-500/10 my-2"></div>
                    <Link
                      to="/collections/homme"
                      className="block px-6 py-3 text-white hover:bg-amber-500/10 hover:text-amber-500 transition-all duration-300"
                    >
                      <span className="font-medium">👔 Homme</span>
                    </Link>
                    <Link
                      to="/collections/femme"
                      className="block px-6 py-3 text-white hover:bg-amber-500/10 hover:text-amber-500 transition-all duration-300"
                    >
                      <span className="font-medium">👗 Femme</span>
                    </Link>
                    <Link
                      to="/collections/unisex"
                      className="block px-6 py-3 text-white hover:bg-amber-500/10 hover:text-amber-500 transition-all duration-300"
                    >
                      <span className="font-medium">⚡ Unisex</span>
                    </Link>
                    <Link
                      to="/collections/oriental"
                      className="block px-6 py-3 text-white hover:bg-amber-500/10 hover:text-amber-500 transition-all duration-300"
                    >
                      <span className="font-medium">🌙 Oriental</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/commande"
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/commande') 
                  ? 'text-amber-500 bg-amber-500/10' 
                  : 'text-white hover:text-amber-500 hover:bg-white/5'
              }`}
            >
              Commande
            </Link>

            <Link
              to="/a-propos"
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/a-propos') 
                  ? 'text-amber-500 bg-amber-500/10' 
                  : 'text-white hover:text-amber-500 hover:bg-white/5'
              }`}
            >
              À propos
            </Link>

            <Link
              to="/contact"
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-amber-500 bg-amber-500/10' 
                  : 'text-white hover:text-amber-500 hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Currency Selector */}
            <div className="hidden sm:flex items-center space-x-2 bg-white/5 rounded-lg px-3 py-2">
              <button
                onClick={() => setCurrency('fcfa')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                  currency === 'fcfa'
                    ? 'bg-amber-500 text-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                FCFA
              </button>
              <button
                onClick={() => setCurrency('dh')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                  currency === 'dh'
                    ? 'bg-amber-500 text-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                DH
              </button>
            </div>

            {/* Cart */}
            <Link
              to="/panier"
              className="relative p-2 rounded-lg bg-white/5 hover:bg-amber-500/10 transition-all duration-300 group"
            >
              <ShoppingCart className="w-6 h-6 text-white group-hover:text-amber-500 transition-colors duration-300" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/98 border-t border-amber-500/20 animate-slideDown">
          <div className="px-4 py-4 space-y-1">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'text-amber-500 bg-amber-500/10' 
                  : 'text-white hover:bg-white/5'
              }`}
            >
              Accueil
            </Link>

            {/* Mobile Collections */}
            <div>
              <button
                onClick={() => setIsCollectionOpen(!isCollectionOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-white hover:bg-white/5 transition-all duration-300"
              >
                <span>Collections</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isCollectionOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isCollectionOpen && (
                <div className="ml-4 space-y-1 mt-1">
                  <Link
                    to="/collections"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 rounded-lg text-white hover:bg-white/5 transition-all duration-300"
                  >
                    Toutes les Collections
                  </Link>
                  <Link
                    to="/collections/homme"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 rounded-lg text-white hover:bg-white/5 transition-all duration-300"
                  >
                    👔 Homme
                  </Link>
                  <Link
                    to="/collections/femme"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 rounded-lg text-white hover:bg-white/5 transition-all duration-300"
                  >
                    👗 Femme
                  </Link>
                  <Link
                    to="/collections/unisex"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 rounded-lg text-white hover:bg-white/5 transition-all duration-300"
                  >
                    ⚡ Unisex
                  </Link>
                  <Link
                    to="/collections/oriental"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 rounded-lg text-white hover:bg-white/5 transition-all duration-300"
                  >
                    🌙 Oriental
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/commande"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                isActive('/commande') 
                  ? 'text-amber-500 bg-amber-500/10' 
                  : 'text-white hover:bg-white/5'
              }`}
            >
              Commande
            </Link>

            <Link
              to="/a-propos"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                isActive('/a-propos') 
                  ? 'text-amber-500 bg-amber-500/10' 
                  : 'text-white hover:bg-white/5'
              }`}
            >
              À propos
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                isActive('/contact') 
                  ? 'text-amber-500 bg-amber-500/10' 
                  : 'text-white hover:bg-white/5'
              }`}
            >
              Contact
            </Link>

            {/* Mobile Currency Selector */}
            <div className="flex items-center space-x-2 bg-white/5 rounded-lg px-4 py-3 mt-4">
              <span className="text-white text-sm font-medium mr-2">Devise:</span>
              <button
                onClick={() => setCurrency('fcfa')}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  currency === 'fcfa'
                    ? 'bg-amber-500 text-black'
                    : 'text-white bg-white/10'
                }`}
              >
                FCFA
              </button>
              <button
                onClick={() => setCurrency('dh')}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  currency === 'dh'
                    ? 'bg-amber-500 text-black'
                    : 'text-white bg-white/10'
                }`}
              >
                DH
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
