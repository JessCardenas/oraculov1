function HomeScreen({ cambiarPantalla }) {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-7xl font-bold">
        ¿Dejamos que el destino decida por ti?
      </h2>
      <h1 className="text-4xl font-bold">Oráculo</h1>
      <h3 className="text-xl">Haz tu pregunta y recibe la verdad mística</h3>
      <button
        onClick={() => cambiarPantalla("oraculo")}
        className="mt-4 px-6 py-3 bg-purple-700 hover:bg-purple-800 rounded-lg"
      >
        Consultar al oráculo
      </button>
    </div>
  );
}

export default HomeScreen;
