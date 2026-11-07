import type { Metadata } from "next";
import PageLegale, { Section } from "../legal/PageLegale";
import { INFOS } from "../legal/infos";

export const metadata: Metadata = {
  title: "Mentions légales — Panier Perdu",
};

export default function MentionsLegales() {
  return (
    <PageLegale titre="Mentions légales">
      <Section titre="Éditeur du site">
        <p>
          Le site Panier Perdu est édité par {INFOS.nom}, {INFOS.statut}.
        </p>
        <p>SIRET : {INFOS.siret}</p>
        <p>Adresse : {INFOS.adresse}</p>
        <p>E-mail : {INFOS.email}</p>
        <p>Directeur de la publication : {INFOS.nom}</p>
        <p>{INFOS.tva}</p>
      </Section>

      <Section titre="Hébergeur">
        <p>
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
          Site : vercel.com.
        </p>
      </Section>

      <Section titre="Propriété intellectuelle">
        <p>
          Les textes, la marque et le code du site sont la propriété de
          l’éditeur. Toute reproduction sans autorisation est interdite.
        </p>
      </Section>

      <Section titre="Données personnelles">
        <p>
          Le traitement de tes données est détaillé dans la politique de
          confidentialité.
        </p>
      </Section>

      <p className="mt-8 text-sm">Dernière mise à jour : {INFOS.miseAJour}.</p>
    </PageLegale>
  );
}