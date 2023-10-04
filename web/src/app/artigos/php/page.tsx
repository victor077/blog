import BannerArtigo from "@/components/banner-artigo";
import Image from "next/image";
import image from "../../../../public/laravel2.png";

export default function PHP() {
  return (
    <>
      <h1>hello world</h1>
       <BannerArtigo>
        <Image src={image} alt=""></Image>
      </BannerArtigo> 
    </>
  );
}
