export const obtenerFrase = () => {
  const frases = [
    "Afortunado eres por tomar las riendas de tu vida",
    "Cuando te atreves a ser tú, la magia empieza a suceder",
    "Estás en el camino correcto, sigue adelante",
    "La vida es un viaje, disfruta cada paso",
    "Confía en tu intuición, ella te guiará",
    "Cada día es una nueva oportunidad para brillar",
    "El universo conspira a tu favor cuando sigues tu pasión",
    "Tu sonrisa puede cambiar el mundo",
    "Eres más fuerte de lo que crees",
    "La gratitud transforma lo ordinario en extraordinario",
  ];
  const indice = Math.floor(Math.random() * frases.length);
  return frases[indice];
};
