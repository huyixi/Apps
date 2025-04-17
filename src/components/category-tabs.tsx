"use client";

// import { type AppCategory, getCategories } from "@/lib/app-data";
import {
  type AppCategory,
  getCategoryKeys,
  getCategoryNameKey,
} from "@/lib/app-data";

interface CategoryTabsProps {
  selectedCategory: AppCategory;
  setSelectedCategory: (Category: AppCategory) => void;
  t: (key: string) => string;
}

export default function CategoryTabs({
  selectedCategory,
  setSelectedCategory,
  t,
}: CategoryTabsProps) {
  // const categories = getCategories();
  const categories = getCategoryKeys();

  return (
    <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-xl font-medium text-sm hover:cursor-pointer transition-colors ${
            selectedCategory === category
              ? "bg-[#2563eb] text-white"
              : "bg-[#f3f4f6] text-[#4b5563] hover:bg-[#e5e7eb]"
          }`}
        >
          {t(getCategoryNameKey(category))}
        </button>
      ))}
    </div>
  );
}
