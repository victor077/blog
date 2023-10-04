import image from "../../public/php.svg.png";
import next from "../../public/next.svg";
import { Etiqueta } from "./etiqueta";
import CardPost from "./card-post";

const etiquetas1: Etiqueta[] = [
  {
    titulo: "PHP",
    url: "/php",
  },
];

const etiquetas2: Etiqueta[] = [
  {
    titulo: "Next",
    url: "/next",
  },
];

export default function ListCards() {
  return (
    <div className="grid grid-rows-1 grid-flow-col gap-4">
      <CardPost
        imagem={image}
        dataPost="22 de janeiro de 2023"
        titulo=" O que são components no React?"
        descricao="Vamos enteder um dos principais conceitos do React"
        etiquetas={etiquetas1}
        url="/artigos/php"
      />
      <CardPost
        imagem={next}
        dataPost="22 de janeiro de 2023"
        titulo=" O que são components no React?"
        descricao="Vamos enteder um dos principais conceitos do React"
        etiquetas={etiquetas2}
        url="/artigos/php"
      />
    </div>
  );
}
