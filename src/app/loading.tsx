export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/92 backdrop-blur-xl">
      <div className="relative flex w-full max-w-xl flex-col items-center gap-6 px-8">
        <div className="loader-track">
          <div className="loader-track-glow" />
          <div className="loader-runner">
            <div className="loader-runner-body" />
            <div className="loader-runner-face" />
            <div className="loader-runner-tail" />
            <div className="loader-runner-feet">
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-base font-semibold text-foreground sm:text-lg">Menyiapkan halaman terbaik untuk Anda...</p>
          <p className="mt-1 text-sm text-muted">Loading dengan gaya modern, ringan, dan tetap elegan.</p>
        </div>
      </div>
    </div>
  );
}
