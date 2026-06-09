export function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant/50 py-6">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center md:text-left">
        {/* Brand & Copyright */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <span className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed-dim">
            Clínica Aura
          </span>
          <p className="font-body-md text-body-md text-tertiary dark:text-tertiary-fixed-dim text-sm max-w-sm">
            © 2020 Clínica Aura. Av. Cel. Junqueira, 1106 - Jardim Lucelia, Novo
            Horizonte - SP
          </p>
        </div>
      </div>
    </footer>
  );
}
