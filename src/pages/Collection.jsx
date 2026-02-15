import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, getBrands } from '../data/products';

const Collections = ({ onAddToCart, currency }) => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  const allBrands = getBrands();
  const types = ['oriental', 'floral', 'frais', 'gourmand', 'sport'];

  useEffect(() => {
    let filtered = [...products];

    // Filtre par catégorie (depuis l'URL)
    if (category && category !== 'all') {
      if (category === 'oriental') {
        filtered = filtered.filter(p => p.type === 'oriental');
      } else {
        filtered = filtered.filter(p => p.category === category);
      }
    }

    // Filtre par recherche
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        p =>
          p.name.toLowerCase().includes(search) ||
          p.brand.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search)
      );
    }

    // Filtre par marque
    if (selectedBrand) {
      filtered = filtered.filter(p => p.brand === selectedBrand);
    }

    // Filtre par type
    if (selectedType) {
      filtered = filtered.filter(p => p.type === selectedType);
    }

    // Tri
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.prices['50ml'][currency] - b.prices['50ml'][currency]);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.prices['50ml'][currency] - a.prices['50ml'][currency]);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'new':
        filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [category, searchTerm, selectedBrand, selectedType, sortBy, currency]);

  const getCategoryTitle = () => {
    if (!category || category === 'all') return 'Toutes les Collections';
    if (category === 'homme') return '👔 Collection Homme';
    if (category === 'femme') return '👗 Collection Femme';
    if (category === 'unisex') return '⚡ Collection Unisex';
    if (category === 'oriental') return '🌙 Collection Orientale';
    return 'Collections';
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedBrand('');
    setSelectedType('');
    setSortBy('default');
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            {getCategoryTitle()}
          </h1>
          <p className="text-white/60 text-lg">
            {filteredProducts.length} parfum{filteredProducts.length > 1 ? 's' : ''} disponible{filteredProducts.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Search & Filters Bar */}
        <div className="mb-8">
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-amber-500/10 p-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Rechercher un parfum, une marque..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                />
              </div>

              {/* Filter Toggle (Mobile) */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center justify-center space-x-2 px-6 py-3 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-500 font-semibold rounded-xl transition-all duration-300"
              >
                <Filter className="w-5 h-5" />
                <span>Filtres</span>
              </button>

              {/* Desktop Filters */}
              <div className="hidden lg:flex items-center space-x-3">
                {/* Brand Filter */}
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                >
                  <option value="">Toutes les marques</option>
                  {allBrands.slice(0, 20).map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>

                {/* Type Filter */}
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                >
                  <option value="">Tous les types</option>
                  {types.map(type => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                >
                  <option value="default">Tri par défaut</option>
                  <option value="new">Nouveautés</option>
                  <option value="name">Nom A-Z</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                </select>

                {/* Clear Filters */}
                {(searchTerm || selectedBrand || selectedType || sortBy !== 'default') && (
                  <button
                    onClick={clearFilters}
                    className="p-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-500 rounded-xl transition-all duration-300"
                    title="Réinitialiser les filtres"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Filters Dropdown */}
            {showFilters && (
              <div className="lg:hidden mt-4 space-y-3 animate-slideDown">
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                >
                  <option value="">Toutes les marques</option>
                  {allBrands.slice(0, 20).map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                >
                  <option value="">Tous les types</option>
                  {types.map(type => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                >
                  <option value="default">Tri par défaut</option>
                  <option value="new">Nouveautés</option>
                  <option value="name">Nom A-Z</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                </select>

                {(searchTerm || selectedBrand || selectedType || sortBy !== 'default') && (
                  <button
                    onClick={clearFilters}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-500 font-semibold rounded-xl transition-all duration-300"
                  >
                    <X className="w-5 h-5" />
                    <span>Réinitialiser les filtres</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                currency={currency}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-white text-2xl font-bold mb-2">Aucun produit trouvé</h3>
            <p className="text-white/60 mb-6">
              Essayez de modifier vos filtres ou votre recherche
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl transition-all duration-300"
            >
              <X className="w-5 h-5" />
              <span>Réinitialiser les filtres</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collections;
