import { carouselImages } from "./imageNailData";
import Image from "next/image";

const CarouselImages = () => {
  return (
    <section id="galeria" className="w-full bg-background py-8 sm:py-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {carouselImages.map((imageNail) => (
          <div
            key={imageNail.src}
            className="overflow-hidden rounded-md border-2 border--accent/50 transition hover:border-gray-900/70"
          >
            <div className="relative h-[220px] w-full sm:h-[320px] lg:h-[400px]">
              <Image
                src={imageNail.src}
                alt={imageNail.alt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col">
              <p className="flex h-12 items-center justify-center bg-black px-2 text-center text-sm font-medium text-gray-400">
                {imageNail.text}
              </p>
          
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarouselImages;

