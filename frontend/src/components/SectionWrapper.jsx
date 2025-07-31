export default function SectionWrapper({ title, children }) {
  return (
    <div className="mb-8 rounded-2xl">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {children}
      </div>
    </div>
  );
}