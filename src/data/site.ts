// Site-wide configuration & shared copy (Italian).

export const GTM_ID = 'GTM-KC74LVP2';

export interface NavItem {
  label: string;
  /** route path WITHOUT the base prefix; resolved via withBase() in the header */
  path: string;
  disabled?: boolean;
}

export const NAV: NavItem[] = [
  { label: 'Home', path: '' },
  { label: 'Itinerari', path: 'itinerari' },
  { label: 'Analisi', path: 'analisi' },
  { label: 'Chi sono', path: 'chi-sono' },
  { label: 'Chatbot', path: 'chatbot', disabled: true },
];

export const SITE = {
  name: 'Francesco Travels',
  tagline: 'Itinerari di viaggio, raccontati come si deve.',
  description:
    'Rotte curate giorno per giorno, con budget, logistica e luoghi autentici. Dalla Cina cyberpunk del sud alle isole selvagge di Taiwan.',
  email: '',
  startYear: 2024,
};

export const AUTHOR = {
  name: 'Francesco Rugiati',
  role: 'Travel planner & itinerary designer',
  // Seed bio — the Chi sono builder should replace with the verbatim text
  // from backup/html/chi_sono.html if it differs.
  bio: [
    'Progetto viaggi da anni: studio rotte, tempi e costi finché ogni giorno ha un senso e un ritmo.',
    'Su Francesco Travels raccolgo gli itinerari che ho costruito e percorso, con la cura di una guida editoriale e la precisione di chi odia le sorprese in aeroporto.',
  ],
};

// Page-level intro copy (refined per page in Wave 2; safe defaults here).
export const PAGES = {
  itinerari: {
    eyebrow: 'Archivio',
    title: 'Tutti gli itinerari',
    lede: 'Filtra per continente e per durata. Ogni itinerario è raccontato giorno per giorno, con rotta, budget e logistica.',
  },
  analisi: {
    eyebrow: 'Analisi',
    title: 'Dati per viaggiare meglio',
    lede: 'Approfondimenti su prezzi, stagionalità e strategie di prenotazione per costruire viaggi più intelligenti.',
  },
  chatbot: {
    eyebrow: 'In arrivo',
    title: 'Assistente di viaggio',
    lede: 'Presto qui potrai chiedere consigli e costruire il tuo itinerario in conversazione. Stiamo lavorando per aprirlo.',
  },
};
