type TintName = "peach" | "lavender" | "lavsoft";

const TINTS: Record<TintName, [string, string]> = {
  peach: ["#F1D8CF", "#E86F51"],
  lavender: ["#E8E1F4", "#C8B6FF"],
  lavsoft: ["#F1D8CF", "#C8B6FF"],
};

/** Deterministic pseudo-random from a string seed. */
function seeded(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

/** Local abstract art fallback (data URI) so images never appear broken,
 *  even fully offline. Composed from the locked palette. */
export function artDataUri(seed: string, tint: TintName, w = 1200, h = 900) {
  const rnd = seeded(seed + tint);
  const [bg, accent] = TINTS[tint];
  let shapes = "";
  for (let i = 0; i < 5; i++) {
    const cx = Math.round(rnd() * w);
    const cy = Math.round(rnd() * h);
    const r = Math.round(80 + rnd() * (w / 3));
    const fill = i % 2 === 0 ? accent : "#181818";
    shapes += `<circle cx='${cx}' cy='${cy}' r='${r}' fill='${fill}' opacity='0.${8 - i}'/>`;
  }
  const barY = Math.round(rnd() * h);
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'>` +
    `<rect width='${w}' height='${h}' fill='${bg}'/>` +
    shapes +
    `<rect x='0' y='${barY}' width='${w}' height='10' fill='#FFFDF9' opacity='0.85'/>` +
    `<circle cx='${Math.round(rnd() * w)}' cy='${barY + 60}' r='26' fill='#E86F51'/>` +
    `</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

/** Palette-treated photography source. */
export function photo(seed: string, w: number, h: number): string {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}
