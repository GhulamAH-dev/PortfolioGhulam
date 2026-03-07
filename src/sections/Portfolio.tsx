import {Lang, translations, projects} from "@/data/translations";

type Props = {lang: Lang};

export default function Portfolio({lang}: Props) {
  const t = translations[lang].portfolio;
  const projectList = projects[lang];

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {t.heading}
          </h2>
          <p className="text-gray-500 mt-3">{t.sub}</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectList.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-7 hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1.5">
                  {t.live}
                  <span aria-hidden>↗</span>
                </a>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                {p.meta} • {p.year}
              </p>

              <p className="text-gray-700 mt-4 leading-relaxed">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {p.tech.map((x) => (
                  <span
                    key={x}
                    className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
