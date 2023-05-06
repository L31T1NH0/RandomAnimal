import React from "react";

interface BotaoGatoProps {
  getCat: () => void;
}

function BotaoGato(props: BotaoGatoProps) {
  return (
    <button
      className="bg-zinc-950 hover:bg-zinc-800/90 text-white p-1 rounded-sm transition-colors w-32 mx-auto"
      onClick={props.getCat}
    >
      Gatito :3
    </button>
  );
}

export default BotaoGato;
