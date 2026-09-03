import Banner from "./_components/Banner/Banner";
import CarouselImages from "./_components/Carousel/CarouselImage";
import Footer from "./_components/Footer/Footer";
import { Header } from "./_components/Header/Header";
import { Hero } from "./_components/Hero/Hero";

export default function Home() {
  return (
 <div>
  <Header/>
  <Hero/>
  <CarouselImages/>
  <Banner/>
  <Footer/>
 </div>
  );
}
