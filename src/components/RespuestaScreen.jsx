function RespuestaScreen({ pregunta, respuesta, volver }) {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-bold"> Tu pregunta: </h2>
      <p className="italic">{pregunta}</p>
      <div className="text-3xl font-bold text-green-400 animate-pulse">
        {" "}
        {respuesta}
      </div>
      <button
        onClick={() => volver("home")}
        className="mt-6 px-6 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg"
      >
        Volver al inicio
      </button>
    </div>
  );
}

export default RespuestaScreen;
