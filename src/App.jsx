import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import OraculoScreen from "./components/OraculoScreen";
import RespuestaScreen from "./components/RespuestaScreen";
import FrasesScreen from "./components/FrasesScreen";
import "./App.css";
import upper_clouds from "./assets/images/upper_clouds.png";
import Clouds_above from "./assets/images/Clouds_above.svg";
import FondoEstrellas from "./components/FondoEstrellas";
function App() {
  const [pantalla, setPantalla] = useState("home");
  const [pregunta, setPregunta] = useState("");
  const [respuesta, setRespuesta] = useState("");

  return (
    <div className="app-screen h-screen flex items-center justify-center overflow-hidden p-4 sm:p-8">
      <img src={upper_clouds} alt="Nubes fondo" className="upperClouds" />
      <FondoEstrellas />

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
