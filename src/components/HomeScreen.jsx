import Bola_manos from "../assets/images/Bola_manos.svg";
import Estrella_vector from "../assets/images/Estrella_vector.png";
import "../StyleSheets/HomeScreen.css";

function HomeScreen({ cambiarPantalla }) {
  return (
    <div className="text-center container mx-auto min-h-screen flex flex-col justify-center px-4">
      <h1 className="inicio max-w-xl mx-auto">
        ¿Dejamos que el destino decida por ti?
      </h1>
      <h2 className="text-4xl">
        El destino es sabio, pero sus respuestas son breves: "Sí", "No" o "Tal
        vez".
      </h2>

      <div className="flex items-center justify-around">
        <div>
          <button
            onClick={() => cambiarPantalla("oraculo")}
            className="boton group relative flex items-center justify-center"
          >
            <img src={Estrella_vector} alt="Estrella" className="estrella" />

            <p className="respuestaHomescreen z-10">Sí</p>
          </button>
        </div>

        <div>
          <img src={Bola_manos} alt="Pregunta al Oráculo" />{" "}
        </div>
        <div>
          <button
            onClick={() => cambiarPantalla("frases")}
            className="boton group relative flex items-center justify-center"
          >
            <p className="respuestaHomescreen z-10">No</p>
            <img src={Estrella_vector} className="estrella" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
