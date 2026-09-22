"use client";

import { Menu, NotebookText, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/20 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">

        {/* Logo */}
        <a
          href="#inicio"
          className="font-heading text-2xl text-primary">
          <Image
            src="/gallery/logoNail.svg"
            alt="banner esmalteria"
            width={300}
            height={300}
            className="h-auto w-11 sm:w-13"
          />
        </a>

        {/* Navegação + CTA */}
        <div className="flex items-center gap-3 sm:gap-6 lg:gap-10">

          {/* Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#inicio"
              className="text-sm text-zinc-300 transition-colors hover:text-primary">
              Início
            </a>

            <a
              href="#galeria"
              className="text-sm text-zinc-300 transition-colors hover:text-primary">
              Galeria
            </a>

             <a
              href="#servicos"
              className="text-sm text-zinc-300 transition-colors hover:text-primary">
              Serviços
            </a>

            <a
              href="#contato"
              className="text-sm text-zinc-300 transition-colors hover:text-primary">
              Contato
            </a>
          </nav>

          {/* CTA */}
          <button
            className="
              flex items-center gap-2
              rounded-md
              border border-accent/80
              px-3 py-2 sm:px-6 sm:py-2.5
              text-sm font-medium
              text-primary
              transition-all
              duration-300
              hover:bg-primary
              hover:text-primary-foreground">
            <span className="hidden sm:inline">Agendar</span>
            <NotebookText size={18} />
          </button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            className="inline-flex size-10 items-center justify-center rounded-md border border-primary/40 text-primary md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-primary/20 bg-black/95 px-4 py-3 md:hidden">
          {[
            ["Início", "#inicio"],
            ["Serviços", "#servicos"],
            ["Galeria", "#galeria"],
            ["Contato", "#contato"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="block border-b border-white/10 py-3 text-sm text-foreground last:border-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}