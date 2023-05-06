"use client";
import React, { useState } from "react";
import Image from "next/image";
import Botao from "./Botao";

interface AnimalImageProps {}

function AnimalImage(props: AnimalImageProps) {
  const [imagem, setImagem] = useState("");

  const shuffle = (array: any[]) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const getRandomAPI = (): string => {
    const apis = shuffle([
      "https://api.thecatapi.com/v1/images/search",
      "https://api.thedogapi.com/v1/images/search",
      "https://api.bunnies.io/v2/loop/random/?media=gif",
    ]);
    const randomIndex = Math.floor(Math.random() * apis.length);
    return apis[randomIndex];
  };

  const getAnimalImage = () => {
    const apiUrl = getRandomAPI();

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        switch (apiUrl) {
          case "https://api.thecatapi.com/v1/images/search":
            setImagem(data[0].url);
            break;
          case "https://api.thedogapi.com/v1/images/search":
            setImagem(data[0].url);
            break;
          case "https://api.bunnies.io/v2/loop/random/?media=gif":
            setImagem(data.media.gif || data.media.poster);
            break;
          default:
            break;
        }
      });
  };

  return (
    <div className="flex flex-col mx-auto my-6">
      <Botao onClick={getAnimalImage} />
      <div className="w-fit lg:max-h-[580px] max-sm:max-h-fit sm:max-h-fit flex mx-auto">
        {imagem && (
          <Image
            src={imagem}
            alt="Animal"
            width={500}
            height={580}
            className="rounded my-4"
          />
        )}
      </div>
    </div>
  );
}

export default AnimalImage;
