import { useState } from "react";
import { obtenerRespuesta } from "../utils/respuestas";
import Eye from "../assets/images/Eye1.png";
import "../StyleSheets/OraculoScreen.css";

function OraculoScreen({ setPregunta, setRespuesta, cambiarPantalla }) {
  const [input, setInput] = useState("");

  const manejarPregunta = () => {
    if (input.trim() === "") return;
    setPregunta(input);
    const respuesta = obtenerRespuesta();
    setRespuesta(respuesta);
    cambiarPantalla("respuesta");
  };

  return (
    <div className="pantalla-oraculo flex flex-col items-center justify-center container max-w-4xl min-h-screen">
      <img src={Eye} alt="EyeSticker" className="eyeSticker" />
      <h1 className="h1screenoraculo">Haz tu pregunta al destino</h1>
      <h2 className="text-center text-lg mb-4">
        El oráculo te escuchará y te dará una respuesta
      </h2>
      <input
        type="text"
        placeholder="¿Qué deseas saber?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="cajaPregunta"
      />
      <button
        onClick={manejarPregunta}
        className="botonPreguntar block mx-auto "
      >
        Preguntar
      </button>
    </div>
  );
}
export default OraculoScreen;
