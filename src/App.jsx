import { useState } from "react";
import HomeScreen from "./components/HomeScreen";
import OraculoScreen from "./components/OraculoScreen";
import RespuestaScreen from "./components/RespuestaScreen";
import "./App.css";

function App() {
  const [pantalla, setPantalla] = useState("home");
  const [pregunta, setPregunta] = useState("");
  const [respuesta, setRespuesta] = useState("");

  return (
    <div className="min-h-screen text-white flex items-center justify-center">
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
    </div>
  );
}

export default App;
