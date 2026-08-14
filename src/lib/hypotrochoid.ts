/**
 * Engine-turned guilloche, the way a rose engine lathe actually cuts it.
 *
 * A hypotrochoid is the path traced by a pen fixed to a small circle
 * rolling inside a larger one:
 *
 *   x = (R - r)·cos(t) + d·cos(((R - r) / r)·t)
 *   y = (R - r)·sin(t) - d·sin(((R - r) / r)·t)
 *
 *   R  radius of the fixed outer circle
 *   r  radius of the rolling inner circle
 *   d  distance of the pen from the rolling circle's centre
 *
 * The curve closes after 2π·r / gcd(R, r), and produces R / gcd(R, r) lobes.
 * For (105, 21) that's gcd 21, so it closes in a single revolution with
 * 5 lobes. Loop to a plain 2π with an r that doesn't divide R and you'll
 * get an open curve that never meets itself.
 */

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

export function hypotrochoid(
  R: number,
  r: number,
  d: number,
  step = 0.05,
): string {
  const period = (2 * Math.PI * r) / gcd(R, r);
  const k = (R - r) / r;
  const points: string[] = [];

  for (let t = 0; t <= period + step; t += step) {
    const x = (R - r) * Math.cos(t) + d * Math.cos(k * t);
    const y = (R - r) * Math.sin(t) - d * Math.sin(k * t);
    points.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  }

  return `M${points.join('L')}Z`;
}

export type Ring = {
  d: string;
  count: number;
  offset: number;
};

/** The three stacked rings of the seal, from the reference rendering. */
export const RINGS: Ring[] = [
  { d: hypotrochoid(105, 21, 58), count: 12, offset: 0 },
  { d: hypotrochoid(96, 16, 70), count: 10, offset: 9 },
  { d: hypotrochoid(88, 22, 40), count: 8, offset: 0 },
];