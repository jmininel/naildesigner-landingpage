import {
  Crown,
  Gem,
  Heart,
  Sparkles,
  Star,
  Sun,
} from "lucide-react";

const Banner = () => {
  return (
    <section className="w-full bg-black px-4 py-12 sm:px-6 sm:py-14 md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* TÍTULO */}
        <div className="mb-10 text-center">
          <span className="text-xs font-medium tracking-[0.3em] text-primary">
            SUA ESSÊNCIA
          </span>

          <h2 className="mt-3 font-serif text-2xl leading-tight text-primary sm:text-3xl md:text-4xl">
            Nail art, manicure e unhas impecáveis para você brilhar.
          </h2>

          <p className="mx-auto mt-3 text-sm leading-relaxed text-zinc-400">
            Cada detalhe revela sua personalidade com unhas sofisticadas e elegantes.
         </p>
        </div>

        {/* PALAVRAS */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 sm:grid-cols-4">
          {/* Poderosa */}
          <div className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-[#C5A059]/30 bg-gradient-to-b from-zinc-950 to-black px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A059]/80 hover:shadow-[0_0_25px_rgba(197,160,89,0.12)]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A059]/30">
              <Star className="h-4 w-4 text-[#C5A059] transition-transform duration-300 group-hover:scale-110" />
            </div>

            <span className="text-xs font-medium tracking-[0.15em] text-zinc-300">
              PODEROSA
            </span>
          </div>

          {/* Elegante */}
          <div className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-[#C5A059]/30 bg-gradient-to-b from-zinc-950 to-black px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A059]/80 hover:shadow-[0_0_25px_rgba(197,160,89,0.12)]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A059]/30">
              <Gem className="h-4 w-4 text-[#C5A059] transition-transform duration-300 group-hover:scale-110" />
            </div>

            <span className="text-xs font-medium tracking-[0.15em] text-zinc-300">
              ELEGANTE
            </span>
          </div>

          {/* Única */}
          <div className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-[#C5A059]/30 bg-gradient-to-b from-zinc-950 to-black px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A059]/80 hover:shadow-[0_0_25px_rgba(197,160,89,0.12)]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A059]/30">
              <Sparkles className="h-4 w-4 text-[#C5A059] transition-transform duration-300 group-hover:scale-110" />
            </div>

            <span className="text-xs font-medium tracking-[0.15em] text-zinc-300">
              ÚNICA
            </span>
          </div>

          {/* Confiante */}
          <div className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-[#C5A059]/30 bg-gradient-to-b from-zinc-950 to-black px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A059]/80 hover:shadow-[0_0_25px_rgba(197,160,89,0.12)]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A059]/30">
              <Crown className="h-4 w-4 text-[#C5A059] transition-transform duration-300 group-hover:scale-110" />
            </div>

            <span className="text-xs font-medium tracking-[0.15em] text-zinc-300">
              CONFIANTE
            </span>
          </div>

          {/* Radiante */}
          <div className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-[#C5A059]/30 bg-gradient-to-b from-zinc-950 to-black px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A059]/80 hover:shadow-[0_0_25px_rgba(197,160,89,0.12)]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A059]/30">
              <Sun className="h-4 w-4 text-[#C5A059] transition-transform duration-300 group-hover:scale-110" />
            </div>

            <span className="text-xs font-medium tracking-[0.15em] text-zinc-300">
              RADIANTE
            </span>
          </div>

          {/* Autêntica */}
          <div className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-[#C5A059]/30 bg-gradient-to-b from-zinc-950 to-black px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A059]/80 hover:shadow-[0_0_25px_rgba(197,160,89,0.12)]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A059]/30">
              <Heart className="h-4 w-4 text-[#C5A059] transition-transform duration-300 group-hover:scale-110" />
            </div>

            <span className="text-xs font-medium tracking-[0.15em] text-zinc-300">
              AUTÊNTICA
            </span>
          </div>

          {/* Marcante */}
          <div className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-[#C5A059]/30 bg-gradient-to-b from-zinc-950 to-black px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A059]/80 hover:shadow-[0_0_25px_rgba(197,160,89,0.12)]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A059]/30">
              <Star className="h-4 w-4 text-[#C5A059] transition-transform duration-300 group-hover:scale-110" />
            </div>

            <span className="text-xs font-medium tracking-[0.15em] text-zinc-300">
              MARCANTE
            </span>
          </div>

          {/* Sofisticada */}
          <div className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-[#C5A059]/30 bg-gradient-to-b from-zinc-950 to-black px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A059]/80 hover:shadow-[0_0_25px_rgba(197,160,89,0.12)]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A059]/30">
              <Gem className="h-4 w-4 text-[#C5A059] transition-transform duration-300 group-hover:scale-110" />
            </div>

            <span className="text-xs font-medium tracking-[0.15em] text-zinc-300">
              SOFISTICADA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;


