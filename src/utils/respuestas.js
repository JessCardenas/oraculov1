export const obtenerRespuesta = () => {
  const respuestas = ["Sí", "No", "Tal vez"];
  const indice = Math.floor(Math.random() * respuestas.length);
  return respuestas[indice];
};
