import React from 'react';
import { Star, Award, Users, Sparkles, Heart, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-amber-500 text-sm font-semibold">Notre Histoire</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600">
              4NIGHT
            </span>
            <br />
            <span className="text-white">FRAGRANCE</span>
          </h1>

          <p className="text-white/70 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            Votre destination premium pour les parfums authentiques au Burkina Faso
          </p>
        </div>

        {/* Notre Mission */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-amber-500/10 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black text-white mb-6">Notre Mission</h2>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Chez <span className="text-amber-500 font-semibold">4NIGHT FRAGRANCE</span>, nous croyons que chaque personne mérite d'accéder à des parfums de luxe authentiques. Notre mission est de rendre les plus grandes marques de parfumerie mondiale accessibles à tous au Burkina Faso.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  Inspirés par <span className="text-amber-500 font-semibold">les nuits mystiques</span> de notre beau pays, nous sélectionnons avec soin chaque fragrance pour vous offrir une expérience olfactive inoubliable qui dure <span className="text-amber-500 font-semibold">plus de 4 nuits</span>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black/50 rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="text-3xl font-black text-amber-500 mb-2">100%</div>
                  <div className="text-white/60 text-sm">Authentique</div>
                </div>

                <div className="bg-black/50 rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="text-3xl font-black text-amber-500 mb-2">400+</div>
                  <div className="text-white/60 text-sm">Parfums</div>
                </div>

                <div className="bg-black/50 rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="text-3xl font-black text-amber-500 mb-2">50+</div>
                  <div className="text-white/60 text-sm">Marques</div>
                </div>

                <div className="bg-black/50 rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-amber-500 fill-amber-500" />
                  </div>
                  <div className="text-3xl font-black text-amber-500 mb-2">1000+</div>
                  <div className="text-white/60 text-sm">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nos Valeurs */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Nos <span className="text-amber-500">Valeurs</span>
            </h2>
            <p className="text-white/60 text-lg">Ce qui nous guide au quotidien</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Authenticité */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-amber-500/10 p-8 hover:border-amber-500/30 transition-all duration-500">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Authenticité</h3>
              <p className="text-white/60 leading-relaxed">
                Chaque parfum est 100% authentique et provient directement des marques officielles. Nous garantissons la qualité de tous nos produits.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-amber-500/10 p-8 hover:border-amber-500/30 transition-all duration-500">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-white/60 leading-relaxed">
                Nous visons l'excellence dans tout ce que nous faisons, du service client à la qualité de nos produits et à la rapidité de livraison.
              </p>
            </div>

            {/* Accessibilité */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-amber-500/10 p-8 hover:border-amber-500/30 transition-all duration-500">
              <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-amber-500 fill-amber-500" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Accessibilité</h3>
              <p className="text-white/60 leading-relaxed">
                Des prix justes et compétitifs pour rendre le luxe accessible à tous. Paiement flexible en FCFA ou Dirham marocain.
              </p>
            </div>
          </div>
        </div>

        {/* Pourquoi nous choisir */}
        <div className="bg-gradient-to-br from-amber-900/20 to-orange-950/20 rounded-3xl border border-amber-500/20 p-8 sm:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-white/60 text-lg">L'excellence à votre portée</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-white font-bold mb-2">Produits Garantis</h3>
              <p className="text-white/60 text-sm">100% authentiques et vérifiés</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-2">Prix Compétitifs</h3>
              <p className="text-white/60 text-sm">Meilleurs prix du marché</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-2">Paiement Flexible</h3>
              <p className="text-white/60 text-sm">Paiement à la livraison</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-2">Livraison Rapide</h3>
              <p className="text-white/60 text-sm">Dans tout le Burkina Faso</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-white text-2xl font-bold mb-6">
            Rejoignez des milliers de clients satisfaits
          </p>
          <a
            href="/collections"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-500/50"
          >
            <span>Découvrir nos parfums</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
