import { Globe, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-background text-primary">
      <div className="mx-auto flex justify-between max-w-7xl flex-col px-6 py-10 md:flex-row">

        {/* Logo */}
        <div className="flex items-center justify-center border-b border-white/10 pb-8 md:w-1/3 md:border-b-0 md:border-r md:pr-10">
          <Image
            src="/next.svg"
            alt="Soldera Transportes de Cargas"
            width={220}
            height={80}
            className="h-auto w-52"
          />
        </div>

        {/* Contatos */}
        <div className="flex items-center justify-between gap-5 space-y-2 border-b border-white/10 py-8 sm:grid-cols-3 md:border-b-0 md:px-10">

          {/* Telefone */}
          <div className="flex items-center gap-3">
            <Phone className="mt-1  text-secondary" size={22} />

            <div>
              <p className="text-sm font-semibold">
                Telefone
              </p>

              <span className="text-sm text-white/70">
                (19) 99999-9999
              </span>
            </div>
          </div>

          {/* E-mail */}
          <div className="flex items-start gap-3">
            <Mail className="mt-1 shrink-0 text-secondary" size={22} />

            <div>
              <p className="text-sm font-semibold">
                E-mail
              </p>

              <span className="text-sm text-white/70">
                solderaTransportes@gmail.com
              </span>
            </div>
          </div>

          {/* Site */}
          <div className="flex items-start gap-3">
            <Globe className="mt-1 shrink-0 text-secondary" size={22} />

            <div>
              <p className="text-sm font-semibold">
                Site
              </p>

              <span className="text-sm text-white/70">
                www.solderatransportes.com.br
              </span>

              <div>
                <p className="text-sm font-semibold">
                  Endereço
                </p>

                <span className="text-sm leading-relaxed text-white/70">
                  Rua dos Imigrantes, nº 200
                  <br />
                  Estrela D&apos;Oeste - SP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Mi Gomes Nail Designer. Todos os
          direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;