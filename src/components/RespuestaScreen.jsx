import Bola from "../assets/images/Bola_manos_sin.png";
import "../StyleSheets/RespuestasScreen.css";

function RespuestaScreen({ pregunta, respuesta, volver }) {
  return (
    <div className="respuesta-screen flex flex-col items-center justify-center  container max-w-5xl  -translate-y-10 md:-translate-y-0 ">
      <h1 className="h1Respuesta"> El destino ha hablado </h1>
      <h2 className="Pregunta">{pregunta}</h2>

      <div className="bola-y-texto relative w-4/5 max-w-md">
        <img
          src={Bola}
          alt="Respuesta"
          className="RespuestaBola w-full h-auto "
        />
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
