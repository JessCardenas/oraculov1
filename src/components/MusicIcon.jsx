function MusicIcon({ playing }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 64 64"
      fill="#D5B993"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="24"
        width="6"
        height="16"
        rx="3"
        fill={playing ? "#D5B993" : "#aaa"}
      />
      <rect
        x="14"
        y="16"
        width="6"
        height="32"
        rx="3"
        fill={playing ? "#D5B993" : "#aaa"}
      />
      <rect
        x="24"
        y="8"
        width="6"
        height="48"
        rx="3"
        fill={playing ? "#D5B993" : "#aaa"}
      />
      <rect
        x="34"
        y="16"
        width="6"
        height="32"
        rx="3"
        fill={playing ? "#D5B993" : "#aaa"}
      />
      <rect
        x="44"
        y="12"
        width="6"
        height="40"
        rx="3"
        fill={playing ? "#D5B993" : "#aaa"}
      />
      <rect
        x="54"
        y="24"
        width="6"
        height="16"
        rx="3"
        fill={playing ? "#D5B993" : "#aaa"}
      />
    </svg>
  );
}

export default MusicIcon;
