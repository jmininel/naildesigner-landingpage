import { Button } from "@base-ui/react";
import { Clock3, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import Image from "next/image";

const whatsappUrl = `https://wa.me/5519998924868?text=${encodeURIComponent(
  "Olá! Vim pela página do Mi Gomes Nail Designer e gostaria de agendar um horário.",
)}`;

const Footer = () => {
  return (
    <footer id="contato" className="relative overflow-hidden border-t border-[#C5A059]/20 bg-[#080808] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(197,160,89,0.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 md:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.5fr_1fr] lg:items-center lg:gap-10">
          <div className="flex flex-col items-center gap-4 text-center lg:items-center">
            <div className="overflow-hidden rounded-2xl border border-primary/30 bg-[#111111] p-2 shadow-[0_0_30px_rgba(197,160,89,0.12)]">
              <Image
                src="/gallery/logoNail.svg"
                alt="Mi Gomes Nail Designer"
                width={170}
                height={170}
                className="rounded-xl object-cover"
              />
            </div>
            <div className="w-full text-center">
              <p className="text-xs font-medium tracking-[0.28em] text-primary/80 uppercase">
                Mi Gomes Nail Designer
              </p>
            </div>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 sm:gap-8">
            <div className="flex gap-3">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-[#C5A059]">
                <MapPin size={18} />
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#C5A059] uppercase">
                  Endereço
                </p>
                <p className="max-w-xs break-words text-sm leading-relaxed text-zinc-300">
                  Rua Josué Santos Caio, nº 136, Bairro Conjunto Hab. Mários Covas
                  <br />
                  CEP 13470-658 Americana - SP
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone size={18} />
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  Contato
                </p>
                <a
                  href="tel:+5519998924868"
                  className="block text-sm text-zinc-300 transition-colors hover:text-[#f3d184]">
                  (19) 99892-4868
                </a>
                <p className="mt-2 flex items-center gap-2 text-xs text-zinc-400">
                  <Clock3 size={14} className="text-primary" />
                  Atendimento sob consulta
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xs rounded-2xl border border-[#C5A059]/25 bg-[linear-gradient(135deg,rgba(197,160,89,0.12),rgba(255,255,255,0.02))] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Sparkles size={16} />
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-primary">
                  Agende
                </span>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-zinc-300">
                Deixe suas unhas com a sofisticação que você merece.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-accent/80">
                <MessageCircle size={18} />
                Falar no WhatsApp
             </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#C5A059]/20 bg-black/20">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 text-center text-xs leading-relaxed text-zinc-500 sm:px-6 md:text-sm">
          © {new Date().getFullYear()} Mi Gomes Nail Designer. Todos os direitos reservados. (Desenvolvido por{" Juliana Mininel Developer"})
        </div>
      </div>
    </footer>
  );
};

export default Footer;

