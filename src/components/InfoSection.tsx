import { MapPin } from "lucide-react";
import { motion } from "motion/react";

export function InfoSection() {
  return (
    <section
      id="contato"
      className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap scroll-mt-28"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-surface-container-low p-8 md:p-12 border border-outline-variant/30 rounded-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Location Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                location_on
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Nossa Localização
              </h3>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
              Av. Cel. Junqueira, 1106
              <br />
              Jardim Lucelia
              <br />
              Novo Horizonte - SP
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              <strong>Telefone:</strong> (17) 99644-3918
            </p>
          </div>

          {/* Hours Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                schedule
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Horário de Atendimento
              </h3>
            </div>
            <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant mb-6">
              <li className="flex justify-between border-b border-outline-variant/20 pb-2">
                <span>Segunda a Sexta</span>
                <span className="font-medium text-on-surface">08:00 - 19:00</span>
              </li>
              <li className="flex justify-between border-b border-outline-variant/20 pb-2">
                <span>Sábado</span>
                <span className="font-medium text-on-surface">08:00 - 13:00</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Domingo</span>
                <span className="font-medium text-primary">Fechado</span>
              </li>
            </ul>
            <a
              href="https://maps.app.goo.gl/iP5DU7sgR3spgqL98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full justify-center items-center gap-2 px-5 py-3 bg-primary text-on-primary hover:bg-primary/95 transition-all duration-300 rounded-sm font-medium text-sm shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <MapPin className="w-4 h-4" />
              Ver no Google Maps
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
