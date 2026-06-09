import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews: Testimonial[] = [
    {
      name: "Mariana Silva",
      rating: 5,
      text: "Fui muito bem atendida desde a recepção até a consulta. A equipe é educada, atenciosa e passa muita confiança. Com certeza voltarei quando precisar."
    },
    {
      name: "Carlos Henrique",
      rating: 5,
      text: "Já utilizei os serviços de odontologia e fisioterapia da clínica e tive uma ótima experiência em ambos. Profissionais competentes e ambiente muito organizado."
    },
    {
      name: "Patrícia Almeida",
      rating: 5,
      text: "Levei minha mãe para atendimento de enfermagem e fomos muito bem recebidos. O cuidado e a atenção fizeram toda a diferença. Recomendo!"
    },
    {
      name: "José Roberto",
      rating: 5,
      text: "Gostei bastante da estrutura da clínica e da rapidez no atendimento. Tudo muito limpo, bem organizado e com profissionais que realmente se preocupam com os pacientes."
    },
    {
      name: "Fernanda Souza",
      rating: 5,
      text: "Excelente atendimento! A equipe foi muito prestativa e tirou todas as minhas dúvidas. Dá para perceber o comprometimento com a qualidade e o bem-estar dos pacientes."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section id="avaliacoes" className="mb-section-gap bg-background max-w-container-max mx-auto px-6 md:px-margin-desktop scroll-mt-28">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center mb-16"
      >
        <h2 className="font-headline-md text-headline-md md:text-4xl text-on-surface tracking-tight max-w-2xl">
          A palavra de quem confia em nossa dedicação integral
        </h2>
        <div className="w-12 h-1 bg-primary/20 mt-6 rounded-full"></div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl mx-auto overflow-hidden"
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              <div
                id={`testimonial-card-${index}`}
                className="bg-surface-container p-8 md:p-10 rounded-xl border border-outline-variant/20 flex flex-col justify-between shadow-sm min-h-[240px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-0.5 text-primary">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4.5 h-4.5 fill-current stroke-none" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-primary/10" />
                  </div>
                  <p className="text-on-surface-variant text-body-md md:text-body-lg italic leading-relaxed mb-6">
                    "{review.text}"
                  </p>
                </div>

                <div className="border-t border-outline-variant/30 pt-4">
                  <h4 className="font-semibold text-on-surface text-base">
                    {review.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators for current slide */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "bg-primary w-6"
                  : "bg-primary/35 hover:bg-primary/50"
              }`}
              aria-label={`Ir para avaliação ${idx + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
