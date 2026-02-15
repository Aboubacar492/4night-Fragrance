import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  const [volume, setVolume] = useState("30ml");

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Parfum introuvable
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-8 py-12">
      <div className="max-w-3xl mx-auto bg-neutral-900 p-8 rounded-xl">
        
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-400 mt-2">{product.notes}</p>

        <p className="mt-6 text-gray-300">
          {product.description}
        </p>

        {/* Choix volume */}
        <div className="mt-8">
          <p className="mb-3 font-semibold">Choisir le volume</p>

          <div className="flex gap-4">
            {["30ml", "50ml"].map((v) => (
              <button
                key={v}
                onClick={() => setVolume(v)}
                className={`px-5 py-2 rounded border
                  ${
                    volume === v
                      ? "border-yellow-500 text-yellow-500"
                      : "border-gray-600 text-gray-400"
                  }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {/* Prix */}
        <div className="mt-8 text-xl font-bold">
          Prix : {product.prices[volume]} FCFA
        </div>

        {/* Acheter */}
        <button
          onClick={() =>
            navigate("/checkout", {
              state: {
                product,
                volume,
                price: product.prices[volume],
              },
            })
          }
          className="mt-8 w-full bg-yellow-500 text-black py-3 rounded font-semibold hover:bg-yellow-400 transition"
        >
          Acheter maintenant
        </button>
      </div>
    </div>
  );
}
