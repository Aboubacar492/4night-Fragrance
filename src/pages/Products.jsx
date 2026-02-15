import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Products({ onAddToCart, currency }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            Nos Parfums
          </h1>
          <p className="text-white/60 text-lg">
            {products.length} parfums disponibles
          </p>
        </div>

        {/* Catégories Quick Access */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <button
            onClick={() => navigate('/collections/homme')}
            className="group p-6 bg-gradient-to-br from-blue-900/20 to-blue-950/20 hover:from-blue-900/40 hover:to-blue-950/40 border border-blue-500/20 hover:border-blue-500/40 rounded-2xl transition-all duration-300"
          >
            <div className="text-4xl mb-3">👔</div>
            <div className="text-white font-bold text-lg">Homme</div>
            <div className="text-white/60 text-sm">
              {products.filter(p => p.category === 'homme').length} parfums
            </div>
          </button>

          <button
            onClick={() => navigate('/collections/femme')}
            className="group p-6 bg-gradient-to-br from-pink-900/20 to-rose-950/20 hover:from-pink-900/40 hover:to-rose-950/40 border border-pink-500/20 hover:border-pink-500/40 rounded-2xl transition-all duration-300"
          >
            <div className="text-4xl mb-3">👗</div>
            <div className="text-white font-bold text-lg">Femme</div>
            <div className="text-white/60 text-sm">
              {products.filter(p => p.category === 'femme').length} parfums
            </div>
          </button>

          <button
            onClick={() => navigate('/collections/unisex')}
            className="group p-6 bg-gradient-to-br from-purple-900/20 to-purple-950/20 hover:from-purple-900/40 hover:to-purple-950/40 border border-purple-500/20 hover:border-purple-500/40 rounded-2xl transition-all duration-300"
          >
            <div className="text-4xl mb-3">⚡</div>
            <div className="text-white font-bold text-lg">Unisex</div>
            <div className="text-white/60 text-sm">
              {products.filter(p => p.category === 'unisex').length} parfums
            </div>
          </button>

          <button
            onClick={() => navigate('/collections/oriental')}
            className="group p-6 bg-gradient-to-br from-amber-900/20 to-orange-950/20 hover:from-amber-900/40 hover:to-orange-950/40 border border-amber-500/20 hover:border-amber-500/40 rounded-2xl transition-all duration-300"
          >
            <div className="text-4xl mb-3">🌙</div>
            <div className="text-white font-bold text-lg">Oriental</div>
            <div className="text-white/60 text-sm">
              {products.filter(p => p.type === 'oriental').length} parfums
            </div>
          </button>
        </div>

        {/* Tous les produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              currency={currency}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
