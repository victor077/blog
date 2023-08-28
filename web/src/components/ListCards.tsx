import Image from "next/image";
import { Card, CardFooter } from "./ui/card";
import image from "../../public/php.svg.png";
import next from "../../public/next.svg";

export default function ListCards() {
  return (
    <div className="flex justify-between w-2/4 items-center">
      <Card className="bg-slate-100 w-[300px] min-h-[200px]  px-6 py-4 drop-shadow-md flex justify-end items-center cursor-pointer hover:bg-slate-200">
        <Image className="w-full mb-4" src={image} alt="php" />
      </Card>
      <Card className="bg-slate-100 w-[300px] min-h-[200px]  px-6 py-4 drop-shadow-md flex justify-end items-center cursor-pointer hover:bg-slate-200">
        <Image className="w-full mb-4" src={next} alt="php" />
      </Card>
    </div>
  );
}
