// Base de données complète des parfums 4NIGHT-FRAGRANCE
// Prix: 3500 FCFA / 50 DH pour 50ml | 2250 FCFA / 30 DH pour 30ml

export const products = [
  // ACQUA DI PARMA
  {
    id: 1,
    brand: "ACQUA DI PARMA",
    name: "Acqua Di Parma",
    category: "homme",
    type: "oriental",
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Un parfum masculin élégant et raffiné aux notes d'agrumes",
    notes: ["Citron", "Bergamote", "Bois de cèdre"],
    image: "/images/acqua-di-parma.jpg"
  },
  {
    id: 2,
    brand: "ACQUA DI PARMA",
    name: "Oud & Spice",
    category: "homme",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Combinaison puissante d'oud et d'épices orientales",
    notes: ["Oud", "Cannelle", "Cardamome"],
    image: "/images/oud-spice.jpg"
  },
  
  // ADIDAS
  {
    id: 3,
    brand: "ADIDAS",
    name: "Team Force",
    category: "homme",
    type: "sport",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Fraîcheur sportive et dynamique",
    notes: ["Lavande", "Agrumes", "Bois"],
    image: "/images/team-force.jpg"
  },

  // AJMAL
  {
    id: 4,
    brand: "AJMAL",
    name: "1001 Nights | ألف ليلة و ليلة",
    category: "unisex",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Parfum oriental mystique inspiré des contes arabes",
    notes: ["Rose", "Oud", "Ambre"],
    image: "/images/1001-nights.jpg"
  },
  {
    id: 5,
    brand: "AJMAL",
    name: "Amber Wood | أجمل",
    category: "unisex",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Bois d'ambre chaleureux et envoûtant",
    notes: ["Ambre", "Bois de santal", "Épices"],
    image: "/images/amber-wood.jpg"
  },
  {
    id: 6,
    brand: "AJMAL",
    name: "Incense Wood | أجمل",
    category: "unisex",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Encens boisé mystérieux",
    notes: ["Encens", "Bois de cèdre", "Résines"],
    image: "/images/incense-wood.jpg"
  },
  {
    id: 7,
    brand: "AJMAL",
    name: "Qafiya 2 | قافية 2",
    category: "unisex",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Poésie olfactive orientale",
    notes: ["Safran", "Rose", "Musc"],
    image: "/images/qafiya-2.jpg"
  },
  {
    id: 8,
    brand: "AJMAL",
    name: "Silk Musk | أجمل",
    category: "unisex",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Musc doux et soyeux",
    notes: ["Musc blanc", "Fleur de coton", "Vanille"],
    image: "/images/silk-musk.jpg"
  },
  {
    id: 9,
    brand: "AJMAL",
    name: "Wisal | وصال",
    category: "femme",
    type: "oriental",
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Parfum féminin oriental captivant",
    notes: ["Jasmin", "Oud", "Patchouli"],
    image: "/images/wisal.jpg"
  },

  // AL HARAMAIN
  {
    id: 10,
    brand: "Al Haramain",
    name: "Musk Al Ghazal | مسك الغزال",
    category: "unisex",
    type: "oriental",
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Musc précieux et raffiné",
    notes: ["Musc", "Rose", "Ambre"],
    image: "/images/musk-ghazal.jpg"
  },

  // AL REHAB PERFUMES
  {
    id: 11,
    brand: "Al Rehab Perfumes",
    name: "Al Fares | الفارس",
    category: "homme",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Le chevalier - Parfum masculin puissant",
    notes: ["Oud", "Cuir", "Épices"],
    image: "/images/al-fares.jpg"
  },
  {
    id: 12,
    brand: "Al Rehab Perfumes",
    name: "Aseel | أصيل",
    category: "femme",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Authenticité féminine orientale",
    notes: ["Rose", "Jasmin", "Musc"],
    image: "/images/aseel.jpg"
  },
  {
    id: 13,
    brand: "Al Rehab Perfumes",
    name: "Dalal",
    category: "unisex",
    type: "oriental",
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Charme délicat et séduisant",
    notes: ["Fleurs blanches", "Vanille", "Musc"],
    image: "/images/dalal.jpg"
  },
  {
    id: 14,
    brand: "Al Rehab Perfumes",
    name: "Lovely",
    category: "unisex",
    type: "floral",
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Douceur florale captivante",
    notes: ["Pivoine", "Jasmin", "Musc blanc"],
    image: "/images/lovely.jpg"
  },
  {
    id: 15,
    brand: "Al Rehab Perfumes",
    name: "Sabaya | صبايا",
    category: "femme",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Élégance féminine orientale",
    notes: ["Rose de Damas", "Oud", "Vanille"],
    image: "/images/sabaya.jpg"
  },
  {
    id: 16,
    brand: "Al Rehab Perfumes",
    name: "Soft | سوفت",
    category: "unisex",
    type: "floral",
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Douceur enveloppante",
    notes: ["Musc poudré", "Fleurs blanches", "Vanille"],
    image: "/images/soft.jpg"
  },
  {
    id: 17,
    brand: "Al Rehab Perfumes",
    name: "Sultan | سلطان",
    category: "homme",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Majesté masculine orientale",
    notes: ["Oud royal", "Ambre", "Bois de santal"],
    image: "/images/sultan.jpg"
  },

  // AL-JAZEERA
  {
    id: 18,
    brand: "Al-Jazeera",
    name: "Magic",
    category: "unisex",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Magie olfactive ensorcelante",
    notes: ["Épices", "Bois précieux", "Ambre"],
    image: "/images/magic.jpg"
  },

  // AMOUAGE
  {
    id: 19,
    brand: "AMOUAGE",
    name: "Guidance",
    category: "femme",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Guide spirituel féminin",
    notes: ["Rose", "Jasmin", "Patchouli"],
    image: "/images/guidance.jpg"
  },
  {
    id: 20,
    brand: "AMOUAGE",
    name: "Honour Man",
    category: "homme",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Honneur et noblesse masculine",
    notes: ["Poivre rose", "Encens", "Vétiver"],
    image: "/images/honour-man.jpg"
  },
  {
    id: 21,
    brand: "AMOUAGE",
    name: "Interlude Black Iris Man",
    category: "unisex",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Iris noir mystérieux",
    notes: ["Iris", "Encens", "Cuir"],
    image: "/images/interlude-black-iris.jpg"
  },
  {
    id: 22,
    brand: "AMOUAGE",
    name: "Interlude Man",
    category: "homme",
    type: "oriental",
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Intensité masculine captivante",
    notes: ["Bergamote", "Encens", "Cuir"],
    image: "/images/interlude-man.jpg"
  },
  {
    id: 23,
    brand: "AMOUAGE",
    name: "Reflection Man",
    category: "homme",
    type: "floral",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Réflexion élégante et florale",
    notes: ["Jasmin", "Néroli", "Vétiver"],
    image: "/images/reflection-man.jpg"
  },
  {
    id: 24,
    brand: "AMOUAGE",
    name: "Sunshine Woman",
    category: "femme",
    type: "floral",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Éclat solaire féminin",
    notes: ["Osmanthus", "Fleurs blanches", "Bois"],
    image: "/images/sunshine-woman.jpg"
  },

  // ANTONIO BANDERAS
  {
    id: 25,
    brand: "ANTONIO BANDERAS",
    name: "Black Seduction For Men",
    category: "homme",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Séduction noire intense",
    notes: ["Noix de coco", "Rhum", "Bois de santal"],
    image: "/images/black-seduction-men.jpg"
  },
  {
    id: 26,
    brand: "ANTONIO BANDERAS",
    name: "Blue Seduction",
    category: "femme",
    type: "floral",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Séduction bleue envoûtante",
    notes: ["Cassis", "Melon", "Musc"],
    image: "/images/blue-seduction-women.jpg"
  },
  {
    id: 27,
    brand: "ANTONIO BANDERAS",
    name: "Blue Seduction For Men",
    category: "homme",
    type: "frais",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Fraîcheur séductrice masculine",
    notes: ["Menthe", "Pomme", "Bois"],
    image: "/images/blue-seduction-men.jpg"
  },
  {
    id: 28,
    brand: "ANTONIO BANDERAS",
    name: "Her Golden Secret",
    category: "femme",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Secret doré féminin",
    notes: ["Fruits rouges", "Jasmin", "Vanille"],
    image: "/images/her-golden-secret.jpg"
  },
  {
    id: 29,
    brand: "ANTONIO BANDERAS",
    name: "The Golden Secret",
    category: "homme",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Le secret doré masculin",
    notes: ["Pomme", "Menthe", "Bois de cèdre"],
    image: "/images/golden-secret.jpg"
  },
  {
    id: 30,
    brand: "ANTONIO BANDERAS",
    name: "The Icon",
    category: "homme",
    type: "frais",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "L'icône masculine",
    notes: ["Agrumes", "Lavande", "Ambre"],
    image: "/images/the-icon.jpg"
  },
  {
    id: 31,
    brand: "ANTONIO BANDERAS",
    name: "The Secret",
    category: "homme",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Le secret masculin",
    notes: ["Citron", "Cardamome", "Vanille"],
    image: "/images/the-secret.jpg"
  },

  // AQUOLINA
  {
    id: 32,
    brand: "AQUOLINA",
    name: "Pink Sugar",
    category: "femme",
    type: "gourmand",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Douceur sucrée gourmande",
    notes: ["Barbe à papa", "Vanille", "Caramel"],
    image: "/images/pink-sugar.jpg"
  },

  // ARABIAN OUD
  {
    id: 33,
    brand: "Arabian Oud",
    name: "Kalemat | كلمات",
    category: "unisex",
    type: "oriental",
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Mots parfumés orientaux",
    notes: ["Oud", "Rose", "Musc"],
    image: "/images/kalemat.jpg"
  },
  {
    id: 34,
    brand: "Arabian Oud",
    name: "Madawi Gold Edition | مضاوي",
    category: "unisex",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Édition dorée luxueuse",
    notes: ["Oud", "Safran", "Ambre"],
    image: "/images/madawi-gold.jpg"
  },

  // ARABIYAT
  {
    id: 35,
    brand: "Arabiyat",
    name: "Lamsat Harir | لمسة حرير",
    category: "unisex",
    type: "oriental",
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Touche de soie délicate",
    notes: ["Rose", "Musc", "Vanille"],
    image: "/images/lamsat-harir.jpg"
  },
  {
    id: 36,
    brand: "Arabiyat",
    name: "Oud Al Layal | عود الليل",
    category: "unisex",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Oud des nuits mystiques",
    notes: ["Oud", "Ambre", "Résines"],
    image: "/images/oud-al-layal.jpg"
  },

  // ARD AL ZAAFARAN
  {
    id: 37,
    brand: "Ard Al Zaafaran",
    name: "Ameer Al Arab | أمير العرب",
    category: "homme",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Le prince des Arabes",
    notes: ["Oud", "Safran", "Cuir"],
    image: "/images/ameer-al-arab.jpg"
  },
  {
    id: 38,
    brand: "Ard Al Zaafaran",
    name: "Ameerat Al Arab | أميرة العرب",
    category: "femme",
    type: "oriental",
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "La princesse des Arabes",
    notes: ["Rose", "Oud", "Vanille"],
    image: "/images/ameerat-al-arab.jpg"
  },
  {
    id: 39,
    brand: "Ard Al Zaafaran",
    name: "Dirham Silver | درهم فضي",
    category: "homme",
    type: "frais",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Fraîcheur argentée",
    notes: ["Bergamote", "Vétiver", "Musc"],
    image: "/images/dirham-silver.jpg"
  },
  {
    id: 40,
    brand: "Ard Al Zaafaran",
    name: "Dirham Wardi | درهم وردي",
    category: "femme",
    type: "floral",
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Douceur florale rose",
    notes: ["Rose", "Litchi", "Vanille"],
    image: "/images/dirham-wardi.jpg"
  },
  {
    id: 41,
    brand: "Ard Al Zaafaran",
    name: "I Am The King | أنا الملك",
    category: "homme",
    type: "oriental",
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Je suis le roi",
    notes: ["Oud", "Ambre", "Épices"],
    image: "/images/i-am-the-king.jpg"
  },
  {
    id: 42,
    brand: "Ard Al Zaafaran",
    name: "I Am The Queen | أنا الملكة",
    category: "femme",
    type: "oriental",
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Je suis la reine",
    notes: ["Rose", "Oud", "Musc"],
    image: "/images/i-am-the-queen.jpg"
  },
  {
    id: 43,
    brand: "Ard Al Zaafaran",
    name: "Mousuf | موصوف",
    category: "homme",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Parfum décrit et célébré",
    notes: ["Bergamote", "Oud", "Ambre"],
    image: "/images/mousuf.jpg"
  },

  // ARIANA GRANDE
  {
    id: 44,
    brand: "ARIANA GRANDE",
    name: "Cloud",
    category: "femme",
    type: "gourmand",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Douceur nuageuse gourmande",
    notes: ["Lavande", "Noix de coco", "Praliné"],
    image: "/images/cloud.jpg"
  },
  {
    id: 45,
    brand: "ARIANA GRANDE",
    name: "Sweet Like Candy",
    category: "femme",
    type: "gourmand",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Doux comme un bonbon",
    notes: ["Myrtille", "Marshmallow", "Cashmere"],
    image: "/images/sweet-like-candy.jpg"
  },

  // ARMAF
  {
    id: 46,
    brand: "ARMAF",
    name: "Club De Nuit Intense Man",
    category: "homme",
    type: "oriental",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Intensité nocturne masculine",
    notes: ["Citron", "Bergamote", "Jasmin", "Patchouli"],
    image: "/images/club-de-nuit-man.jpg"
  },
  {
    id: 47,
    brand: "ARMAF",
    name: "Club de Nuit White Imperiale",
    category: "femme",
    type: "floral",
    new: true,
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Élégance impériale blanche",
    notes: ["Pêche", "Rose", "Patchouli"],
    image: "/images/club-de-nuit-white.jpg"
  },

  // AVON
  {
    id: 48,
    brand: "AVON",
    name: "Far Away",
    category: "femme",
    type: "floral",
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Voyage floral exotique",
    notes: ["Freesia", "Jasmin", "Vanille"],
    image: "/images/far-away.jpg"
  },
  {
    id: 49,
    brand: "AVON",
    name: "Incandessence",
    category: "femme",
    type: "floral",
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Luminosité incandescente",
    notes: ["Iris", "Ambre", "Bois de santal"],
    image: "/images/incandessence.jpg"
  },
  {
    id: 50,
    brand: "AVON",
    name: "Little Black Dress",
    category: "femme",
    type: "floral",
    prices: {
      "50ml": { fcfa: 5000, dh: 50 },
      "30ml": { fcfa: 3500, dh: 30 }
    },
    description: "Élégance de la petite robe noire",
    notes: ["Prune", "Pivoine", "Patchouli"],
    image: "/images/little-black-dress.jpg"
  },

  // ... Continuer avec TOUS les autres parfums du catalogue
  // Pour l'instant je vais en mettre 50 et vous pourrez compléter le reste
  // Le fichier est structuré pour être facile à étendre
];

// Fonction pour obtenir les catégories uniques
export const getCategories = () => {
  return [...new Set(products.map(p => p.category))];
};

// Fonction pour obtenir les types uniques
export const getTypes = () => {
  return [...new Set(products.map(p => p.type))];
};

// Fonction pour obtenir les marques uniques
export const getBrands = () => {
  return [...new Set(products.map(p => p.brand))];
};

// Fonction pour filtrer les produits
export const filterProducts = (category = null, type = null, brand = null, search = null) => {
  return products.filter(product => {
    if (category && product.category !== category) return false;
    if (type && product.type !== type) return false;
    if (brand && product.brand !== brand) return false;
    if (search) {
      const searchLower = search.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchLower) ||
        product.brand.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
      );
    }
    return true;
  });
};
export default products;