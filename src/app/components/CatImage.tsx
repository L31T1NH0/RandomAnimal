"use client";
import React, { useState } from "react";
import Image from "next/image";
import BotaoGato from "./BotaoGato";

interface CatImageProps {}

function CatImage(_props: CatImageProps) {
  const [imagem, setImagem] = useState("");

  const getCat = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => setImagem(data[0].url));
  };

  return (
    <div className='flex flex-col mx-auto'>
      <BotaoGato getCat={getCat} />
      {imagem && 
      
      <Image 
        src={imagem}
        alt="Gato"
        width={360}
        height={360}
        className="rounded-sm my-8"
      />
      
      }
    </div>
  );
}

export default CatImage;
