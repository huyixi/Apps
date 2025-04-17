import { CloudLightningIcon as LightningBolt } from "lucide-react";
import LanguageSwitcher from "@/components/language-switcher";

interface HeaderProps {
  t: (key: string) => string;
  currentLang: string;
}

export default function Header({ t, currentLang }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-2 ">
          <div className="flex items-center gap-2">
            <LightningBolt className="h-6 w-6 text-[#2563eb]" />
            <h1 className="text-2xl font-semibold text-[#111827]">
              {t("Header.title")}
            </h1>
          </div>
          <LanguageSwitcher currentLang={currentLang} />
        </div>
        <p className="text-[#4b5563]">{t("Header.subtitle")}</p>
      </div>
    </header>
  );
}
