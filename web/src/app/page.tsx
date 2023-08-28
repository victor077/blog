import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListCards from "@/components/ListCards";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className="h-2/3 flex flex-col justify-center items-center">
        <ListCards />
      </div>
      <Footer />
    </div>
  );
}
