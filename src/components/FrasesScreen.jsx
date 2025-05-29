// src/components/FrasesScreen.jsx
import React, { useEffect, useState } from "react";
import { obtenerFrase } from "../utils/frases";

function FrasesScreen({ volver }) {
  const [frase, setFrase] = useState("");

  useEffect(() => {
    const nuevaFrase = obtenerFrase();
    setFrase(nuevaFrase);
  }, []);

  return (
    <div className="text-center space-y-6">
      <p className="text-xl italic text-yellow-200 max-w-xl mx-auto">{frase}</p>
      <button
        onClick={() => volver("home")}
        className="mt-6 px-6 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg"
      >
        Volver al inicio
      </button>
    </div>
  );
}

export default FrasesScreen;
