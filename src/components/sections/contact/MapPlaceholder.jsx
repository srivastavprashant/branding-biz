export function MapPlaceholder() {
  return (
    <section className="py-24 bg-light-bg dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="w-full h-80 rounded-2xl bg-light-elevated dark:bg-white/[0.03] border border-light-border dark:border-white/8 flex flex-col items-center justify-center gap-4"
          role="img"
          aria-label="Map placeholder — Indra Nagar, Lucknow, India"
        >
          <span className="text-5xl" aria-hidden="true">🗺️</span>
          <p className="font-heading font-semibold text-dark-bg dark:text-white">Map Embed Goes Here</p>
          <p className="text-sm text-light-muted dark:text-white/45">Indra Nagar, Lucknow, Uttar Pradesh, India</p>
          <p className="text-xs text-light-muted dark:text-white/25">
            {/* TODO: Replace with real Google Maps or Mapbox embed */}
            Replace this placeholder with a real map embed
          </p>
        </div>
      </div>
    </section>
  );
}
