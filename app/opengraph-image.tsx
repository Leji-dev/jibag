import { ImageResponse } from "next/og";

export const alt = "Panier Perdu — Récupère les paniers abandonnés";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f2e8",
          padding: 72,
          color: "#0f3d2e",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
          Panier Perdu
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Récupère les paniers que tes clients ont abandonnés.
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#d9480f" }}>
          29 € par mois · sans engagement
        </div>
      </div>
    ),
    { ...size },
  );
}