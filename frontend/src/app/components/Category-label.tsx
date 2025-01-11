import { useState, useEffect } from 'react';

interface Category {
  id: number;
  name: string;
  color: string;
}

interface CategoryLabelProps {
  name: string;
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

const colorMap: { [key: string]: string } = {
  "Fjord Blue": "bg-blue-800",
  "Light Blue": "bg-blue-400",
  "Aurora Teal": "bg-teal-500",
  "Green": "bg-green-500",
  "Magenta": "bg-purple-500",
  "Orange": "bg-orange-500",
  "yellow": "bg-yellow-300",
  "red": "bg-red-800",
  "pink": "bg-pink-500",
};

export function CategoryLabel({ name, color, isSelected, onClick }: CategoryLabelProps) {
  return (
    <button
      className={`px-4 py-1 rounded-full text-white ${colorMap[color] || 'bg-gray-500'}
      hover:opacity-80 transition-all ${isSelected ? 'ring-2 ring-white' : ''}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        const response = await fetch('https://api.expeditionlapland.com/api/tags');
        const data = await response.json();
        // Mapowanie danych ze Strapi
        const formattedCategories = data.data.map((item: any) => ({
          id: item.id,
          name: item.attributes.name,
          color: item.attributes.color,
        }));
        setCategories(formattedCategories);
        setError(null);
      } catch (err) {
        setError('Nie udało się załadować kategorii.');
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null); // Odznaczenie kategorii
    } else {
      setSelectedCategory(categoryName); // Zaznaczenie nowej kategorii
    }
  };

  if (loading) {
    return <p>Ładowanie kategorii...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Wybierz kategorię:</h2>
      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <CategoryLabel
            key={category.id}
            name={category.name}
            color={category.color}
            isSelected={selectedCategory === category.name}
            onClick={() => handleCategoryClick(category.name)}
          />
        ))}
      </div>
    </div>
  );
}
