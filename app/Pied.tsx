import Link from "next/link";

export default function Pied() {
  return (
    <footer className="mx-auto max-w-xl border-t border-sapin/20 px-5 pb-28 pt-6 text-sm md:pb-8">
      <p className="font-titre font-semibold text-sapin">Panier Perdu</p>
      <nav className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
        <Link href="/mentions-legales" className="underline">
          Mentions légales
        </Link>
        <Link href="/cgv" className="underline">
          Conditions générales de vente
        </Link>
        <Link href="/confidentialite" className="underline">
          Politique de confidentialité
        </Link>
      </nav>
    </footer>
  );
}