import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import OraculoScreen from "./components/OraculoScreen";
import RespuestaScreen from "./components/RespuestaScreen";
import FrasesScreen from "./components/FrasesScreen";
import "./App.css";
import upper_clouds from "./assets/images/upper_clouds.png";
import fondo_estrellas from "./assets/images/fondo_estrellas.png";
import Clouds_above from "./assets/images/Clouds_above.svg";

function App() {
  const [pantalla, setPantalla] = useState("home");
  const [pregunta, setPregunta] = useState("");
  const [respuesta, setRespuesta] = useState("");

  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <img
        src={upper_clouds}
        alt="Nubes fondo"
        className="upperClouds max-w-xl"
      />
      <img
        src={fondo_estrellas}
        alt="Fondo estrellas"
        className="fondoEstrellas hidden md:block"
      />

      {pantalla === "home" && <HomeScreen cambiarPantalla={setPantalla} />}
      {pantalla === "oraculo" && (
        <OraculoScreen
          setPregunta={setPregunta}
          setRespuesta={setRespuesta}
          cambiarPantalla={setPantalla}
        />
      )}
      {pantalla === "respuesta" && (
        <RespuestaScreen
          pregunta={pregunta}
          respuesta={respuesta}
          volver={setPantalla}
        />
      )}
      {pantalla === "frases" && <FrasesScreen volver={setPantalla} />}

      <img src={Clouds_above} alt="Nubes fondo" className="underClouds" />
    </div>
  );
}

export default App;
