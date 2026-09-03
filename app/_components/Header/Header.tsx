import { Card } from "@/components/ui/card";
import { NotebookText } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#inicio"
          className="font-heading text-2xl text-primary">
          Mi Gomes
        </a>

        {/* Navegação + CTA */}
        <div className="flex items-center gap-10">

          {/* Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#inicio"
              className="text-sm text-foreground transition-colors hover:text-primary">
              Início
            </a>

            <a
              href="#servicos"
              className="text-sm text-foreground transition-colors hover:text-primary">
              Serviços
            </a>

            <a
              href="#galeria"
              className="text-sm text-foreground transition-colors hover:text-primary">
              Galeria
            </a>

            <a
              href="#contato"
              className="text-sm text-foreground transition-colors hover:text-primary">
              Contato
            </a>
          </nav>

          {/* CTA */}
          <button
            className="
              flex items-center gap-2
              rounded-md
              border border-primary
              px-6 py-2.5
              text-sm font-medium
              text-primary
              transition-all
              duration-300
              hover:bg-primary
              hover:text-primary-foreground
            "
          >
            Agendar
            <NotebookText size={18} />
          </button>

        </div>
      </div>
    </header>
  );
}