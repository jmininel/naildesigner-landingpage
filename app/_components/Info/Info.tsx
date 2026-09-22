
import Image from "next/image";


export function Info() {
  return (
    <section className="relative w-full bg-black text-white">
      {/* Brilho de fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-black to-black" />

    <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-4 py-12 sm:px-6 md:px-10 lg:min-h-[550px] lg:flex-row-reverse lg:gap-0 lg:px-16 lg:py-2">

        {/* CONTEÚDO */}
        <div className="w-full max-w-2xl lg:w-[45%]">

          <div className="space-y-3">
            <h2 className="font-serif text-3xl leading-[1.08] text-[#C5A059] sm:text-4xl md:text-5xl lg:text-6xl">
              Cuidado e sofisticação
              <br />
              para cada
              <br />
              <span className="font-sans text-[#D4AF37] italic font-light">
                detalhe da sua unha.
              </span>
            </h2>

            <div className="my-5 h-px w-12 bg-[#C5A059]/40" />

            <p className="max-w-md text-sm leading-relaxed text-zinc-300 md:text-base">
              Nail designer em Americana com foco em beleza, durabilidade e atenção aos detalhes para um visual elegante e exclusivo.
            </p>
          </div>

          {/* BOTÕES */}
        
        </div>
        {/* IMAGEM */}
        <div className="relative h-[280px] w-full max-w-xl lg:h-[500px] lg:flex-1">

          {/* Fade da imagem para o fundo */}
        <div className="absolute inset-y-0 right-0 z-10 w-1/4 bg-gradient-to-l from-black via-black/60 to-transparent" />

          <Image
            src="/gallery/bannerNail.jpg"
            alt="Mão com unhas pinatadas de preto e dourado"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
           className="rounded-l-2xl border-[1.5px] border-accent/30 object-contain object-left"
          />
        </div>
      </div>

    
    </section>
  );
}

