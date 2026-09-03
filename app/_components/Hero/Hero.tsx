
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Calendar,
  MessageCircle,
  User,
  Gem,
  ShieldCheck,
  Heart,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[550px] w-full overflow-hidden bg-black text-white">
      {/* Brilho de fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-black to-black" />

      <div className="relative z-10 mx-auto flex min-h-[550px] max-w-7xl items-center px-6 py-2 md:px-10 lg:px-16">
        
        {/* CONTEÚDO */}
        <div className="w-full max-w-2xl lg:w-[35%]">
          
          <div className="space-y-3">
            <h1 className="font-serif text-4xl leading-[1.05] text-[#C5A059] md:text-5xl lg:text-6xl">
              Sofisticação
              <br />
              até a ponta dos
              <br />
              <span className="font-sans text-[#D4AF37] italic font-light">
                dedos.
              </span>
            </h1>

            <div className="my-5 h-px w-12 bg-[#C5A059]/40" />

            <p className="max-w-md text-sm leading-relaxed text-zinc-300 md:text-base">
              Unhas impecáveis para mulheres que amam se destacar.
            </p>
          </div>

          {/* BOTÕES */}
          <div className="flex flex-wrap gap-3 pt-5">
            <Button
              className="flex items-center gap-2 rounded-lg bg-accent/80 px-6 py-6 font-semibold text-black hover:bg-accent/90">
              AGENDAR HORÁRIO
              <Calendar className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="flex items-center gap-2 rounded-lg border-accent/80 px-6 py-6 text-[#C5A059] hover:bg-accent/70">
              <MessageCircle className="h-4 w-4" />
              WHATSAPP
            </Button>
          </div>
        </div>

        

        {/* IMAGEM */}
        <div className="relative hidden h-[500px] flex-1 lg:block">
          
          {/* Fade da imagem para o fundo */}
          <div className="absolute inset-y-0 left-0 z-10 w-1/3 bg-gradient-to-r from-black to-transparent" />

          <Image
            src="/gallery/hero.png"
            alt="Mão com unhas decoradas"
            fill
            priority
            sizes="45vw"
            className="object-contain object-right"
          />
        </div>
        
      </div>
                {/* BENEFÍCIOS */}
          <div className="mx-auto justify-center max-w-5xl mt-4 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-zinc-800/80 pt-6 lg:grid-cols-4">
            
            <div className="flex items-start gap-3 mt-4">
              <User className="mt-0.5 h-5 w-5 shrink-0 text-[#C5A059]" />
              <span className="text-sm leading-tight text-zinc-300">
                ATENDIMENTO PERSONALIZADO
              </span>
            </div>

            <div className="flex items-start gap-3 mt-4">
              <Gem className="mt-0.5 h-5 w-5 shrink-0 text-[#C5A059]" />
              <span className="text-sm leading-tight text-zinc-300">
                PRODUTOS DE ALTA QUALIDADE
              </span>
            </div>

            <div className="flex items-start gap-3 mt-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#C5A059]" />
              <span className="text-sm leading-tight text-zinc-300">
                HIGIENE E SEGURANÇA
              </span>
            </div>

            <div className="flex items-start gap-3 mt-4">
              <Heart className="mt-0.5 h-5 w-5 shrink-0 text-[#C5A059]" />
              <span className="text-sm leading-tight text-zinc-300">
                AMBIENTE ACONCHEGANTE
              </span>
            </div>
 
          </div>

            <div className="mx-auto justify-center max-w-5xl mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-zinc-800/80 pt-6 lg:grid-cols-4"></div>
    </section>
  );
}

