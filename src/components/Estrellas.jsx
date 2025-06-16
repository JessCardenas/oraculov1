import React from "react";
import "../StyleSheets/Estrellas.css";

const Estrella = ({ delay = 0, size = 44, variant = "grande", style = {} }) => {
  const svgPaths = {
    grande: (
      <path
        fill="#D5B993"
        d="M22.118 0c2.825 3.331 1.573 9.681 4.013 13.334 3.476 5.204 11.867 6.484 17.589 7.702-4.508 1.366-9.835 1.98-13.873 4.492-5.66 3.521-6.516 11.199-7.815 17.183l-.552-.099c-.287-4.715-1.521-9.733-4.062-13.771C13.972 23.364 5.812 22.629 0 21.406c4.68-1.115 10.04-1.987 14.088-4.702 5.694-3.82 6.669-10.517 8.03-16.704Z"
      />
    ),
    pequeña: (
      <path
        fill="#D5B993"
        d="M22.13 12c1.422 1.638.791 4.76 2.02 6.556 1.749 2.559 5.971 3.188 8.85 3.787-2.268.672-4.949.974-6.981 2.209-2.848 1.73-3.279 5.506-3.932 8.448l-.278-.049c-.145-2.318-.766-4.785-2.044-6.77-1.734-2.693-5.84-3.055-8.765-3.656 2.355-.548 5.052-.977 7.09-2.312 2.864-1.878 3.355-5.17 4.04-8.213Z"
      />
    ),
  };

  const combinedStyle = {
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    ...style,
  };

  return (
    <div className="estrella-wrapper" style={combinedStyle}>
      <svg
        className="estrella animacion-parpadeo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 44 44"
        fill="none"
      >
        {svgPaths[variant]}
      </svg>
    </div>
  );
};

export default Estrella;
