import {motion} from "framer-motion";
import {Lang, translations} from "@/data/translations";

const nameVariants = {
  hidden: {opacity: 0, y: 20},
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {delay: i * 0.05, duration: 0.45},
  }),
};

type Props = {lang: Lang};

export default function Hero({lang}: Props) {
  const name = "Ghulam Al Hafizh".split("");
  const content = translations[lang].hero;

  return (
    <section
      id="hero"
      className="pt-20 md:pt-24 min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:w-1/2 lg:w-2/5">
          <img
            src="/hero-image.png"
            alt="Profile"
            className="rounded-lg shadow-lg object-cover w-full max-w-[400px] mx-auto"
          />
        </div>

        <div className="md:w-1/2 lg:w-3/5 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            {name.map((letter, index) => (
              <motion.span
                key={index}
                variants={nameVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                className="inline-block">
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            {content.role}
          </h2>

          <p className="text-gray-600 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed whitespace-pre-line">
            {content.body}
          </p>

          <a
            href="#portfolio"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            {content.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
