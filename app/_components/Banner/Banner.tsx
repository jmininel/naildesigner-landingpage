import Image from "next/image";

const Banner = () => {
    return (
        <div className="bg-background w-full h-[450px] flex justify-center">
      <Image
        src="/gallery/bannerNail.jpg"
        alt="banner esmalteria"
        width={1920}
        height={800}
        className="w-full h-full object-contain"
      />
    </div>
    );
}

export default Banner;