import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, currency }) => {
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const price = product.prices[selectedSize][currency];
  const currencySymbol = currency === 'fcfa' ? 'FCFA' : 'DH';

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      selectedSize,
      price,
      currency
    });
  };

  // Placeholder image with brand initial
  const getPlaceholderImage = () => {
    const initial = product.brand.charAt(0);
    const colors = [
      'from-amber-600 to-amber-800',
      'from-yellow-600 to-yellow-800',
      'from-orange-600 to-orange-800',
      'from-amber-700 to-yellow-900'
    ];
    const colorIndex = product.id % colors.length;
    
    return (
      <div className={`w-full h-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center`}>
        <span className="text-white text-6xl font-black opacity-30">{initial}</span>
      </div>
    );
  };

  return (
    <div className="group relative bg-gradient-to-b from-zinc-900 to-black rounded-2xl overflow-hidden border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2">
      {/* New Badge */}
      {product.new && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
          NOUVEAU
        </div>
      )}

      {/* Like Button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300 group/like"
      >
        <Heart
          className={`w-5 h-5 transition-all duration-300 ${
            isLiked 
              ? 'fill-amber-500 text-amber-500' 
              : 'text-white group-hover/like:text-amber-500'
          }`}
        />
      </button>

      {/* Image Container - UN SEUL Link */}
      <Link to={`/produit/${product.id}`} className="block relative aspect-square overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
        {!imageLoaded && getPlaceholderImage()}
        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.style.display = 'none';
            setImageLoaded(false);
          }}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Quick View Overlay - Pas de Link ici */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="flex items-center space-x-2 text-white">
            <Eye className="w-5 h-5" />
            <span className="text-sm font-semibold">Voir détails</span>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5">
        {/* Brand & Category */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider">
            {product.brand}
          </span>
          <span className="text-white/50 text-xs font-medium">
            {product.category === 'homme' && '👔'}
            {product.category === 'femme' && '👗'}
            {product.category === 'unisex' && '⚡'}
          </span>
        </div>

        {/* Product Name */}
        <Link to={`/produit/${product.id}`}>
          <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 hover:text-amber-500 transition-colors duration-300">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-white/60 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Notes */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.notes.slice(0, 3).map((note, index) => (
            <span
              key={index}
              className="text-xs text-amber-500/80 bg-amber-500/10 px-2 py-1 rounded-full"
            >
              {note}
            </span>
          ))}
        </div>

        {/* Size Selector */}
        <div className="mb-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedSize('30ml')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedSize === '30ml'
                  ? 'bg-amber-500 text-black'
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              30ml
            </button>
            <button
              onClick={() => setSelectedSize('50ml')}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedSize === '50ml'
                  ? 'bg-amber-500 text-black'
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              50ml
            </button>
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-amber-500 text-2xl font-black">
              {price.toLocaleString()}
            </span>
            <span className="text-amber-500/80 text-sm font-semibold ml-1">
              {currencySymbol}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="p-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/30 group/cart"
          >
            <ShoppingCart className="w-5 h-5 text-black group-hover/cart:animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
