"use client";

import React from "react";
import { useState } from "react";
import Header from "@/components/header";
import CategoryTabs from "@/components/category-tabs";
import AppGrid from "@/components/app-grid";
import Footer from "@/components/footer";
import { type AppCategory, getApps } from "@/lib/app-data";
import { useTranslations } from "next-intl";

type PageParams = {
  lang: string;
};

export default function Apps({ params }: { params: Promise<PageParams> }) {
  // Unwrap the params with React.use()
  const resolvedParams = React.use(params);
  const lang = resolvedParams.lang;

  // Get translations based on the current language
  const t = useTranslations();

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState<AppCategory>("all");

  // Get app data
  const apps = getApps();

  // Filter apps based on selected category
  const filteredApps =
    selectedCategory === "all"
      ? apps
      : apps.filter((app) => app.categories.includes(selectedCategory));

  return (
    <div className="min-h-screen flex flex-col">
      <Header t={t} currentLang={lang} />
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <CategoryTabs
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          t={t}
        />

        <AppGrid apps={filteredApps} t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}
