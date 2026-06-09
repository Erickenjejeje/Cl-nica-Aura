import { motion } from "motion/react";

export function Services() {
  const servicesData = [
    {
      title: "Odontologia",
      description:
        "Cuide da saúde do seu sorriso com tratamentos voltados para prevenção, estética e reabilitação oral. Da limpeza e restauração aos procedimentos mais avançados, trabalhamos para garantir dentes saudáveis, mais conforto ao mastigar e a confiança de sorrir sem preocupações.",
      image:
        "https://iili.io/CBdX1KG.png",
    },
    {
      title: "Enfermagem",
      description:
        "Conte com assistência profissional para acompanhamento da sua saúde, realização de procedimentos e cuidados essenciais para o seu bem-estar. Nossa equipe atua com atenção, segurança e responsabilidade, oferecendo suporte qualificado em cada necessidade.",
      image:
        "https://iili.io/CBdtyFa.png",
    },
    {
      title: "Fisioterapia",
      description:
        "Recupere seus movimentos, reduza dores e conquiste mais qualidade de vida. Por meio de técnicas especializadas e atendimento individualizado, auxiliamos na reabilitação física, prevenção de lesões e melhora da sua capacidade funcional no dia a dia.",
      image:
        "https://iili.io/CBdpMN4.jpg",
    },
  ];

  return (
    <section
      id="servicos"
      className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap scroll-mt-28"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h2 className="font-headline-md text-headline-md text-on-surface">
          Nossas Especialidades
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {servicesData.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col"
          >
            <div className="aspect-video w-full mb-6 overflow-hidden bg-surface-container-highest rounded-sm border border-outline-variant/10">
              <motion.img
                initial={{ scale: 1.15, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[10%]"
                src={service.image}
              />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 border-b border-outline-variant/30 pb-3">
              {service.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
              {service.description}
            </p>
            <a
              href="https://wa.me/5517996443918"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-label-lg text-label-lg text-tertiary hover:text-primary transition-colors w-fit group/link"
            >
              <span className="border border-outline-variant px-4 py-2 text-xs tracking-wider uppercase group-hover/link:border-primary">
                Agendar
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                chevron_right
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
