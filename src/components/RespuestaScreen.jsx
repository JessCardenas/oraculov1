import Bola from "../assets/images/Bola_manos_sin.png";
import "../StyleSheets/RespuestasScreen.css";

function RespuestaScreen({ pregunta, respuesta, volver }) {
  return (
    <div className="flex flex-col items-center justify-evenly px-4 container max-w-5xl gap-y-1">
      <h1 className="h1Respuesta"> El destino ha hablado </h1>
      <h2 className="Pregunta">{pregunta}</h2>

      <div className="relative w-4/5 max-w-md">
        <img src={Bola} alt="Respuesta" className="RespuestaBola w-full h-auto " />
        <p className="RespuestaTexto absolute inset-0 flex items-center justify-center md:text-4xl animate-pulse">
          {" "}
          {respuesta}
        </p>
      </div>

      <button onClick={() => volver("home")} className="botonInicio">
        Inicio
      </button>
    </div>
  );
}

export default RespuestaScreen;
