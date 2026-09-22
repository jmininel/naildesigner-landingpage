
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

const message = encodeURIComponent(
  "Olá! Vim pela página  ★★Mi Gomes Nail Designer★★ e gostaria de agendar um horário.");

const whatsappUrl = `https://wa.me/5519998924868?text=${message}`;

export function Hero() {
  return (
    <section id="servicos" className="relative w-full bg-black text-slate-50 mb-5">
      {/* Brilho de fundo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-black to-black" />

      <div className="mb-10 relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-12 sm:px-6 md:px-10 lg:min-h-[550px] lg:flex-row lg:gap-0 lg:px-16 lg:py-2">

        {/* CONTEÚDO */}
        <div className="w-full max-w-2xl lg:w-[45%]">

          <div className="space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
              Mi Gomes Nail Designer
            </p>

            <div className="space-y-3">
              <h1 className="max-w-xl font-serif text-3xl leading-[1.08] text-primary sm:text-4xl md:text-5xl lg:text-6xl">
                Manicure e Nail Art
                <br />
                em Americana
              </h1>

              <p className="font-sans text-xl font-light italic text-[#D4AF37] sm:text-2xl">
                Unhas impecáveis para realçar a sua beleza.
              </p>
            </div>

            <div className="h-px w-12 bg-[#C5A059]/40" />

            <p className="max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
              Olá, eu sou Tamires Gomes!
              <br/>
               Manicure profissional com mais de 15
              anos de experiência.
              <br/>
               Cuido de cada detalhe para entregar um
              resultado elegante, duradouro e feito para você.
              <br/>
              Agende seu horário pelo whatsapp.
            </p>
          </div>

          {/* BOTÕES */}
          <div className="flex flex-col gap-3 pt-5 sm:flex-row sm:flex-wrap">
            <Button
              className="flex w-full items-center gap-2 rounded-lg bg-accent/80 px-4 py-6 font-semibold text-black hover:bg-accent/90 sm:w-auto sm:px-6">
              AGENDAR HORÁRIO
              <Calendar className="h-4 w-4" />
            </Button>

            <a
             href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer">

              <Button
                variant="outline"
                className="flex w-full items-center gap-2 rounded-lg border-accent/80 px-4 py-6 text-primary hover:bg-accent/70 hover:text-black sm:w-auto sm:px-6">
                <MessageCircle className="h-4 w-4" />
                WHATSAPP
              </Button>
            </a>
          </div>
        </div>


        {/* IMAGEM */}
        <div className="relative h-[280px] w-full max-w-xl lg:h-[500px] lg:flex-1">

          {/* Fade da imagem para o fundo */}
          <div className="absolute inset-y-0 left-0 z-10 w-1/3 bg-gradient-to-r from-black to-transparent" />

          <Image
            src="/gallery/hero.png"
            alt="Mão com unhas pinatadas de preto e dourado"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-contain object-right border-accent/30 border-[1.5px] rounded-r-2xl"
          />
        </div>

      </div>
      {/* BENEFÍCIOS */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center justify-center gap-4 border-t border-zinc-800/80 px-4 pb-10 pt-6 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">

        <div className="flex items-center justify-start gap-3 sm:justify-center">
          <User className="h-7 w-7 shrink-0 text-primary" />
          <span className="text-sm leading-tight text-zinc-300">
            ATENDIMENTO PERSONALIZADO
          </span>
        </div>

        <div className="flex items-center justify-start gap-3 sm:justify-center">
          <Gem className="h-7 w-7 shrink-0 text-primary" />
          <span className="text-sm leading-tight text-zinc-300">
            PRODUTOS DE ALTA QUALIDADE
          </span>
        </div>

        <div className="flex items-center justify-start gap-3 sm:justify-center">
          <ShieldCheck className="h-7 w-7 shrink-0 text-primary" />
          <span className="text-sm leading-tight text-zinc-300">
            HIGIENE E SEGURANÇA
          </span>
        </div>

        <div className="flex items-center justify-start gap-3 sm:justify-center">
          <Heart className="h-7 w-7 shrink-0 text-primary" />
          <span className="text-sm leading-tight text-zinc-300">
            AMBIENTE ACONCHEGANTE
          </span>
        </div>

      </div>

    </section>
  );
}

