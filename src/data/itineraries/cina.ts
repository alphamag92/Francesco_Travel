import { defineItinerary } from './_schema';

import chengdu from '../../assets/itineraries/cina/chengdu_panda.png';
import chongqing from '../../assets/itineraries/cina/chongqing_cyberpunk.png';
import zhangjiajie from '../../assets/itineraries/cina/zhangjiajie_avatar.png';
import yangshuo from '../../assets/itineraries/cina/yangshuo_river.png';
import guangzhou from '../../assets/itineraries/cina/guangzhou_dimsum.png';

export default defineItinerary({
  // ---- card / filter / SEO ----
  slug: 'cina',
  title: 'Cina autentica & cyberpunk del sud',
  eyebrow: 'L\'Impero di Mezzo, 中国',
  summary:
    'Quindici giorni dal Sichuan al sud: panda e case da tè a Chengdu, la metropoli cyberpunk di Chongqing, le montagne di Avatar e i fiumi carsici di Yangshuo, fino al Dim Sum di Guangzhou.',
  country: 'Cina',
  continent: 'asia',
  durationDays: 15,
  durationNights: 14,
  season: 'Estate',
  tags: ['Panda', 'Cyberpunk', 'Karst', 'Treni veloci', 'Street food'],
  coverImage: chongqing,
  coverAlt: 'Skyline cyberpunk di Chongqing illuminata di notte',
  featured: true,
  published: 'Agosto 2026',
  travelers: 2,

  // ---- hero ----
  heroTitleHtml: 'Cina <em>autentica</em><br/>&amp; cyberpunk<br/>del sud.',
  heroEyebrows: ['№ 02 · Spec. di viaggio', 'L\'Impero di Mezzo, 中国'],
  heroMeta: [
    {
      k: 'Durata',
      v: '15 giorni',
      sub: '14 notti — 5 basi principali',
    },
    {
      k: 'Rotta',
      v: 'Sichuan - Sud',
      sub: 'Chengdu · Chongqing · Zhangjiajie · Yangshuo · Guangzhou',
    },
    {
      k: 'Budget · persona',
      v: '930 €',
      sub: 'escluso volo internazionale',
    },
    {
      k: 'Visti',
      v: 'Esenti',
      sub: 'IT — fino a 15 giorni',
    },
  ],

  // ---- route ----
  mapEmbedUrl:
    'https://www.google.com/maps/d/embed?mid=19Ntd3UQF4xD07cN8jShNq5s3kvoP0Fo&ehbc=2E312F',
  mapEditUrl:
    'https://www.google.com/maps/d/edit?mid=19Ntd3UQF4xD07cN8jShNq5s3kvoP0Fo&usp=sharing',
  routeHeadlineHtml: 'Dalle montagne di Avatar alle <em>metropoli del futuro</em>.',
  routeLede:
    'Quindici giorni ottimizzati per l\'esperienza culinaria e l\'autentica vita di strada cinese. Spostamenti rapidi con l\'alta velocità per attraversare i contrasti tra le antiche case da tè del Sichuan e i grattacieli cyberpunk di Chongqing.',
  legs: [
    {
      n: '01',
      name: 'Chengdu',
      sub: 'Panda, Hotpot, Leshan',
      days: 'D1 — D4',
    },
    {
      n: '02',
      name: 'Chongqing',
      sub: 'Cyberpunk, Funivie, Monorotaie',
      days: 'D5 — D6',
    },
    {
      n: '03',
      name: 'Zhangjiajie',
      sub: 'Montagne Avatar, Monte Tianmen',
      days: 'D7 — D9',
    },
    {
      n: '04',
      name: 'Yangshuo',
      sub: 'Zattere, Risaie, Montagne Carsiche',
      days: 'D10 — D11',
    },
    {
      n: '05',
      name: 'Guangzhou & Shenzhen',
      sub: 'Dim Sum, Qixi, Ritorno HK',
      days: 'D12 — D15',
    },
  ],

  // ---- content ----
  chapters: [
    {
      id: 'chap-chengdu',
      label: 'Chengdu',
      chapterTag: 'Capitolo 01 · D1 — D4',
      coords: '30.65° N · 104.06° E',
      headlineHtml: 'Chengdu, <em>tè e lanterne rosse</em>.',
      blurb:
        'La capitale rilassata del Sichuan. Panda giganti, le storiche case da tè nei parchi cittadini e il futuristico centro commerciale attorno a Taikoo Li. Una giornata è dedicata all\'immenso Buddha di Leshan.',
      days: [
        {
          dayNumber: '01-02',
          label: 'Arrivo',
          location: 'Chengdu',
          title: 'Arrivo a Chengdu e immersione nella Chunxi Road.',
          images: [
            {
              src: chengdu,
              alt: 'Panda gigante che mangia bambù a Chengdu',
              aspectRatio: '21-9',
              feature: true,
            },
          ],
          activities: [
            { when: 'D1', what: 'Volo notturno dall\'Italia per Chengdu (TFU).' },
            {
              when: 'D2 Pomeriggio',
              what: 'Arrivo a Chengdu, check-in in hotel (zona Chunxi Road) e riposo per il jetlag.',
            },
            {
              when: 'D2 Sera',
              what: 'Passeggiata a Chunxi Road e Taikoo Li (schermo LED 3D gigante). Cena con Sichuan Hotpot (brodo Yuan Yang Guo).',
            },
          ],
          pois: [],
          notes: [],
        },
        {
          dayNumber: '03',
          label: 'Cultura',
          location: 'Chengdu',
          title: 'Panda Base all\'apertura, tè al Renmin Park e lanterne a Jinli.',
          images: [],
          activities: [
            {
              when: 'Mattina',
              what: 'Visita alla Chengdu Giant Panda Base all\'apertura (h 7:30).',
            },
            {
              when: 'Pomeriggio',
              what: 'Passeggiata al People\'s Park (Renmin Park), tè alla storica casa Heming, vicoli di Kuanzhai Alley.',
            },
            {
              when: 'Sera',
              what: 'Jinli Ancient Street, illuminata da lanterne rosse per assaggiare street food locale.',
            },
          ],
          pois: [],
          notes: [],
        },
        {
          dayNumber: '04',
          label: 'Day Trip',
          location: 'Leshan',
          title: 'Il Buddha Gigante in battello e il mega mall globale.',
          images: [],
          activities: [
            {
              when: 'Mattina',
              what: 'Treno veloce per Leshan (50 min). Battello turistico per ammirare il Buddha Gigante di Leshan dal fiume.',
            },
            {
              when: 'Pomeriggio',
              what: 'Rientro a Chengdu. Visita al New Century Global Center, l\'edificio singolo più grande al mondo.',
            },
          ],
          pois: [],
          notes: [],
        },
      ],
    },
    {
      id: 'chap-chongqing',
      label: 'Chongqing',
      chapterTag: 'Capitolo 02 · D5 — D6',
      coords: '29.56° N · 106.55° E',
      headlineHtml: 'Chongqing, <em>metropoli cyberpunk</em>.',
      blurb:
        'La città verticale costruita sui monti all\'incrocio di due fiumi. Monorotaie che trapassano palazzi, strade a più livelli e palafitte illuminate al neon che ricordano La Città Incantata.',
      days: [
        {
          dayNumber: '05',
          label: 'Alta Velocità',
          location: 'Chongqing',
          title: 'Dal Wet Market di Chengdu ai grattacieli di Jiefangbei.',
          images: [
            {
              src: chongqing,
              alt: 'Skyline cyberpunk di Chongqing illuminata di notte',
              aspectRatio: '21-9',
              feature: true,
            },
          ],
          activities: [
            {
              when: 'Mattina',
              what: 'Visita al Caojiagang Wet Market a Chengdu per frutta fresca estiva.',
            },
            {
              when: 'Pomeriggio',
              what: 'Treno veloce per Chongqing (1h 30m). Check-in a Jiefangbei. Raffles City a Chaotianmen.',
            },
            {
              when: 'Sera',
              what: 'Hongyadong, complesso di case tradizionali illuminate. Vista dal ponte Qiansimen.',
            },
          ],
          pois: [],
          notes: [],
        },
        {
          dayNumber: '06',
          label: 'Verticalità',
          location: 'Chongqing',
          title: 'Monorotaia nei palazzi e attraversamento del fiume in funivia.',
          images: [],
          activities: [
            {
              when: 'Mattina',
              what: 'Visita alla stazione metro di Liziba (monorotaia nel condominio).',
            },
            {
              when: 'Pomeriggio',
              what: 'Yangtze River Cableway per una traversata panoramica sospesi sopra la città.',
            },
            {
              when: 'Sera',
              what: 'Cena provando il celebre Chongqing Hotpot (estremamente saporito e piccante).',
            },
          ],
          pois: [],
          notes: [],
        },
      ],
    },
    {
      id: 'chap-zhangjiajie',
      label: 'Zhangjiajie',
      chapterTag: 'Capitolo 03 · D7 — D9',
      coords: '29.13° N · 110.47° E',
      headlineHtml: 'Zhangjiajie, <em>montagne di Avatar</em>.',
      blurb:
        'Incredibili formazioni rocciose, ascensori verticali nella roccia e montagne sospese. Un miracolo geologico ottimizzato con funivie e scale mobili per limitare la fatica esplorando panorami impossibili.',
      days: [
        {
          dayNumber: '07',
          label: 'Trasferimento',
          location: 'Wulingyuan',
          title: 'Viaggio verso le montagne e passeggiata tradizionale.',
          images: [],
          activities: [
            {
              when: 'Mattina',
              what: 'Treno veloce da Chongqing a Zhangjiajie West (3-4 ore).',
            },
            {
              when: 'Pomeriggio',
              what: 'Check-in a Wulingyuan. Passeggiata a Xibu Alley per shopping e street food.',
            },
          ],
          pois: [],
          notes: [],
        },
        {
          dayNumber: '08',
          label: 'Parco Nazionale',
          location: 'Yuanjiajie',
          title: 'L\'Ascensore Bailong, la Avatar Hallelujah Mountain e Tianzi.',
          images: [
            {
              src: zhangjiajie,
              alt: 'Montagne Avatar a Zhangjiajie avvolte nella nebbia',
              aspectRatio: '21-9',
              feature: true,
            },
          ],
          activities: [
            {
              when: 'Mattina',
              what: 'Ingresso al Parco. Ascensore di Bailong (salita verticale in vetro di 326m).',
            },
            {
              when: 'Pomeriggio',
              what: 'Sentiero pianeggiante a Yuanjiajie per le Avatar Mountains. Bus per Tianzi Mountain e discesa in funivia.',
            },
            { when: 'Sera', what: 'Rientro a Wulingyuan per la cena.' },
          ],
          pois: [],
          notes: [],
        },
        {
          dayNumber: '09',
          label: 'Tianmen',
          location: 'Tianmen M.',
          title: 'Porta del Paradiso, Glass Skywalk e Funivia Record.',
          images: [],
          activities: [
            {
              when: 'Mattina',
              what: 'Spostamento a Zhangjiajie City. Funivia del Monte Tianmen (7,5 km sopra le montagne).',
            },
            {
              when: 'Pomeriggio',
              what: 'Sentieri sospesi e Glass Skywalk. Discesa con scala mobile interna verso la Porta del Paradiso (arco naturale).',
            },
          ],
          pois: [],
          notes: [],
        },
      ],
    },
    {
      id: 'chap-yangshuo',
      label: 'Yangshuo',
      chapterTag: 'Capitolo 04 · D10 — D11',
      coords: '24.77° N · 110.49° E',
      headlineHtml: 'Yangshuo, <em>il fiume pacifico</em>.',
      blurb:
        'Colline carsiche che si riflettono nell\'acqua, zattere di bambù, risaie e tramonti dorati da ammirare in scooter tra villaggi antichi e vallate incontaminate.',
      days: [
        {
          dayNumber: '10',
          label: 'Transito Sud',
          location: 'Yangshuo',
          title: 'Treno nel sud rurale e prima passeggiata a West Street.',
          images: [],
          activities: [
            {
              when: 'Tutto il Giorno',
              what: 'Treno veloce da Zhangjiajie West a Guilin (6,5h). Taxi/Didi per Yangshuo (50 min).',
            },
            {
              when: 'Sera',
              what: 'Sistemazione e passeggiata lungo la vivace West Street per frutta tropicale e cena.',
            },
          ],
          pois: [],
          notes: [],
        },
        {
          dayNumber: '11',
          label: 'Zattere',
          location: 'Yulong River',
          title: 'Fiume Yulong in zattera, scooter in risaia e spettacolo notturno.',
          images: [
            {
              src: yangshuo,
              alt: 'Zattera di bambù sul fiume Yulong a Yangshuo',
              aspectRatio: '21-9',
              feature: true,
            },
          ],
          activities: [
            {
              when: 'Mattina',
              what: 'Discesa su zattera di bambù sul fiume Yulong (da Chaoyang Pier).',
            },
            {
              when: 'Pomeriggio',
              what: 'Noleggio scooter per la Ten-Mile Gallery. Punto panoramico dei 20 Yuan a Xingping.',
            },
            { when: 'Sera', what: 'Spettacolo Impression Sanjie Liu sull\'acqua.' },
          ],
          pois: [],
          notes: [],
        },
      ],
    },
    {
      id: 'chap-guangzhou',
      label: 'Guangzhou & Shenzhen',
      chapterTag: 'Capitolo 05 · D12 — D15',
      coords: '23.12° N · 113.26° E',
      headlineHtml: 'Guangzhou, <em>culla del cibo & futuro</em>.',
      blurb:
        'La capitale gastronomica del paese. Spiedini, Dim Sum, strade millenarie, e una scappata alla Silicon Valley cinese per il festival delle luci sui grattacieli di Shenzhen.',
      days: [
        {
          dayNumber: '12',
          label: 'Panorama',
          location: 'Guangzhou',
          title: 'Alba su Xianggong Mountain e treno per la metropoli.',
          images: [],
          activities: [
            {
              when: 'Alba',
              what: 'Salita a Xianggong Mountain a Yangshuo per vista mozzafiato sul fiume Li.',
            },
            {
              when: 'Pomeriggio',
              what: 'Treno veloce da Guilin a Guangzhou South (2 ore). Sistemazione a Beijing Road o Yuexiu.',
            },
            {
              when: 'Sera',
              what: 'Beijing Road Pedestrian Street, spiedini e spuntini cantonesi.',
            },
          ],
          pois: [],
          notes: [],
        },
        {
          dayNumber: '13',
          label: 'Gita Future',
          location: 'Shenzhen',
          title: 'Shenzhen, elettronica e droni per il Qixi Festival.',
          images: [],
          activities: [
            {
              when: 'Mattina',
              what: 'Treno veloce per Shenzhen (35-40 min). Visita a Huaqiangbei, il mega mercato dell\'elettronica.',
            },
            {
              when: 'Pomeriggio',
              what: 'Osservatorio del Ping An Finance Centre (116° piano) e Coco Park.',
            },
            {
              when: 'Sera',
              what: 'Shenzhen Bay o Civic Center: show di droni e luci per Qixi (San Valentino Cinese). Rientro a Guangzhou.',
            },
          ],
          pois: [],
          notes: [],
        },
        {
          dayNumber: '14-15',
          label: 'Addio',
          location: 'Hong Kong',
          title: 'Dim Sum storico, isola di Shamian e rientro via Hong Kong.',
          images: [
            {
              src: guangzhou,
              alt: 'Un tavolo imbandito di Dim Sum tradizionale a Guangzhou',
              aspectRatio: '21-9',
              feature: true,
            },
          ],
          activities: [
            {
              when: 'D14 Mattina',
              what: 'Shamian Island e il quartiere tradizionale Yongqing Fang.',
            },
            { when: 'D14 Pranzo', what: 'Pranzo Dim Sum da Dian Dou De o Pan Xi.' },
            {
              when: 'D14 Pom/Sera',
              what: 'Trasferimento all\'aeroporto di Hong Kong via treno, traghetto o bus diretto. Volo notturno di rientro.',
            },
            { when: 'D15', what: 'Arrivo in Italia.' },
          ],
          pois: [],
          notes: [],
        },
      ],
    },
  ],

  // ---- budget ----
  budget: {
    amount: 930,
    currency: 'EUR',
    withFlightTotal: '~ 1.630 €',
    excludes: ['Volo internazionale'],
    columns: 'eur',
    rows: [
      {
        category: 'Voli Internazionali',
        desc: 'Volo Italia - Chengdu e ritorno Hong Kong - Italia.',
        eur: '~ 700',
        status: 'Stimato',
      },
      {
        category: 'Trasporti Interni',
        desc: 'Treni Alta Velocità, trasporti locali (metro, Didi), transfer per HKG.',
        eur: '~ 230',
        status: 'Variabile',
      },
      {
        category: 'Alloggi',
        desc: '12 Notti in hotel 3* comodi (in camera doppia condivisa).',
        eur: '~ 240',
        status: 'Fisso',
      },
      {
        category: 'Cibo e Frutta',
        desc: 'Street food, ristoranti locali, noodle, e frutta (per 13 giorni).',
        eur: '~ 200',
        status: 'Variabile',
      },
      {
        category: 'Attrazioni',
        desc: 'Ingressi (Panda Base, Zhangjiajie, Funivie, Zattere, Ping An).',
        eur: '~ 175',
        status: 'Fisso',
      },
      {
        category: 'Varie (VPN/SIM)',
        desc: 'Assicurazione viaggio, VPN (es. LetseVPN), dati internet.',
        eur: '~ 85',
        status: 'Fisso',
      },
      {
        category: 'Totale (Senza Volo)',
        desc: 'Costo a persona a terra (tutto escluso il volo intercontinentale).',
        eur: '~ 930',
        status: 'Stima',
        total: true,
      },
    ],
  },

  // ---- logistics ----
  logistics: [
    {
      k: 'Visti & App',
      v: 'Esenti (15gg) e Digital Payment.',
      body: 'Italiani esenti da visto per 15 giorni. Obbligatorio scaricare Alipay/WeChat per pagamenti e metro, e LetseVPN o Astrill per aggirare il firewall.',
    },
    {
      k: 'Logistica Trasporti',
      v: 'Trip.com e Treni ad Alta Velocità.',
      body: 'Tutti gli spostamenti principali si fanno in treni proiettile molto confortevoli, prenotabili 15 giorni prima tramite Trip.com senza problemi linguistici.',
    },
    {
      k: 'Volo Ottimale',
      v: 'Open Jaw su Hong Kong.',
      body: 'Andata su Chengdu, ritorno da Hong Kong (HKG), facilmente raggiungibile via treno/traghetto da Guangzhou. Aiuta a risparmiare molto e ottimizza la rotta a senso unico.',
    },
  ],
  footerMark: '中国 — L\'Impero di Mezzo.',
});
