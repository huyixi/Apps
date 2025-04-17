import type { AppData } from "@/lib/app-data"
import AppCard from "@/components/app-card"

interface AppGridProps {
  apps: AppData[]
  t: (key: string) => string
}

export default function AppGrid({ apps, t }: AppGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {apps.map((app, index) => (
        <AppCard
          key={index}
          title={t(app.titleKey)}
          icon={app.icon}
          description={t(app.descriptionKey)}
          image={app.image}
          features={app.featuresKeys.map((key) => t(key))}
          t={t}
          url={app.url}
        />
      ))}
    </div>
  )
}
