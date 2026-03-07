import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGithub,
  SiSupabase,
  SiPrisma,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";
import {FaGraduationCap, FaLanguage, FaCode} from "react-icons/fa";
import {Lang, translations, skills} from "@/data/translations";

type Props = {lang: Lang};

const skillIconMap: Record<string, React.ComponentType<{className?: string}>> =
  {
    React: SiReact,
    "Next.js": SiNextdotjs,
    "Node.js": SiNodedotjs,
    Express: SiExpress,
    GitHub: SiGithub,
    Supabase: SiSupabase,
    Prisma: SiPrisma,
    PostgreSQL: SiPostgresql,
    Vercel: SiVercel,
  };

function SkillPill({label}: {label: string}) {
  const Icon = skillIconMap[label];
  return (
    <span className="text-sm px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm inline-flex items-center gap-2 hover:shadow-md transition-shadow">
      {Icon ? <Icon className="w-4 h-4" /> : null}
      {label}
    </span>
  );
}

export default function About({lang}: Props) {
  const t = translations[lang].about;

  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t.title}
          </h2>
          <p className="text-gray-500 text-lg">{t.subtitle}</p>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {t.name}
              </h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {t.bio}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-semibold text-gray-700">
              {t.eduTitle}
            </h3>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 rounded-full">
                    <FaGraduationCap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {t.edu1Title}
                    </h4>
                    <p className="text-gray-600">{t.edu1Org}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {t.edu1Year}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    <FaLanguage className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {t.edu2Title}
                    </h4>
                    <p className="text-gray-600">{t.edu2Org}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {t.edu2Year}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 rounded-full">
                    <FaCode className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {t.edu3Title}
                    </h4>
                    <p className="text-gray-600">{t.edu3Org}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                      {t.edu3Year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-semibold text-gray-700">
              {t.stackTitle}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((label) => (
                <SkillPill key={label} label={label} />
              ))}
            </div>

            <p className="text-xs text-gray-400">{t.stackNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
