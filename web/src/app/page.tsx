import Footer from "@/components/footer";
import Header from "@/components/header";
import ListCards from "@/components/list-cards";

export default function Home() {
  return (
    <>
      <Header />
      <div className="  flex justify-center items-center h-screen">
        <div className="flex items-center w-2/3">
          <ListCards />
        </div>
      </div>
      <Footer />
    </>
  );
}
