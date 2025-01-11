import { CategoryLabel } from './Category-label';
import type { Tag } from '../types/blog';

interface NavigationProps {
  tags: Tag[];
  currentCategory: string;
  setCurrentCategory: (category: string | null) => void; // Możliwość ustawienia null
}

export function Navigation({ tags, currentCategory, setCurrentCategory }: NavigationProps) {
  const handleCategoryClick = (categoryName: string) => {
    if (currentCategory === categoryName) {
      setCurrentCategory(null); // Odznaczenie kategorii
    } else {
      setCurrentCategory(categoryName); // Zaznaczenie nowej kategorii
    }
  };

  return (
    <nav className="flex gap-2 overflow-x-auto py-4 justify-center align-middle">
      <h2 className="text-sm font-semibold self-center justify-center">Wybierz Kategorię:</h2>
      {tags.map((tag) => (
        <CategoryLabel
          key={tag.id}
          name={tag.name}
          color={tag.Color}
          isSelected={currentCategory === tag.name}
          onClick={() => handleCategoryClick(tag.name)}
        />
      ))}
    </nav>
  );
}
