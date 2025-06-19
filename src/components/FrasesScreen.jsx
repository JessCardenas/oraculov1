// src/components/FrasesScreen.jsx
import React, { useEffect, useState } from "react";
import { obtenerFrase } from "../utils/frases";
import Ojo_sticker from "../assets/images/Ojo_sticker.png";
import "../StyleSheets/FrasesScreen.css";

function FrasesScreen({ volver }) {
  const [frase, setFrase] = useState("");

  useEffect(() => {
    const nuevaFrase = obtenerFrase();
    setFrase(nuevaFrase);
  }, []);

  return (
    <div className="text-center flex flex-col items-center justify-center max-w-2xl mx-auto px-4 overflow-y-hidden h-screen  -translate-y-2 md:-translate-y-0">
      <img src={Ojo_sticker} alt="ojoSticker" className="ojoSticker  " />
      <p className="fraseRandom max-w-xl">{frase}</p>
      <button onClick={() => volver("home")} className="botonInicio">
        Inicio
      </button>
    </div>
  );
}

export default FrasesScreen;
