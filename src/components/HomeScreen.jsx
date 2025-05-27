import Bola_manos from "../assets/images/Bola_manos.png";

function HomeScreen({ cambiarPantalla }) {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-8xl font-bold font-starlight">
        ¿Dejamos que el destino decida por ti?
      </h2>
      <h1 className="text-4xl">
        El destino es sabio, pero sus respuestas son breves: "Sí", "No" o "Tal
        vez".
      </h1>

      <button
        onClick={() => cambiarPantalla("oraculo")}
        className="mt-4 px-6 py-3   rounded-lg"
      >
        <img src={Bola_manos} alt="Pregunta al Oráculo" />
      </button>
    </div>
  );
}

export default HomeScreen;
