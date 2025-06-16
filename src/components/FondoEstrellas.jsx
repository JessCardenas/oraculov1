import React from "react";
import Estrella from "./Estrellas";

const estrellasConfig = [
  { variant: "grande", delay: 0, size: 44, style: { top: "40%", left: "15%" } },
  {
    variant: "grande",
    delay: 0.3,
    size: 44,
    style: { top: "15%", left: "72%" },
  },
  {
    variant: "grande",
    delay: 0.6,
    size: 44,
    style: { bottom: "35%", left: "78%" },
  },
  {
    variant: "grande",
    delay: 0.9,
    size: 44,
    style: { bottom: "15%", right: "70%" },
  },
  {
    variant: "pequeña",
    delay: 0.2,
    size: 30,
    style: { top: "17%", left: "25%" },
  },
  {
    variant: "pequeña",
    delay: 0.5,
    size: 30,
    style: { bottom: "45%", left: "28%" },
  },
  {
    variant: "pequeña",
    delay: 0.7,
    size: 30,
    style: { top: "35%", right: "20%" },
  },
  {
    variant: "pequeña",
    delay: 1.1,
    size: 30,
    style: { bottom: "15%", right: "25%" },
  },
];

function FondoEstrellas() {
  return (
    <div className="fondo-estrellas">
      {estrellasConfig.map((estrella, index) => (
        <Estrella key={index} {...estrella} />
      ))}
    </div>
  );
}

export default FondoEstrellas;
