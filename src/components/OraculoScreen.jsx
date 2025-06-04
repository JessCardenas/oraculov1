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
    <div className="text-center">
      <img src={Eye} alt="EyeSticker" className="eyeSticker" />
      <h1 className="text-2xl font-semibold">Haz tu pregunta al destino</h1>
      <h2>
        Recuerda que el destino es sabio, pero sus respuestas son breves: 'Sí',
        'No' o 'Tal vez'.
      </h2>
      <input
        type="text"
        placeholder="¿Qué deseas saber?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="cajaPregunta p-2 rounded-md "
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
