import type { CSSProperties } from 'react';

export function CubeHoverShowcase() {
  const sliceStyle = (index: number) => ({ '--i': index } as CSSProperties);

  return (
    <section className="mx-auto w-full max-w-[92rem] px-4 pb-20 sm:px-8 lg:px-12">
      <div className="premium-card rounded-3xl border border-border/70 bg-card/50 p-6 backdrop-blur-2xl sm:p-8">
        <p className="text-sm uppercase tracking-widest text-primary">Interactive Visual</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Cube Hover Effect</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted sm:text-base">
          Hover ke elemen kubus untuk melihat efek rotasi warna dinamis dengan nuansa futuristik yang tetap elegan.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="cube-hover-wrap" aria-hidden="true">
            <span className="cube-slice" style={sliceStyle(0)} />
            <span className="cube-slice" style={sliceStyle(1)} />
            <span className="cube-slice" style={sliceStyle(2)} />
            <span className="cube-slice" style={sliceStyle(3)} />
            <span className="cube-slice" style={sliceStyle(4)} />
          </div>
        </div>
      </div>
    </section>
  );
}
