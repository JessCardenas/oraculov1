import { useState } from "react";
import { obtenerRespuesta } from "../utils/respuestas";

function OraculoScreen({ setPregunta, setRespuesta, cambiarPantalla }) {
  const [input, setInput] = useState("");

  const manejarPregunta = () => {
    if (input.trim() === "") return;
    setPregunta(input);
    const respuesta = obtenerRespuesta();
    setRespuesta(respuesta);
    cambiarPantalla("resultado");
  };

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-semibold">Haz tu pregunta</h2>
      <input
        type="text"
        placeholder="¿Qué deseas saber?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 rounded-md text-black"
      />
      <button
        onClick={manejarPregunta}
        className="block mx-auto mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700"
      >
        Preguntar
      </button>
    </div>
  );
}
export default OraculoScreen;
