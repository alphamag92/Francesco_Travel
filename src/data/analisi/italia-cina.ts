import { defineFlightAnalysis } from './_schema';

export default defineFlightAnalysis({
  title: 'Dashboard Voli Italia-Cina',
  intro:
    "Uno sguardo d'insieme alle cifre chiave che caratterizzano i collegamenti aerei tra Italia e Cina.",
  kpis: [
    {
      label: 'Prezzo Minimo A/R',
      value: 'da 300€',
      note: 'Valore registrato in bassa stagione',
    },
    {
      label: 'Prezzo Medio A/R',
      value: '~1.127€',
      note: 'Media generale su tutte le rotte',
    },
    {
      label: 'Un "Buon Affare"',
      value: '< 951€',
      note: 'Soglia per un volo A/R competitivo',
    },
    {
      label: 'Risparmio con Scalo',
      value: 'fino al 37%',
      note: 'Potenziale rispetto a un volo diretto',
    },
  ],
  directVsLayover: {
    intro:
      "La scelta tra un volo diretto e uno con scalo dipende dal bilanciamento tra tempo e budget. I voli diretti, operati prevalentemente da compagnie cinesi, garantiscono rapidità, mentre gli scali, gestiti da un'ampia gamma di vettori, offrono un notevole potenziale di risparmio.",
    direct: { duration: '10-12 ore', price: 'Più costoso' },
    layover: { duration: '13-25+ ore', price: 'Più economico' },
  },
  seasonal: {
    months: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    min: [450, 400, 450, 500, 430, 450, 700, 700, 500, 550, 400, 370],
    max: [700, 650, 750, 850, 900, 800, 1200, 1200, 850, 950, 700, 750],
  },
  bookingTips: [
    {
      title: '🗓️ Anticipo di Prenotazione',
      body: 'Le fonti suggeriscono un anticipo variabile, ma un intervallo tra 1 e 3 mesi prima della partenza è spesso un buon compromesso per trovare tariffe competitive, evitando i picchi di prezzo dell\'ultimo minuto.',
    },
    {
      title: '💡 Flessibilità è la Chiave',
      body: 'Partire durante i giorni feriali (es. mercoledì) è spesso più economico del fine settimana. Usare alert di prezzo e confrontare diverse piattaforme online può rivelare le migliori offerte.',
    },
    {
      title: '🚫 Evita i Periodi di Punta',
      body: "Le Golden Weeks (inizio Maggio e Ottobre) e il Capodanno Cinese (Gen/Feb) vedono un'impennata della domanda interna. Evitare queste date è essenziale per risparmiare e sfuggire a folle immense.",
    },
  ],
  regions: [
    {
      id: 'beijing',
      emoji: '🏛️',
      shortLabel: 'Pechino & Nord',
      title: 'Regione di Pechino (Capitale e Nord)',
      description:
        'Importante centro politico e culturale, questa regione è caratterizzata da inverni freddi ed estati calde. I prezzi dei voli riflettono una forte stagionalità.',
      airports: 'Beijing Capital (PEK), Beijing Daxing (PKX)',
      airlines: 'Air China (da FCO, MXP)',
      timing: 'Clima ideale in Primavera/Autunno. Voli più economici in Febbraio/Maggio/Novembre.',
      prices: [
        { origin: 'Da Roma (FCO)', low: 450, high: 850 },
        { origin: 'Da Milano (MXP)', low: 420, high: 700 },
      ],
    },
    {
      id: 'shanghai',
      emoji: '🏙️',
      shortLabel: 'Shanghai & Costa Est',
      title: 'Regione di Shanghai (Delta dello Yangtze)',
      description:
        "Cuore economico della Cina e spesso la porta d'ingresso più competitiva dall'Italia. Estati calde e molto umide con rischio tifoni.",
      airports: 'Shanghai Pudong (PVG), Shanghai Hongqiao (SHA)',
      airlines: 'China Eastern (da FCO, VCE), Air China (da MXP)',
      timing: 'Clima ideale in Primavera/Autunno. Voli più economici in Giugno/Novembre/Dicembre.',
      prices: [
        { origin: 'Da Roma (FCO)', low: 390, high: 1100 },
        { origin: 'Da Milano (MXP)', low: 411, high: 1100 },
        { origin: 'Da Venezia (VCE)', low: 450, high: 1100 },
      ],
    },
    {
      id: 'pearl_river',
      emoji: '🏭',
      shortLabel: 'Delta Fiume delle Perle',
      title: 'Delta del Fiume delle Perle (Sud)',
      description:
        'Regione subtropicale e dinamica che include Guangzhou, Shenzhen e Hong Kong. Il tardo autunno offre il clima migliore.',
      airports: 'Guangzhou (CAN), Shenzhen (SZX), Hong Kong (HKG)',
      airlines: 'China Southern (CAN), Hainan Airlines (SZX), Cathay Pacific (HKG)',
      timing: 'Clima ideale in Tardo Autunno. Voli più economici in Settembre/Ottobre/Novembre.',
      prices: [
        { origin: 'Da Roma (FCO)', low: 510, high: 900 },
        { origin: 'Da Milano (MXP)', low: 450, high: 850 },
      ],
    },
    {
      id: 'southwest',
      emoji: '🐼',
      shortLabel: 'Sud-Ovest Interno',
      title: 'Cina Sud-Occidentale (Interna)',
      description:
        "Regione di paesaggi mozzafiato, cultura unica e storia antica (Chengdu, Chongqing, Xi'an). I voli diretti stanno aprendo nuove rotte.",
      airports: "Chengdu (TFU/CTU), Chongqing (CKG), Xi'an (XIY)",
      airlines: 'Sichuan Airlines (CTU), Air China (CTU), Hainan Airlines (CKG), China Eastern (XIY)',
      timing: 'Clima ideale in Primavera/Autunno. Voli economici molto variabili (es. Giu, Ott, Nov, Mar).',
      prices: [
        { origin: 'Da Roma (FCO)', low: 520, high: 950 },
        { origin: 'Da Milano (MXP)', low: 410, high: 900 },
      ],
    },
  ],
  airlines: [
    { name: 'Cathay Pacific', score: 8.3 },
    { name: 'Hainan Airlines', score: 8.1 },
    { name: 'Sichuan Airlines', score: 8.0 },
    { name: 'Air China', score: 7.2 },
    { name: 'China Eastern', score: 7.2 },
    { name: 'Lufthansa', score: 6.7 },
  ],
});
