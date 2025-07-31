export default function CategoryCard({ category }) {
  return (
    <div className="h-[220px] min-w-[160px] rounded-lg p-3 hover:bg-gray-700 transition">
      <img src={category.image} alt={category.title} className="w-full h-32 object-cover rounded" />
      <p className="text-1xl text-gray-400">{category.artist}</p>
    </div>
  );
}
