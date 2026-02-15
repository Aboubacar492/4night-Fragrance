import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-black border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                <span className="text-black font-black text-xl">4N</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg block">4NIGHT</span>
                <span className="text-amber-500 text-xs font-semibold tracking-wider">FRAGRANCE</span>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Votre destination premium pour les parfums authentiques au Burkina Faso. 
              L'excellence olfactive à votre portée.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/30 rounded-lg flex items-center justify-center text-white hover:text-amber-500 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/30 rounded-lg flex items-center justify-center text-white hover:text-amber-500 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/30 rounded-lg flex items-center justify-center text-white hover:text-amber-500 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-white/60 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/collections" 
                  className="text-white/60 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link 
                  to="/collections/homme" 
                  className="text-white/60 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  Parfums Homme
                </Link>
              </li>
              <li>
                <Link 
                  to="/collections/femme" 
                  className="text-white/60 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  Parfums Femme
                </Link>
              </li>
              <li>
                <Link 
                  to="/collections/unisex" 
                  className="text-white/60 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  Parfums Unisex
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Informations</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/a-propos" 
                  className="text-white/60 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white/60 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/commande" 
                  className="text-white/60 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  Commander
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/60 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  Livraison & Retours
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/60 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  Conditions Générales
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Ouagadougou, Burkina Faso
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div className="text-white/60 text-sm">
                  <p>+226 664144548</p>
                  <p>+212 630808680</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:contact@4night-fragrance.com" 
                  className="text-white/60 hover:text-amber-500 transition-colors duration-300 text-sm"
                >
                  contact@4night-fragrance.com
                </a>
              </li>
            </ul>

            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-white/40 text-xs mb-3">Méthodes de paiement</p>
              <div className="flex space-x-2">
                <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg inline-block">
                   <span className="text-green-500 text-xs font-bold">💰 Paiement à la livraison</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {currentYear} 4NIGHT FRAGRANCE. Tous droits réservés.
            </p>
            
            <div className="flex items-center space-x-1 text-white/40 text-sm">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>au Burkina Faso</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
