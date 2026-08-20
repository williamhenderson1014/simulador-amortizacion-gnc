type P = { className?: string };

export function Marca({ className }: P) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <path d="M11 12.5a5 5 0 0 1 10 0v11a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-11Z" stroke="currentColor" strokeWidth="2" />
      <path d="M14 8.5V5.5h4v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 17.5h10" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="22.5" r="2" fill="currentColor" />
    </svg>
  );
}

export function Surtidor({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path d="M4.5 20.5V5.2A1.7 1.7 0 0 1 6.2 3.5h5.6a1.7 1.7 0 0 1 1.7 1.7v15.3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M3.2 20.5h11.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4.5 9.6h9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16.7 8.4h2.2a1.6 1.6 0 0 1 1.6 1.6v6.2a1.6 1.6 0 0 1-3.2 0v-2.6h-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function Reloj({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <circle cx="12" cy="12" r="8.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.2V12l3.2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Escudo({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path d="M12 3l7 2.6v5.7c0 4.2-2.8 7.7-7 9.2-4.2-1.5-7-5-7-9.2V5.6L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.6 12.1l2.4 2.4 4.6-4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Herramienta({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path d="M15.5 3.5a5 5 0 0 0-4.6 7l-7 7a1.5 1.5 0 0 0 0 2.1l.5.5a1.5 1.5 0 0 0 2.1 0l7-7a5 5 0 1 0 2-9.6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="16.2" cy="7.8" r="1.7" fill="currentColor" />
    </svg>
  );
}

export function Flecha({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path d="M5 12h13M13 6.5 18.6 12 13 17.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
