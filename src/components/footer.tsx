interface FooterProps {
  t: (key: string) => string;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-gray-600">{t("Footer.text")}</p>
      </div>
    </footer>
  );
}
