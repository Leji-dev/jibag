import Link from "next/link";

export function Section({
  titre,
  children,
}: {
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="font-titre text-xl font-semibold text-sapin">{titre}</h2>
      <div className="mt-2 space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}

export default function PageLegale({
  titre,
  children,
}: {
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-xl px-5 py-8">
      <Link href="/" className="font-titre text-xl font-semibold text-sapin">
        Panier Perdu
      </Link>
      <h1 className="font-titre mt-8 text-3xl font-semibold leading-tight text-sapin">
        {titre}
      </h1>
      {children}
    </main>
  );
}