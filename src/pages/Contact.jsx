import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Envoyer le formulaire à votre backend
      console.log('Form data:', formData);
      
      // Simulation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: ''
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            Contactez-<span className="text-amber-500">nous</span>
          </h1>
          <p className="text-white/60 text-lg">
            Notre équipe est à votre écoute
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Informations de contact */}
          <div className="lg:col-span-1 space-y-6">
            {/* Téléphone */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-amber-500/10 hover:border-amber-500/30 p-6 transition-all duration-500">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Téléphone</h3>
              <p className="text-white/60 mb-3">Appelez-nous du lundi au samedi</p>
              <a href="tel:+22666414548" className="text-amber-500 hover:text-amber-400 font-semibold block">
                +226 66 41 45 48
              </a>
              <a href="tel:+212630808680" className="text-amber-500 hover:text-amber-400 font-semibold block">
                +212 630 80 86 80
              </a>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-amber-500/10 hover:border-amber-500/30 p-6 transition-all duration-500">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Email</h3>
              <p className="text-white/60 mb-3">Écrivez-nous à tout moment</p>
              <a href="mailto:contact@4night-fragrance.com" className="text-amber-500 hover:text-amber-400 font-semibold">
                contact@4night-fragrance.com
              </a>
            </div>

            {/* Horaires */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-amber-500/10 hover:border-amber-500/30 p-6 transition-all duration-500">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Horaires</h3>
              <div className="space-y-2 text-white/70">
                <p>24h/24 7j/7</p>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-amber-500/10 p-6">
              <h3 className="text-white text-xl font-bold mb-4">Suivez-nous</h3>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/50 rounded-lg flex items-center justify-center text-white hover:text-blue-500 transition-all duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/50 rounded-lg flex items-center justify-center text-white hover:text-pink-500 transition-all duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-blue-400/20 border border-white/10 hover:border-blue-400/50 rounded-lg flex items-center justify-center text-white hover:text-blue-400 transition-all duration-300"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-amber-500/10 p-8">
              <h2 className="text-3xl font-black text-white mb-6">Envoyez-nous un message</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-xl text-green-500">
                  ✓ Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-500">
                  ✗ Une erreur est survenue. Veuillez réessayer.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                      placeholder="+226 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Sujet *
                    </label>
                    <select
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="commande">Question sur une commande</option>
                      <option value="produit">Information produit</option>
                      <option value="livraison">Livraison</option>
                      <option value="paiement">Paiement</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-amber-500/50 transition-all duration-300 resize-none"
                    placeholder="Écrivez votre message ici..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-gray-500 disabled:to-gray-600 text-black font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg shadow-amber-500/30"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-gradient-to-br from-amber-900/20 to-orange-950/20 rounded-3xl border border-amber-500/20 p-8 sm:p-12">
          <h2 className="text-3xl font-black text-white mb-8 text-center">
            Questions <span className="text-amber-500">Fréquentes</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-bold mb-2">Comment passer une commande ?</h3>
              <p className="text-white/60 text-sm">
                Ajoutez vos parfums au panier, remplissez le formulaire de commande et passez la commande afin de vous faire livrer dans les plus bref délais.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-2">Quels sont les délais de livraison ?</h3>
              <p className="text-white/60 text-sm">
                Nous livrons généralement sous 24h à Ouagadougou et 2-3 jours dans les autres villes du Burkina Faso.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-2">Les produits sont-ils authentiques ?</h3>
              <p className="text-white/60 text-sm">
                Oui, tous nos parfums sont 100% authentiques et proviennent directement des marques officielles.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-2">Puis-je retourner un produit ?</h3>
              <p className="text-white/60 text-sm">
                Les produits non ouverts peuvent être retournés sous 7 jours. Contactez-nous pour plus d'informations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
