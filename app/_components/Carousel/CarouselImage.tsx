import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { carouselImages } from "../Carousel/carouselData";
import Image from "next/image";

const CarouselImages = () => {
  return (
    <section className="bg-background w-full py-10">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto w-full max-w-5xl px-4">
        <CarouselContent className="-ml-3">
          {carouselImages.map((imageNail) => (
            <CarouselItem
              key={imageNail.src}
              className="basis-1/2 sm:basis-1/5">
              <div className="overflow-hidden rounded-md border-[1.5] border-gray-900/70 shadow-none hover:border-accent/50 hover:border-[1.5]">
                <div className="relative h-[200px] w-full">
                  <Image
                    src={imageNail.src}
                    alt={imageNail.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, 33vw"
                    className="object-cover"
                  />
                </div>
 
                <div className="flex-row ">
                <p className="flex items-center justify-center relative bg-black h-12 text-sm font-medium text-gray-400 ">{imageNail.text}</p>
                <p className="justify-center py-3 text-sm font-light  text-gray-500">Elegancia que nao sai da moda</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default CarouselImages;