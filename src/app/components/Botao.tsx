import React from "react";

interface BotaoProps {
  onClick: () => void;
}

function Botao(props: BotaoProps) {

  return (
    <div className="flex mx-auto">
      <button className="p-2 bg-white hover:bg-white/90 transition-colors rounded-sm" onClick={props.onClick}>
        Clique em mim :3
      </button>
    </div>
  );
}

export default Botao;
