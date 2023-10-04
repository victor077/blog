"use client";
import Image, { StaticImageData } from "next/image";
import { Card } from "./ui/card";
import Etiqueta, { Etiqueta as TypeEtiqueta } from "./etiqueta";
import { useRouter } from "next/navigation";

interface PostProps {
  dataPost: string;
  titulo: string;
  descricao: string;
  imagem: StaticImageData;
  etiquetas: TypeEtiqueta[];
  url: string;
}

export default function CardPost({
  dataPost,
  titulo,
  descricao,
  imagem,
  etiquetas,
  url,
}: PostProps) {
  const router = useRouter();
  const handleNavigation = (url: string) => {
    router.push(url, { scroll: false });
  };
  return (
    <Card
      className="space-y-4 p-5 max-w-[17rem] rounded-xl drop-shadow-md cursor-pointer hover:bg-slate-100"
      onClick={() => handleNavigation(url)}
    >
      <Image className="w-full mb-4 rounded-lg  h-32" src={imagem} alt="php" />
      <Etiqueta etiquetas={etiquetas} />
      <p className="font-medium text-base text-slate-900">{dataPost}</p>
      <h3 className="font-semibold text-2xl text-slate-950">{titulo}</h3>
      <p className="font-medium text-lg text-slate-900">{descricao}</p>
    </Card>
  );
}
