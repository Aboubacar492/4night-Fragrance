import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

const Cart = ({ cart, updateQuantity, removeFromCart, clearCart, currency }) => {
  const navigate = useNavigate();
  const currencySymbol = currency === 'fcfa' ? 'FCFA' : 'DH';

  // Calculer le total
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-black pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="mb-8">
              <ShoppingBag className="w-32 h-32 text-white/10 mx-auto" />
            </div>
            <h2 className="text-white text-4xl font-black mb-4">Votre panier est vide</h2>
            <p className="text-white/60 text-lg mb-8">
              Découvrez nos parfums et ajoutez-en à votre panier
            </p>
            <Link
              to="/collections"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/30"
            >
              <span>Découvrir nos parfums</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-2">Mon Panier</h1>
            <p className="text-white/60">
              {cart.length} article{cart.length > 1 ? 's' : ''} dans votre panier
            </p>
          </div>
          
          <button
            onClick={clearCart}
            className="hidden sm:flex items-center space-x-2 text-red-500 hover:text-red-400 font-semibold transition-colors duration-300"
          >
            <Trash2 className="w-5 h-5" />
            <span>Vider le panier</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Liste des produits */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div
                key={`${item.id}-${item.selectedSize}-${index}`}
                className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300 p-6"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-amber-600 to-amber-800">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-white text-5xl font-black opacity-30">
                          {item.brand.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Informations */}
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-amber-500 text-xs font-semibold uppercase tracking-wider mb-1">
                          {item.brand}
                        </p>
                        <h3 className="text-white font-bold text-lg mb-1">{item.name}</h3>
                        <p className="text-white/60 text-sm">Taille: {item.selectedSize}</p>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="p-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg text-red-500 transition-all duration-300"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantité */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                          className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-bold transition-all duration-300"
                        >
                          <Minus className="w-4 h-4 mx-auto" />
                        </button>
                        <span className="text-white text-lg font-bold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                          className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-bold transition-all duration-300"
                        >
                          <Plus className="w-4 h-4 mx-auto" />
                        </button>
                      </div>

                      {/* Prix */}
                      <div className="text-right">
                        <div className="text-amber-500 text-2xl font-black">
                          {(item.price * item.quantity).toLocaleString()}
                        </div>
                        <div className="text-amber-500/80 text-sm font-semibold">
                          {currencySymbol}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Bouton vider panier mobile */}
            <button
              onClick={clearCart}
              className="sm:hidden w-full flex items-center justify-center space-x-2 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-500 font-semibold rounded-xl transition-all duration-300"
            >
              <Trash2 className="w-5 h-5" />
              <span>Vider le panier</span>
            </button>
          </div>

          {/* Résumé */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-amber-500/20 p-6">
              <h2 className="text-white text-2xl font-bold mb-6">Résumé</h2>

              {/* Détails */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-white/60">
                  <span>Sous-total</span>
                  <span className="font-semibold">
                    {total.toLocaleString()} {currencySymbol}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-white/60">
                  <span>Livraison</span>
                  <span className="font-semibold text-green-500">GRATUITE</span>
                </div>

                <div className="h-px bg-white/10"></div>

                <div className="flex items-center justify-between">
                  <span className="text-white text-lg font-bold">Total</span>
                  <div className="text-right">
                    <div className="text-amber-500 text-3xl font-black">
                      {total.toLocaleString()}
                    </div>
                    <div className="text-amber-500/80 text-sm font-semibold">
                      {currencySymbol}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bouton Commander */}
              <button
                onClick={() => navigate('/commande')}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/30 mb-4"
              >
                <span>Passer commande</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <Link
                to="/collections"
                className="block text-center text-white/60 hover:text-amber-500 font-medium transition-colors duration-300"
              >
                Continuer mes achats
              </Link>
            </div>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="mt-12 text-center">
          <p className="text-white/60 mb-4">Besoin de plus de parfums ?</p>
          <Link
            to="/collections"
            className="inline-flex items-center space-x-2 text-amber-500 hover:text-amber-400 font-semibold transition-colors duration-300"
          >
            <span>Découvrir nos collections</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
