// Define app categories for filtering
// export type AppCategory = "All" | "Image" | "Text" | "Game" | "Life";
export type AppCategory = "all" | "image" | "text" | "game" | "life";
// Define app data structure with categories
export interface AppData {
  id: string;
  titleKey: string;
  icon: string;
  descriptionKey: string;
  image: string;
  featuresKeys: string[];
  categories: AppCategory[];
  url?: string;
}

// Available categories for tabs
// export function getCategories(): AppCategory[] {
//   return ["All", "Image", "Text", "Game", "Life"];
// }
// export function getCategories(): AppCategory[] {
//   return ["all", "image", "text", "game", "life"];
// }
export function getCategoryKeys(): AppCategory[] {
  return ["all", "image", "text", "game", "life"];
}

export function getCategoryNameKey(category: AppCategory): string {
  return `Category.${category}`;
}

// App data with categories
export function getApps(): AppData[] {
  return [
    {
      id: "nuxtFaviconGenerator",
      titleKey: "Apps.nuxtFaviconGenerator.title",
      icon: "🖼️",
      descriptionKey: "Apps.nuxtFaviconGenerator.description",
      image: "/app/listdiff.png",
      featuresKeys: [],
      categories: ["image"],
      url: "nuxt-favicon-generator.huyixi.com",
    },
    {
      id: "listDiff",
      titleKey: "Apps.listDiff.title",
      icon: "📋",
      descriptionKey: "Apps.listDiff.description",
      image: "/app/listdiff.png",
      featuresKeys: [],
      categories: ["text"],
      url: "https://list.huyixi.com",
    },
    {
      id: "strawberrySchedule",
      titleKey: "Apps.strawberrySchedule.title",
      icon: "🍓",
      descriptionKey: "Apps.strawberrySchedule.description",
      image: "/app/fs25.png",
      featuresKeys: [],
      categories: ["life"], // Changed from empty to "life"
      url: "https://fs25.huyixi.com",
    },
    {
      id: "ticTacToe",
      titleKey: "Apps.ticTacToe.title",
      icon: "🎮",
      descriptionKey: "Apps.ticTacToe.description",
      image: "/app/listdiff.png",
      featuresKeys: [],
      categories: ["game"],
      url: "https://tic-tac-toe.huyixi.com/",
    },
    {
      id: "timeProgress",
      titleKey: "Apps.timeProgress.title",
      icon: "⏳",
      descriptionKey: "Apps.timeProgress.description",
      image: "/app/listdiff.png",
      featuresKeys: [],
      categories: ["life"],
      url: "https://yearsprogress.huyixi.com/",
    },
    {
      id: "nineHundredMonths",
      titleKey: "Apps.nineHundredMonths.title",
      icon: "📅",
      descriptionKey: "Apps.nineHundredMonths.description",
      image: "/app/listdiff.png",
      featuresKeys: [],
      categories: ["life"],
      url: "https://900months.huyixi.com/",
    },
    {
      id: "comingSoon",
      titleKey: "Apps.comingSoon.title",
      icon: "🔜",
      descriptionKey: "Apps.comingSoon.description",
      image: "/app/listdiff.png",
      featuresKeys: [],
      categories: [],
      url: "https://www.figma.com",
    },
  ];
}
