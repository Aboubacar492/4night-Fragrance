import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, CheckCircle, Truck, Phone } from 'lucide-react';

const Checkout = ({ cart, clearCart, currency }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    ville: 'Ouagadougou',
    quartier: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  const currencySymbol = currency === 'fcfa' ? 'FCFA' : 'DH';
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Validation du formulaire
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis';
    if (!formData.telephone.trim()) newErrors.telephone = 'Le téléphone est requis';
    if (!formData.adresse.trim()) newErrors.adresse = 'L\'adresse est requise';
    if (!formData.quartier.trim()) newErrors.quartier = 'Le quartier est requis';
    
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  if (cart.length === 0) {
    alert('Votre panier est vide');
    return;
  }

  setIsProcessing(true);

  try {
    // ✅ URL Render avec HTTPS
    const response = await fetch('https://fournight-backend.onrender.com/api/orders/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customer: formData,
        cart: cart,
        total: total,
        currency: currency,
        paymentMethod: 'Paiement à la livraison'
      })
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (data.success) {
      const orderNumber = data.order.orderNumber;
      
      clearCart();
      
      alert(`✅ Commande #${orderNumber} créée avec succès !\n\nNous vous contacterons sous peu pour confirmer votre commande.\n\nMontant : ${total.toLocaleString()} ${currencySymbol}\nPaiement à la livraison`);
      
      navigate('/');
    } else {
      alert('❌ Erreur: ' + (data.message || 'Une erreur est survenue'));
    }
    
  } catch (error) {
    console.error('Erreur lors de la commande:', error);
    alert('❌ Impossible de créer la commande.\n\nLe serveur peut être en train de se réveiller (peut prendre 1 minute).\n\nVeuillez réessayer dans quelques secondes.');
  } finally {
    setIsProcessing(false);
  }
};

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-black pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-white text-3xl font-bold mb-4">Votre panier est vide</h2>
          <button
            onClick={() => navigate('/collections')}
            className="text-amber-500 hover:text-amber-400 font-semibold"
          >
            Retour aux collections
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Finaliser ma commande
          </h1>
          <p className="text-white/60">Paiement à la livraison - Nous vous contacterons pour confirmation</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulaire */}
            <div className="lg:col-span-2 space-y-6">
              {/* Informations personnelles */}
              <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-amber-500/10 p-6">
                <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
                    1
                  </span>
                  Vos informations
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black/50 border ${
                        errors.nom ? 'border-red-500' : 'border-white/10'
                      } rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300`}
                      placeholder="Votre nom"
                    />
                    {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black/50 border ${
                        errors.prenom ? 'border-red-500' : 'border-white/10'
                      } rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300`}
                      placeholder="Votre prénom"
                    />
                    {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom}</p>}
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Téléphone * 📱
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black/50 border ${
                        errors.telephone ? 'border-red-500' : 'border-white/10'
                      } rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300`}
                      placeholder="+226 XX XX XX XX"
                    />
                    {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>}
                    <p className="text-white/40 text-xs mt-1">Nous vous appellerons pour confirmer</p>
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
                      className={`w-full px-4 py-3 bg-black/50 border ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      } rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
              </div>

              {/* Adresse de livraison */}
              <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-amber-500/10 p-6">
                <h2 className="text-white text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
                    2
                  </span>
                  Adresse de livraison
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Ville *
                    </label>
                    <select
                      name="ville"
                      value={formData.ville}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                    >
                      <option value="Ouagadougou">Ouagadougou</option>
                      <option value="Bobo-Dioulasso">Bobo-Dioulasso</option>
                      <option value="Koudougou">Koudougou</option>
                      <option value="Banfora">Banfora</option>
                      <option value="Autre">Autre ville</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Quartier *
                    </label>
                    <input
                      type="text"
                      name="quartier"
                      value={formData.quartier}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black/50 border ${
                        errors.quartier ? 'border-red-500' : 'border-white/10'
                      } rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300`}
                      placeholder="Ex: Ouaga 2000, Dapoya, etc."
                    />
                    {errors.quartier && <p className="text-red-500 text-xs mt-1">{errors.quartier}</p>}
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Adresse complète *
                    </label>
                    <textarea
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleChange}
                      rows="3"
                      className={`w-full px-4 py-3 bg-black/50 border ${
                        errors.adresse ? 'border-red-500' : 'border-white/10'
                      } rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-all duration-300 resize-none`}
                      placeholder="Indiquez des points de repère pour faciliter la livraison"
                    />
                    {errors.adresse && <p className="text-red-500 text-xs mt-1">{errors.adresse}</p>}
                  </div>
                </div>
              </div>

              {/* Mode de paiement */}
              <div className="bg-gradient-to-br from-green-900/20 to-green-950/20 rounded-2xl border border-green-500/20 p-6">
                <h2 className="text-white text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-bold mr-3">
                    💰
                  </span>
                  Paiement à la livraison
                </h2>
                <p className="text-white/70 text-sm">
                  Vous paierez en espèces lors de la réception de vos parfums. Nous acceptons les FCFA et les Dirhams.
                </p>
              </div>
            </div>

            {/* Résumé de commande */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* Récapitulatif */}
                <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-amber-500/20 p-6">
                  <h2 className="text-white text-2xl font-bold mb-6">Récapitulatif</h2>

                  {/* Produits */}
                  <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                    {cart.map((item, index) => (
                      <div key={`${item.id}-${item.selectedSize}-${index}`} className="flex items-center justify-between text-sm">
                        <div className="flex-1">
                          <p className="text-white font-medium">{item.name}</p>
                          <p className="text-white/60 text-xs">{item.selectedSize} × {item.quantity}</p>
                        </div>
                        <p className="text-amber-500 font-bold">
                          {(item.price * item.quantity).toLocaleString()} {currencySymbol}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-white/10 my-4"></div>

                  {/* Total */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-white/60">
                      <span>Sous-total</span>
                      <span>{total.toLocaleString()} {currencySymbol}</span>
                    </div>
                    <div className="flex items-center justify-between text-white/60">
                      <span>Livraison</span>
                      <span className="text-green-500 font-semibold">GRATUITE A LA 1ère COMMANDE</span>
                    </div>
                    
                    <div className="h-px bg-white/10"></div>

                    <div className="flex items-center justify-between">
                      <span className="text-white text-lg font-bold">Total à payer</span>
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
                </div>

                {/* Bouton Commander */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg shadow-green-500/30"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Commander maintenant</span>
                    </>
                  )}
                </button>

                {/* Informations */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 text-white/60 text-sm">
                    <Phone className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Nous vous appellerons pour confirmer</span>
                  </div>
                  <div className="flex items-start space-x-3 text-white/60 text-sm">
                    <Truck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Livraison rapide à domicile</span>
                  </div>
                  <div className="flex items-start space-x-3 text-white/60 text-sm">
                    <Package className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Paiement en espèces à la livraison</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
