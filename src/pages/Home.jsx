import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star, TrendingUp } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = ({ onAddToCart, currency }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Prioriser les nouveaux produits, puis compléter avec d'autres
    const newProducts = products.filter(p => p.new).slice(0, 4);
    const newProductIds = new Set(newProducts.map(p => p.id));
    
    // Prendre d'autres produits qui ne sont PAS déjà dans newProducts
    const otherProducts = products
      .filter(p => !newProductIds.has(p.id))
      .slice(0, 4);
    
    setFeaturedProducts([...newProducts, ...otherProducts]);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYWNjMTUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjItMnptLTItMmgyLTJ6bS0yIDBoMi0yem0tMiAyaDItMnptMi0ydjItMnptMi0yaDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm animate-fadeIn">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-amber-500 text-sm font-semibold tracking-wide">Nouvelle Collection 2026</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 animate-fadeIn">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600">
              L'Excellence
            </span>
            <br />
            <span className="text-white">Olfactive</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeIn animation-delay-200">
            Des parfums premium qui dure{' '}
            <span className="text-amber-500 font-semibold">plus de 4 nuits</span> 
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fadeIn animation-delay-400">
            <Link
              to="/collections"
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/50"
            >
              <span>Découvrir la collection</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              to="/a-propos"
              className="inline-flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <span>Notre histoire</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 animate-fadeIn animation-delay-600">
            <div className="text-center">
              <div className="text-4xl font-black text-amber-500 mb-2">400+</div>
              <div className="text-white/60 text-sm font-medium">Parfums</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-amber-500 mb-2">50+</div>
              <div className="text-white/60 text-sm font-medium">Marques</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-amber-500 mb-2">100%</div>
              <div className="text-white/60 text-sm font-medium">Authentique</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-amber-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Nos <span className="text-amber-500">Collections</span>
            </h2>
            <p className="text-white/60 text-lg">Trouvez le parfum qui vous correspond</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Homme */}
            <Link
              to="/collections/homme"
              className="group relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 to-blue-950 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">👔</div>
                <h3 className="text-white text-2xl font-bold mb-2">Homme</h3>
                <p className="text-white/70 text-sm mb-4">Élégance masculine</p>
                <div className="flex items-center text-amber-500 font-semibold">
                  <span>Découvrir</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            {/* Femme */}
            <Link
              to="/collections/femme"
              className="group relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-900 to-rose-950 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">👗</div>
                <h3 className="text-white text-2xl font-bold mb-2">Femme</h3>
                <p className="text-white/70 text-sm mb-4">Charme féminin</p>
                <div className="flex items-center text-amber-500 font-semibold">
                  <span>Découvrir</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            {/* Unisex */}
            <Link
              to="/collections/unisex"
              className="group relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900 to-purple-950 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">⚡</div>
                <h3 className="text-white text-2xl font-bold mb-2">Unisex</h3>
                <p className="text-white/70 text-sm mb-4">Pour tous</p>
                <div className="flex items-center text-amber-500 font-semibold">
                  <span>Découvrir</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            {/* Oriental */}
            <Link
              to="/collections/oriental"
              className="group relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-900 to-orange-950 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-500">🌙</div>
                <h3 className="text-white text-2xl font-bold mb-2">Oriental</h3>
                <p className="text-white/70 text-sm mb-4">Mystique & envoûtant</p>
                <div className="flex items-center text-amber-500 font-semibold">
                  <span>Découvrir</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                Produits <span className="text-amber-500">Vedettes</span>
              </h2>
              <p className="text-white/60 text-lg">Nos parfums les plus populaires</p>
            </div>
            <Link
              to="/collections"
              className="hidden sm:flex items-center space-x-2 text-amber-500 hover:text-amber-400 font-semibold transition-colors duration-300"
            >
              <span>Voir tout</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                currency={currency}
              />
            ))}
          </div>

          <div className="text-center mt-12 sm:hidden">
            <Link
              to="/collections"
              className="inline-flex items-center space-x-2 text-amber-500 hover:text-amber-400 font-semibold transition-colors duration-300"
            >
              <span>Voir tous les produits</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Pourquoi <span className="text-amber-500">4NIGHT</span> ?
            </h2>
            <p className="text-white/60 text-lg">L'excellence à votre portée</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-zinc-900 to-black p-8 rounded-2xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Authenticité Garantie</h3>
              <p className="text-white/60">Tous nos parfums sont 100% authentiques et vérifiés</p>
            </div>

            <div className="bg-gradient-to-b from-zinc-900 to-black p-8 rounded-2xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Prix Compétitifs</h3>
              <p className="text-white/60">Les meilleurs prix du marché, paiement en FCFA ou DH</p>
            </div>

            <div className="bg-gradient-to-b from-zinc-900 to-black p-8 rounded-2xl border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Livraison Rapide</h3>
              <p className="text-white/60">Livraison sous 24h</p> 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
