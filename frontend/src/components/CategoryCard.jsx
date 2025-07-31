export default function CategoryCard({ category }) {
  return (
    <div className="min-w-[150px] h-[200px] rounded-lg overflow-hidden relative group cursor-pointer">
      <img src={category.image} alt={category.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent px-3 py-2">
        <h4 className="text-white text-sm font-semibold truncate">{category.title}</h4>
      </div>
    </div>
  );
}
