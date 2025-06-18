import Bola_manos from "../assets/images/Bola_manos.svg";
import Estrella_vector from "../assets/images/Estrella_vector.png";
import "../StyleSheets/HomeScreen.css";

function HomeScreen({ cambiarPantalla }) {
  return (
    <div className="home-screen text-center container mx-auto min-h-screen overflow-hidden flex flex-col justify-center p-8">
      <h1 className="inicio max-w-xl mx-auto mt-9">
        ¿Dejamos que el destino decida por ti?
      </h1>

      <h2 className="subtitulo font-medium max-w-2xl mx-auto my-4 text-center">
        El destino es sabio, pero sus respuestas son breves: "Sí", "No" o "Tal
        vez".
      </h2>

      <div className="flex flex-col md:flex-row  items-center justify-evenly max-w-5xl mx-auto px-4 ">
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
          <img
            src={Bola_manos}
            alt="Pregunta al Oráculo"
            className="bolaManos md:block w-4/5 max-w-md mx-auto"
          />{" "}
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
