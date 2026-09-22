import Banner from "./_components/Banner/Banner";
import CarouselImages from "./_components/ImageNail/ImageNail";
import Footer from "./_components/Footer/Footer";
import { Header } from "./_components/Header/Header";
import { Hero } from "./_components/Hero/Hero";
import { Info } from "./_components/Info/Info";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Mi Gomes Nail Designer",
  description:
    "Salão de beleza especializado em manicure, nail art, alongamento e cuidados para unhas em Americana, SP.",
  image: "/gallery/logoNail.png",
  telephone: "+55-19-99892-4868",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Josué Santos Caio, nº 136, Bairro Conjunto Hab. Mários Covas",
    addressLocality: "Americana",
    addressRegion: "SP",
    postalCode: "13470-658",
    addressCountry: "BR",
  },
  areaServed: "Americana",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div id="inicio">
        <Header />
        <Hero />
        <CarouselImages />
        <Info />
        <Banner />
        <Footer />
      </div>
    </>
  );
}
