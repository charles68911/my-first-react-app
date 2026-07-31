import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Card } from "@/components/ui/card";
import busImage from "../assets/images/bus.png";
import soda from "../assets/images/soda1.png";
import soda2 from "../assets/images/soda2.png";
import soda3 from "../assets/images/soda3.png";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        
        <section 
          className="relative w-full overflow-hidden h-[700px]">
          <img src={busImage} alt="Bus" className="w-full h-full object-cover" />
        </section>
        
        {/* CARDS SECTION */}
        <section className="text-center py-20 px-4">
            <h1 className="md:text-4xl font-bold text-center text-gray-900 mb-1">TASTE THE FAVORITES</h1>
            <p className="max-w-4xl mx-auto">Our best-selling drinks and desserts areloved for their refreshing flavors and quality.
                 Find your next favorite and experience the freshness in every bite and sip.</p>
            </section>

        <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
          <Card imageUrl={soda} title="Green Apple Soda" description="Crisp, sweet, incredibly, refresh." buttonLabel="View Details ->" buttonVariant="primary" />
          <Card imageUrl={soda2} title="Strawberry Soda" description="Sweet, fizzy, delightfully fruity." buttonLabel="View Details ->" buttonVariant="primary" />
          <Card imageUrl={soda3} title="Blueberry Soda" description="Fresh, bubbly, delicious fizzy." buttonLabel="View Details ->" buttonVariant="primary" />
        </section>
        
        <section className="bg-[#5A3FC0] text-white text-center py-50 px-10">
            <h1 className="text-7=xl md:text-7xl font-bold text-center text-white-900 mb-6">READY TO ORDER?</h1>
            <p className="max-w-4xl mx-auto">Our best-selling drinks and desserts are loved for their refreshing flavors and quality. Find your next favorite
                and experience the freshness in every bite and sip. Handcrafted daily using only the
                finest and freshest ingredients. Treat yourself to a burst of delightful flavors that will keep you coming back for more!</p>
            <button className="bg-white text-[#3F2A96] hover:bg-gray-50 font-medium transition-colors focus:outline-none px-6 py-2 rounded-lg text-sm mt-3">Order Now</button>
                 </section>
                 
                 </main>
        <Footer />
    </>
  );
}