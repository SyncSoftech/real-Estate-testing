export default function Stats() {
  const items = [
    { label: "experts", value: "22k+" },
    { label: "countries", value: "62" },
    { label: "offices", value: "247" },
    { label: "nationalities", value: "115" }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.label} className="bg-custom-yellow p-6 rounded-lg shadow-sm border border-custom-grey">
            <div className="text-2xl font-bold">{it.value}</div>
            <div className="mt-1 text-sm uppercase tracking-wide text-slate-700">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
