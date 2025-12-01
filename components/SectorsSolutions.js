export default function SectorsSolutions() {
  const sectors = ["Clean energy","Data centres","Education","Infrastructure","Healthcare"]
  const solutions = ["Asset management","Digital","Project management","Sustainability","Cost management"]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-2">
      <div>
        <h3 className="text-xl font-semibold mb-4">Sectors</h3>
        <ul className="grid grid-cols-2 gap-2">
          {sectors.map(s => <li key={s} className="p-3 bg-[#bac6c7] border border-custom-grey rounded">{s}</li>)}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Solutions</h3>
        <ul className="grid grid-cols-2 gap-2">
          {solutions.map(s => <li key={s} className="p-3 bg-[#bac6c7] border border-custom-grey rounded">{s}</li>)}
        </ul>
      </div>
    </section>
  )
}
