import { Video, Code } from "lucide-react";
import Image from "next/image";

interface AppCardProps {
  title: string;
  icon: string;
  description: string;
  image: string;
  features: string[];
  t: (key: string) => string;
  url?: string;
}

export default function AppCard({
  title,
  icon,
  description,
  image,
  features,
  t,
  url = "#",
}: AppCardProps) {
  const handleCardClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="bg-white rounded-xl border border-[#e5e7eb] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      aria-label="try it"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleCardClick();
        }
      }}
    >
      <div className="overflow-hidden relative group aspect-video bg-gray-100">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="object-cover transition-all duration-300 group-hover:brightness-50"
          unoptimized={image?.startsWith("http") ? true : undefined}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-medium px-4 py-2 rounded-full bg-[#2563eb]/80">
            {t("Common.tryIt")}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">{icon}</span>
          <h3 className="font-semibold text-[#111827]">{title}</h3>
        </div>
        <p className="text-sm text-[#4b5563] mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-[#f3f4f6] text-[#4b5563] rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-[#4b5563] bg-white border border-[#e5e7eb] rounded-md hover:bg-[#f9fafb] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Code className="h-3.5 w-3.5" />
            <span>{t("Common.source")}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
