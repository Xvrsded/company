import type { CSSProperties } from 'react';

function hexToRgb(hex: string) {
  const normalized = hex.replace('#', '');
  const safeHex = normalized.length === 3
    ? normalized.split('').map((char) => char + char).join('')
    : normalized;

  const red = Number.parseInt(safeHex.slice(0, 2), 16);
  const green = Number.parseInt(safeHex.slice(2, 4), 16);
  const blue = Number.parseInt(safeHex.slice(4, 6), 16);

  return { red, green, blue };
}

function mixHex(colorA: string, colorB: string, ratio: number) {
  const mixRatio = Math.min(1, Math.max(0, ratio));
  const a = hexToRgb(colorA);
  const b = hexToRgb(colorB);

  const red = Math.round(a.red + (b.red - a.red) * mixRatio);
  const green = Math.round(a.green + (b.green - a.green) * mixRatio);
  const blue = Math.round(a.blue + (b.blue - a.blue) * mixRatio);

  return `#${[red, green, blue].map((value) => value.toString(16).padStart(2, '0')).join('')}`;
}

export function RubikHeroCube() {
  const gridSize = 3;
  const halfWidth = 22;
  const halfHeight = 12;
  const depth = 26;
  const stepX = 29;
  const stepY = 16;
  const liftZ = 35;
  const centerX = 190;
  const centerY = 86;
  const hoverColors = ['#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6', '#ec4899', '#f43f5e'];

  const cubes = Array.from({ length: gridSize ** 3 }, (_, index) => {
    const x = index % gridSize;
    const y = Math.floor(index / gridSize) % gridSize;
    const z = Math.floor(index / (gridSize * gridSize));

    const baseX = centerX + (x - y) * stepX;
    const baseY = centerY + (x + y) * stepY - z * liftZ;

    const top = [
      [baseX, baseY],
      [baseX + halfWidth, baseY + halfHeight],
      [baseX, baseY + halfHeight * 2],
      [baseX - halfWidth, baseY + halfHeight]
    ];

    const left = [
      top[3],
      top[2],
      [top[2][0], top[2][1] + depth],
      [top[3][0], top[3][1] + depth]
    ];

    const right = [
      top[1],
      top[2],
      [top[2][0], top[2][1] + depth],
      [top[1][0], top[1][1] + depth]
    ];

    return {
      id: index,
      x,
      y,
      z,
      color: hoverColors[(x + y + z) % hoverColors.length],
      neonTopStart: mixHex(hoverColors[(x + y + z) % hoverColors.length], '#ffffff', 0.36),
      neonTopEnd: mixHex(hoverColors[(x + y + z) % hoverColors.length], '#22d3ee', 0.16),
      neonLeftStart: mixHex(hoverColors[(x + y + z) % hoverColors.length], '#e2e8f0', 0.24),
      neonLeftEnd: mixHex(hoverColors[(x + y + z) % hoverColors.length], '#0f172a', 0.24),
      neonRightStart: mixHex(hoverColors[(x + y + z) % hoverColors.length], '#cbd5e1', 0.16),
      neonRightEnd: mixHex(hoverColors[(x + y + z) % hoverColors.length], '#020617', 0.3),
      top,
      left,
      right
    };
  }).sort((a, b) => a.x + a.y + a.z - (b.x + b.y + b.z) || a.z - b.z || a.y - b.y || a.x - b.x);

  const toPoints = (points: number[][]) => points.map((point) => `${point[0]},${point[1]}`).join(' ');

  return (
    <div className="rubik-hero-scene" aria-label="Rubik hover interactive">
      <svg className="rubik-hero-grid" viewBox="0 0 360 260" role="img" aria-label="Ilustrasi rubik 3D">
        <defs>
          <linearGradient id="rubik-base-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="rubik-base-left" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <linearGradient id="rubik-base-right" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          {cubes.map((cube) => (
            <g key={`grad-${cube.id}`}>
              <linearGradient id={`rubik-neon-top-${cube.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={cube.neonTopStart} />
                <stop offset="100%" stopColor={cube.neonTopEnd} />
              </linearGradient>
              <linearGradient id={`rubik-neon-left-${cube.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={cube.neonLeftStart} />
                <stop offset="100%" stopColor={cube.neonLeftEnd} />
              </linearGradient>
              <linearGradient id={`rubik-neon-right-${cube.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={cube.neonRightStart} />
                <stop offset="100%" stopColor={cube.neonRightEnd} />
              </linearGradient>
            </g>
          ))}
        </defs>

        {cubes.map((cube) => (
          <g key={cube.id} className="rubik-hero-cube" style={{ '--hover-color': cube.color } as CSSProperties}>
            <polygon className="rubik-face rubik-face-left" points={toPoints(cube.left)} fill="url(#rubik-base-left)" />
            <polygon className="rubik-face rubik-face-right" points={toPoints(cube.right)} fill="url(#rubik-base-right)" />
            <polygon className="rubik-face rubik-face-top" points={toPoints(cube.top)} fill="url(#rubik-base-top)" />

            <polygon className="rubik-face rubik-face-neon rubik-face-neon-left" points={toPoints(cube.left)} fill={`url(#rubik-neon-left-${cube.id})`} />
            <polygon className="rubik-face rubik-face-neon rubik-face-neon-right" points={toPoints(cube.right)} fill={`url(#rubik-neon-right-${cube.id})`} />
            <polygon className="rubik-face rubik-face-neon rubik-face-neon-top" points={toPoints(cube.top)} fill={`url(#rubik-neon-top-${cube.id})`} />
          </g>
        ))}
      </svg>
    </div>
  );
}
