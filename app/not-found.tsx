import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
      <div className="max-w-lg">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
          Mi Gomes Nail Designer
        </p>
        <h1 className="mt-6 font-serif text-6xl text-primary sm:text-8xl">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-zinc-100 sm:text-3xl">
          Página não encontrada
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
          O endereço acessado não existe ou foi movido. Volte para a página inicial
          e encontre nossos serviços.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md border border-accent bg-accent px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-transparent hover:text-primary"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
