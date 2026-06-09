import { useState, useEffect } from "react";
import { motion } from "motion/react";

const heroImages = [
  "https://iili.io/CBHR9N2.png",
  "https://iili.io/CB2HIHu.jpg",
  "https://iili.io/CB2HjiN.png"
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap pt-32 flex flex-col"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[400px] md:h-[600px] w-full mb-8"
      >
        {/* Geometric backdrop accent */}
        <div className="absolute top-0 right-0 w-3/4 h-full bg-secondary-fixed rounded-bl-[100px] -z-10 opacity-50"></div>
        <div className="relative w-full h-full overflow-hidden rounded-sm shadow-sm border border-outline-variant/20">
          {heroImages.map((imgSrc, idx) => (
            <img
              key={idx}
              alt={`Slide ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out ${
                currentIndex === idx
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 z-0"
              }`}
              src={imgSrc}
            />
          ))}

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-primary w-8"
                    : "bg-primary/40 hover:bg-primary/60"
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start z-10 w-full mb-section-gap"
      >
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="https://wa.me/5517996443918"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-lg text-label-lg rounded hover:bg-tertiary transition-colors duration-300 w-full md:w-auto"
          >
            Agendar Consulta
          </a>
        </div>
      </motion.div>

      <motion.div 
        id="clinica"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center z-10 w-full max-w-4xl mx-auto scroll-mt-28"
      >
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-6 text-balance">
          Quem somos?
        </h1>
        <div className="font-body-lg text-body-lg text-on-surface-variant flex flex-col gap-6 text-center">
          <p>
            Na Clínica Aura, entendemos que saúde, bem-estar e autoestima caminham juntos. Por isso, oferecemos uma abordagem integrada e humanizada, reunindo profissionais qualificados em diversas especialidades para proporcionar um cuidado completo e personalizado.
          </p>
          <p>
            Nosso compromisso vai além da excelência técnica. Buscamos criar uma experiência acolhedora, baseada na confiança, no respeito e na atenção às necessidades de cada paciente. Combinamos conhecimento, tecnologia e atendimento de alto padrão para promover mais qualidade de vida, conforto e segurança em cada etapa do seu cuidado.
          </p>
          <p>
            Acreditamos que cada pessoa merece um acompanhamento individualizado, realizado com empatia, profissionalismo e dedicação. É essa filosofia que orienta nosso trabalho diariamente e faz da Clínica Aura um espaço pensado para cuidar de você de forma integral.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

