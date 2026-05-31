import { defineItinerary } from './_schema';

import cover from '../../assets/itineraries/taiwan/taiwan-cover.jpg';
import d01 from '../../assets/itineraries/taiwan/d01-ximending-night.jpg';
import d02taipei101 from '../../assets/itineraries/taiwan/d02-taipei101.jpg';
import d02zhengbin from '../../assets/itineraries/taiwan/d02-zhengbin-houses.jpg';
import d03 from '../../assets/itineraries/taiwan/d03-cijin-sunset.jpg';
import d04 from '../../assets/itineraries/taiwan/d04-anping-treehouse.jpg';
import d05 from '../../assets/itineraries/taiwan/d05-dongqing-canoes.jpg';
import d06 from '../../assets/itineraries/taiwan/d06-weather-station-view.jpg';
import d07 from '../../assets/itineraries/taiwan/d07-tianchi-lake.jpg';
import d08 from '../../assets/itineraries/taiwan/d08-zhaori-night.jpg';
import d09snorkel from '../../assets/itineraries/taiwan/d09-shilang-snorkel.jpg';
import d09beach from '../../assets/itineraries/taiwan/d09-dabaisha-beach.jpg';
import d10 from '../../assets/itineraries/taiwan/d10-sunrise-zhaori.jpg';
import d11 from '../../assets/itineraries/taiwan/d11-chaikou-walkway.jpg';
import d12 from '../../assets/itineraries/taiwan/d12-east-coast-train.jpg';
import d13 from '../../assets/itineraries/taiwan/d13-elephant-mountain.jpg';

export default defineItinerary({
  // ---- card / filter / SEO ----
  slug: 'taiwan',
  title: 'Taiwan insolita & isole selvagge',
  eyebrow: 'Formosa, 福爾摩沙',
  summary:
    "Quattordici giorni tra metropoli e Pacifico: due basi sul continente e poi le isole vulcaniche di Lanyu e Lüdao, tra cultura Tao, sorgenti termali salate e barriere coralline.",
  country: 'Taiwan',
  continent: 'asia',
  durationDays: 14,
  durationNights: 13,
  season: 'Tarda primavera',
  tags: ['Isole', 'Snorkeling', 'Cultura Tao', 'Treni', 'Termale', 'Vulcani'],
  coverImage: cover,
  coverAlt: 'Taiwan — isole vulcaniche del Pacifico e metropoli del nord.',
  featured: true,
  published: '24 Mag 2026',
  travelers: 2,

  // ---- hero ----
  heroTitleHtml: 'Taiwan <em>insolita</em><br/>&amp; isole<br/>selvagge.',
  heroEyebrows: ['№ 01 · Spec. di viaggio', 'Formosa, 福爾摩沙'],
  heroMeta: [
    {
      k: 'Durata',
      v: '14 giorni',
      sub: '13 notti — 2 basi + 2 isole',
    },
    {
      k: 'Rotta',
      v: 'Triangolo',
      sub: 'Taipei · Kaohsiung · Lanyu · Lüdao',
    },
    {
      k: 'Budget · persona',
      v: '650 €',
      sub: '22 085 TWD · esclusi voli e alloggi',
    },
    {
      k: 'Visti',
      v: 'Esenti',
      sub: 'IT + AL · fino a 90 giorni',
    },
  ],

  // ---- route ----
  mapEmbedUrl:
    'https://www.google.com/maps/d/embed?mid=1yFxNefJ4o9TERyX2gi8HdB2Ji2sWABk&ehbc=2E312F',
  mapEditUrl:
    'https://www.google.com/maps/d/edit?mid=1yFxNefJ4o9TERyX2gi8HdB2Ji2sWABk&usp=sharing',
  routeHeadlineHtml: 'Dal nord urbano alle <em>isole vulcaniche</em> del Pacifico.',
  routeLede:
    "Quattordici giorni che cuciono insieme due metropoli, una capitale storica, e l'arcipelago più selvaggio di Taiwan. Due basi sul continente, un transito a Taitung, e poi tre notti tra i Tao di Lanyu e quattro tra le sorgenti termali di Lüdao.",
  legs: [
    {
      n: '01',
      name: 'Taipei',
      sub: 'Arrivo, Ximending, Keelung',
      days: 'D1 — D2',
    },
    {
      n: '02',
      name: 'Kaohsiung & Tainan',
      sub: 'HSR, Pier-2, Anping',
      days: 'D3 — D4',
    },
    {
      n: '03',
      name: 'Taitung',
      sub: 'Transito notturno verso il porto',
      days: 'D4',
    },
    {
      n: '04',
      name: 'Orchid Island · Lanyu',
      sub: 'Cultura Tao & foreste',
      days: 'D5 — D7',
    },
    {
      n: '05',
      name: 'Green Island · Lüdao',
      sub: 'Termali salate & barriere',
      days: 'D8 — D11',
    },
    {
      n: '06',
      name: 'Ritorno a Taipei',
      sub: 'Maokong, Xiangshan, partenza',
      days: 'D12 — D14',
    },
  ],

  // ---- content ----
  chapters: [
    {
      id: 'chap-taipei',
      label: 'Taipei',
      chapterTag: 'Capitolo 01 · D1 — D2',
      coords: '25.04° N · 121.51° E',
      headlineHtml: 'Taipei, <em>l\'arrivo notturno</em>.',
      blurb:
        'Due giorni per assestare il fuso orario, scoprire i mercati notturni e fare una gita sulla costa nord verso Keelung, dove le case colorate sul porto sembrano un origami.',
      days: [
        {
          dayNumber: '01',
          label: 'Arrivo',
          location: 'Taipei',
          title:
            'Aeroporto Taoyuan, MRT Express e prima cena di street food a Ximending.',
          images: [
            {
              src: d01,
              alt: 'Ximending di notte — insegne luminose e folla nella zona pedonale.',
              aspectRatio: '21-9',
              feature: true,
            },
          ],
          activities: [
            {
              when: 'Pomeriggio',
              what: "Arrivo all'aeroporto di Taoyuan (TPE). Trasferimento alla Taipei Main Station con la MRT Airport Express (≈ 35 min). Check-in a Ximending.",
            },
            {
              when: 'Sera',
              what: 'Passeggiata nella zona pedonale di Ximending. Cena leggera di street food per ambientarsi al fuso.',
            },
          ],
          pois: [
            { name: 'Taoyuan Airport · T1 MRT', lat: 25.0828, lon: 121.2422 },
            { name: 'Taipei Main Station', lat: 25.0478, lon: 121.517 },
            { name: 'Ximending Pedestrian Zone', lat: 25.0441, lon: 121.5085 },
          ],
          notes: [],
        },
        {
          dayNumber: '02',
          label: 'Day Trip',
          location: 'Taipei · Keelung',
          title:
            'Mattina urbana al Taipei 101, pomeriggio sulla costa di Keelung tra case colorate e piscine vulcaniche.',
          images: [
            {
              src: d02taipei101,
              alt: 'Taipei 101 — grattacielo iconico dalla base, vista verticale.',
              aspectRatio: '3-4',
              feature: false,
            },
            {
              src: d02zhengbin,
              alt: "Zhengbin Port — case colorate del porto di Keelung, riflesse nell'acqua.",
              aspectRatio: '3-4',
              feature: false,
            },
          ],
          activities: [
            {
              when: 'Mattina',
              what: 'Visita al Xinyi Financial District e giro attorno al Taipei 101 Mall.',
            },
            {
              when: 'Pomeriggio',
              what: 'TRA Local Train per Keelung (≈ 40 min). Zhengbin Port Color Houses e Heping Island Park (piscine naturali, rocce vulcaniche).',
            },
            {
              when: 'Sera',
              what: 'Cena di pesce al Miaokou Night Market a Keelung. Rientro a Taipei in treno.',
            },
          ],
          pois: [
            { name: 'Taipei 101', lat: 25.0339, lon: 121.5644 },
            { name: 'Keelung Railway Station', lat: 25.1322, lon: 121.7397 },
            { name: 'Zhengbin Port Color Houses', lat: 25.1524, lon: 121.7686 },
            { name: 'Heping Island Park', lat: 25.1601, lon: 121.7645 },
            { name: 'Miaokou Night Market', lat: 25.1283, lon: 121.7441 },
          ],
          notes: [],
        },
      ],
    },
    {
      id: 'chap-sud',
      label: 'Sud',
      chapterTag: 'Capitolo 02 · D3 — D4',
      coords: '22.63° N · 120.30° E',
      headlineHtml: 'A sud, <em>con l\'alta velocità</em>.',
      blurb:
        "Un balzo di 350 km in 1h45 con il THSR. Kaohsiung è caldo umido tropicale, magazzini portuali riconvertiti, traghetti rossi per Cijin. E poi Tainan, l'antica capitale, prima del transito notturno verso il porto delle isole.",
      days: [
        {
          dayNumber: '03',
          label: 'Trasferimento',
          location: 'Kaohsiung · Cijin',
          title:
            "High-Speed Rail per Kaohsiung, pomeriggio al Pier-2, tramonto sull'isola di Cijin.",
          images: [
            {
              src: d03,
              alt: 'Tramonto sul faro di Cijin Island, sabbia nera in primo piano.',
              aspectRatio: '21-9',
              feature: true,
            },
          ],
          activities: [
            {
              when: 'Mattina',
              what: "THSR da Taipei a Kaohsiung — Zuoying HSR Station (≈ 1h 45m). Check-in nell'area del Pier-2.",
            },
            {
              when: 'Pomeriggio',
              what: 'Pier-2 Art Center, magazzini portuali riconvertiti. Traghetto di 5 minuti per Cijin Island: spiaggia di sabbia nera e faro al tramonto.',
            },
            {
              when: 'Sera',
              what: 'Cena al Ruifeng Night Market.',
            },
          ],
          pois: [
            { name: 'Zuoying HSR Station', lat: 22.6879, lon: 120.3069 },
            { name: 'Kaohsiung Railway Station', lat: 22.6397, lon: 120.3023 },
            { name: 'Pier-2 Art Center', lat: 22.62, lon: 120.2818 },
            { name: 'Cijin Ferry Pier', lat: 22.6186, lon: 120.2692 },
            { name: 'Ruifeng Night Market', lat: 22.6659, lon: 120.3006 },
          ],
          notes: [],
        },
        {
          dayNumber: '04',
          label: 'Transito',
          location: 'Tainan → Taitung',
          title:
            "Tainan al mattino — Snail Alley e l'albero divora-magazzino di Anping — poi treno notturno a Taitung.",
          images: [
            {
              src: d04,
              alt: 'Anping Tree House — radici di banyan che ricoprono un magazzino coloniale.',
              aspectRatio: '4-3',
              feature: true,
            },
          ],
          activities: [
            {
              when: 'Mattina',
              what: 'Treno locale per Tainan (≈ 30 min), antica capitale. Anping Tree House e Snail Alley nel quartiere storico.',
            },
            {
              when: 'Pomeriggio',
              what: 'Ritorno a Kaohsiung per recuperare i bagagli. TRA Express serale per Taitung (es. 19:15 → 21:15).',
            },
            {
              when: 'Sera',
              what: 'Cena al Taitung Night Market. Notte in città prima del traghetto del mattino.',
            },
          ],
          pois: [
            { name: 'Tainan Railway Station', lat: 22.9972, lon: 120.2127 },
            { name: 'Anping Tree House', lat: 23.0031, lon: 120.1603 },
            { name: 'Snail Alley', lat: 22.9922, lon: 120.2014 },
            { name: 'Taitung Railway Station', lat: 22.7933, lon: 121.1232 },
            { name: 'Taitung Night Market', lat: 22.7554, lon: 121.1502 },
          ],
          notes: [
            {
              text: 'Promemoria — Patente Internazionale Modello 1949 è obbligatoria per noleggiare scooter a benzina su entrambe le isole. Senza, niente noleggio.',
              source: 'Logistica · noleggi',
              variant: 'terra',
            },
          ],
        },
      ],
    },
    {
      id: 'chap-lanyu',
      label: 'Lanyu',
      chapterTag: 'Capitolo 03 · D5 — D7',
      coords: '22.05° N · 121.52° E',
      headlineHtml: 'Lanyu, <em>l\'isola delle orchidee</em>.',
      blurb:
        "Tre notti su un'isola vulcanica nel Pacifico, casa del popolo Tao. Canoe tradizionali di legno dipinte a mano, case sotterranee, foreste tropicali e un lago sacro nel cratere. Si gira tutto in scooter — l'unica strada è un anello costiero di 40 km.",
      days: [
        {
          dayNumber: '05',
          label: 'Traghetto',
          location: 'Lanyu',
          title:
            'Traghetto del mattino da Fugang. Giro dell\'isola in scooter, canoe Tao a Dongqing Bay.',
          images: [
            {
              src: d05,
              alt: "Canoe Tao dipinte sulla spiaggia di Dongqing Bay all'alba.",
              aspectRatio: '21-9',
              feature: true,
            },
          ],
          activities: [
            {
              when: 'Mattina',
              what: 'Taxi per Fugang Harbor. Traghetto delle 07:00 / 07:30 per Lanyu (≈ 2h 30m). Check-in al minshuku, noleggio scooter.',
            },
            {
              when: 'Pomeriggio',
              what: "Giro dell'isola. Sosta a Dongqing Bay per vedere le canoe tradizionali Tao in legno scolpito.",
            },
            {
              when: 'Sera',
              what: 'Cena in un diner locale: taro nativo, verdure selvatiche, pesce del giorno.',
            },
          ],
          pois: [
            { name: 'Fugang Fishery Harbor', lat: 22.7885, lon: 121.1925 },
            { name: 'Kaiyuan Harbor · Lanyu', lat: 22.0526, lon: 121.516 },
            { name: 'Dongqing Bay', lat: 22.0264, lon: 121.5638 },
          ],
          notes: [],
        },
        {
          dayNumber: '06',
          label: 'Cultura',
          location: 'Lanyu',
          title:
            'Case sotterranee Tao al mattino, panorama a 360° dalla stazione meteo, eco-tour notturno con granchi giganti.',
          images: [
            {
              src: d06,
              alt: 'Vista panoramica dalla Lanyu Weather Station — oceano a 360°.',
              aspectRatio: '16-9',
              feature: true,
            },
          ],
          activities: [
            {
              when: 'Mattina',
              what: 'Tour guidato delle case sotterranee tradizionali Tao con un abitante del villaggio.',
            },
            {
              when: 'Pomeriggio',
              what: "Salita alla Lanyu Weather Station sulla vetta dell'isola: panorama oceanico a 360°.",
            },
            {
              when: 'Sera',
              what: 'Eco-tour notturno per avvistare il Lanyu Scops Owl endemico e i granchi giganti del cocco.',
            },
          ],
          pois: [
            { name: 'Lanyu Weather Station', lat: 22.0378, lon: 121.5492 },
          ],
          notes: [
            {
              text: 'Le case sotterranee Tao sono architettura vernacolare unica al mondo — costruite parzialmente sottoterra per resistere ai tifoni del Pacifico.',
              source: 'Nota culturale',
              variant: 'jade',
            },
          ],
        },
        {
          dayNumber: '07',
          label: 'Trekking',
          location: 'Lanyu',
          title:
            'Trek nella foresta pluviale fino al lago sacro Tianchi, pomeriggio a Bayan Bay tra rocce vulcaniche.',
          images: [
            {
              src: d07,
              alt: 'Tianchi / Heaven Lake — lago vulcanico nascosto nella foresta.',
              aspectRatio: '3-2',
              feature: true,
            },
          ],
          activities: [
            {
              when: 'Mattina',
              what: 'Trek guidato attraverso la foresta pluviale tropicale fino a Tianchi (Heaven Lake), lago sacro nel cratere vulcanico.',
            },
            {
              when: 'Pomeriggio',
              what: 'Relax a Bayan Bay: onde, formazioni rocciose costiere, nuoto.',
            },
            {
              when: 'Sera',
              what: "Aperitivo in un beach bar all'aperto. Ultima notte sull'isola.",
            },
          ],
          pois: [
            { name: 'Tianchi / Heaven Lake', lat: 22.0163, lon: 121.5601 },
          ],
          notes: [],
        },
      ],
    },
    {
      id: 'chap-ludao',
      label: 'Lüdao',
      chapterTag: 'Capitolo 04 · D8 — D11',
      coords: '22.66° N · 121.48° E',
      headlineHtml: 'Lüdao, <em>l\'isola verde</em>.',
      blurb:
        'Quattro notti su Green Island: una delle tre sole sorgenti termali al mondo dove l\'acqua salata sgorga in piscine sul mare. Barriere coralline accessibili a piedi, una grotta-tempio, e un sentiero a strapiombo sulla scogliera orientale chiamato "piccola muraglia".',
      days: [
        {
          dayNumber: '08',
          label: 'Termale',
          location: 'Lüdao',
          title:
            'Traghetto inter-isola pomeridiano. Prima sera nelle sorgenti termali salate di Zhaori sotto le stelle.',
          images: [
            {
              src: d08,
              alt: 'Zhaori Hot Springs di notte — piscine sul mare sotto le stelle.',
              aspectRatio: '21-9',
              feature: true,
            },
          ],
          activities: [
            {
              when: 'Pomeriggio',
              what: 'Traghetto diretto da Lanyu a Green Island (≈ 1h 30m). Arrivo, check-in, noleggio scooter.',
            },
            {
              when: 'Sera',
              what: "Zhaori Hot Springs: bagno nelle piscine geotermiche di acqua salata all'aperto, sotto le stelle.",
            },
          ],
          pois: [
            { name: 'Nanliao Harbor · Lüdao', lat: 22.6685, lon: 121.4682 },
            { name: 'Zhaori Hot Springs', lat: 22.6322, lon: 121.5036 },
          ],
          notes: [],
        },
        {
          dayNumber: '09',
          label: 'Snorkeling',
          location: 'Lüdao',
          title:
            'Snorkeling a Shilang, pomeriggio sulla sabbia bianca corallina di Dabaisha.',
          images: [
            {
              src: d09snorkel,
              alt: 'Snorkeling a Shilang — barriera corallina e pesci tropicali.',
              aspectRatio: '3-2',
              feature: false,
            },
            {
              src: d09beach,
              alt: 'Dabaisha Beach — spiaggia di sabbia bianca corallina.',
              aspectRatio: '3-2',
              feature: false,
            },
          ],
          activities: [
            {
              when: 'Mattina',
              what: 'Snorkeling o immersione a Shilang. Camminata sul sentiero di cemento direttamente nei coralli, visita alla cassetta postale subacquea.',
            },
            {
              when: 'Pomeriggio',
              what: "Giro dell'isola in scooter, relax sulle sabbie bianche di Dabaisha Beach.",
            },
            {
              when: 'Sera',
              what: 'Cena su Nanliao main street.',
            },
          ],
          pois: [
            { name: 'Shilang Snorkeling Area', lat: 22.6569, lon: 121.4705 },
            { name: 'Dabaisha Beach', lat: 22.6419, lon: 121.4883 },
          ],
          notes: [],
        },
        {
          dayNumber: '10',
          label: 'Alba',
          location: 'Lüdao',
          title:
            'Sveglia alle 04:30 per l\'alba dalle sorgenti termali. Pomeriggio sulla Piccola Muraglia.',
          images: [
            {
              src: d10,
              alt: 'Alba sul Pacifico vista dalle sorgenti termali di Zhaori.',
              aspectRatio: '16-9',
              feature: true,
            },
          ],
          activities: [
            {
              when: 'Alba',
              what: 'Sveglia alle 04:30. Bagno alle Zhaori Hot Springs per guardare il sole sorgere sul Pacifico.',
            },
            {
              when: 'Pomeriggio',
              what: 'Trekking lungo la Little Great Wall — sentiero di pietra a strapiombo sulle scogliere orientali.',
            },
            {
              when: 'Sera',
              what: 'Relax, cucina locale e birra artigianale.',
            },
          ],
          pois: [{ name: 'Little Great Wall', lat: 22.6617, lon: 121.5065 }],
          notes: [],
        },
        {
          dayNumber: '11',
          label: 'Grotte',
          location: 'Lüdao',
          title:
            'Tempio nella grotta di Guanyin e snorkeling a Chaikou sulla passerella di legno.',
          images: [
            {
              src: d11,
              alt: 'Chaikou — passerella di legno sull\'acqua tra le rocce della barriera.',
              aspectRatio: '3-2',
              feature: true,
            },
          ],
          activities: [
            {
              when: 'Mattina',
              what: 'Visita a Guanyin Cave, tempio naturale all\'interno di una grotta calcarea.',
            },
            {
              when: 'Pomeriggio',
              what: 'Snorkeling a Chaikou sulla barriera nord, usando la passerella panoramica in legno sospesa sull\'acqua.',
            },
            {
              when: 'Sera',
              what: "Ultima cena sull'isola, relax.",
            },
          ],
          pois: [
            { name: 'Chaikou Snorkeling Area', lat: 22.6806, lon: 121.4842 },
            { name: 'Guanyin Cave', lat: 22.6672, lon: 121.5002 },
          ],
          notes: [],
        },
      ],
    },
    {
      id: 'chap-ritorno',
      label: 'Ritorno',
      chapterTag: 'Capitolo 05 · D12 — D14',
      coords: '25.05° N · 121.57° E',
      headlineHtml: 'Il <em>ritorno lento</em>.',
      blurb:
        "Risalita lungo la costa est di Taiwan, una delle linee ferroviarie più scenografiche dell'Asia. Due giorni a Taipei per chiudere il cerchio: funivia tra le colline del tè, mercati notturni, e lo skyline visto dall'Elephant Mountain.",
      days: [
        {
          dayNumber: '12',
          label: 'Risalita',
          location: 'Lüdao → Taipei',
          title:
            'Traghetto di ritorno a Taitung, poi treno TRA lungo la costa est fino a Taipei.',
          images: [
            {
              src: d12,
              alt: 'Treno TRA lungo la costa est di Taiwan, finestrino sul Pacifico.',
              aspectRatio: '16-9',
              feature: true,
            },
          ],
          activities: [
            {
              when: 'Pomeriggio',
              what: 'Traghetto pomeridiano da Lüdao a Taitung (14:30 → 15:20). Taxi alla stazione. TRA Express per Taipei (es. 16:30 → 20:30).',
            },
            {
              when: 'Sera',
              what: 'Check-in a Taipei. Cena tardiva al Raohe Night Market.',
            },
          ],
          pois: [
            { name: 'Raohe Night Market', lat: 25.0501, lon: 121.5735 },
          ],
          notes: [],
        },
        {
          dayNumber: '13',
          label: 'Tè & Skyline',
          location: 'Taipei',
          title:
            'Funivia di Maokong tra i campi di tè, tramonto fotografico dall\'Elephant Mountain.',
          images: [
            {
              src: d13,
              alt: 'Skyline di Taipei al tramonto dall\'Elephant Mountain — Taipei 101 in primo piano.',
              aspectRatio: '16-9',
              feature: true,
            },
          ],
          activities: [
            {
              when: 'Mattina',
              what: 'Maokong Gondola sulle colline. Sosta in una sala da tè tradizionale per un Oolong con vista sulla valle.',
            },
            {
              when: 'Pomeriggio',
              what: 'Shopping a Xinyi o pasticcini souvenir (torte all\'ananas da Chia Te Bakery). Visita a Huashan 1914 Creative Park.',
            },
            {
              when: 'Sera',
              what: "Salita all'Elephant Mountain (Xiangshan, ≈ 20 min) per fotografia di tramonto e skyline.",
            },
          ],
          pois: [
            { name: 'Maokong Gondola Zoo Station', lat: 24.9983, lon: 121.581 },
            { name: 'Elephant Mountain Trailhead', lat: 25.0273, lon: 121.5707 },
          ],
          notes: [],
        },
        {
          dayNumber: '14',
          label: 'Partenza',
          location: 'Taipei → TPE',
          title:
            'MRT Airport Express dalla Taipei Main Station al Taoyuan Airport. Volo di ritorno.',
          images: [],
          activities: [
            {
              when: 'Mattina',
              what: "MRT Airport Express dalla Taipei Main Station all'aeroporto di Taoyuan (TPE). Partenza.",
            },
          ],
          pois: [],
          notes: [
            {
              text: '謝謝臺灣 — Xièxie Táiwān.',
              source: 'Arrivederci',
              variant: 'jade',
            },
          ],
        },
      ],
    },
  ],

  // ---- budget (TWD/EUR five-column table) ----
  budget: {
    amount: 650,
    currency: 'EUR',
    altTotal: { label: 'Totale · TWD', value: '22 085' },
    excludes: ['voli internazionali', 'alloggi'],
    columns: 'twd-eur',
    rows: [
      {
        category: 'Trasporti',
        desc: 'THSR High-Speed Rail, TRA Express, collegamenti regionali.',
        twd: '3 095',
        eur: '~ 91',
        status: 'Fisso',
      },
      {
        category: 'Traghetti',
        desc: 'Pacchetto triangolare Taitung — Lanyu — Lüdao.',
        twd: '2 700',
        eur: '~ 80',
        status: 'Fisso',
      },
      {
        category: 'Scooter isole',
        desc: 'Lanyu (3 giorni) + Lüdao (4 giorni) a benzina, in coppia.',
        twd: '1 700',
        eur: '~ 50',
        status: 'Variabile',
      },
      {
        category: 'Transiti urbani',
        desc: 'EasyCard MRT, funivia Maokong, taxi stazione—porto.',
        twd: '1 040',
        eur: '~ 31',
        status: 'Variabile',
      },
      {
        category: 'Cibo & bevande',
        desc: 'Colazioni, pranzi, cene ai mercati notturni — 14 giorni.',
        twd: '7 700',
        eur: '~ 226',
        status: 'Variabile',
      },
      {
        category: 'Frutta & acqua',
        desc: 'Frutta fresca giornaliera, succhi tropicali, acqua minerale.',
        twd: '2 800',
        eur: '~ 82',
        status: 'Variabile',
      },
      {
        category: 'Attività',
        desc: 'Ingressi (Taipei 101, Asahi, Heping Island, Anping) e guide eco.',
        twd: '1 770',
        eur: '~ 52',
        status: 'Variabile',
      },
      {
        category: 'Varie',
        desc: 'eSIM 4G illimitato per 15 giorni, buffer di sicurezza.',
        twd: '1 500',
        eur: '~ 44',
        status: 'Variabile',
      },
      {
        category: 'Totale',
        desc: 'Budget stimato a terra, per persona (escl. voli e alloggi).',
        twd: '22 085',
        eur: '~ 650',
        status: 'Stima',
        total: true,
      },
    ],
  },

  // ---- logistics ----
  logistics: [
    {
      k: 'Visti & Passaporti',
      v: 'Esenti — fino a 90 giorni.',
      body: "Passaporto italiano e albanese entrambi esenti da visto. Validità del passaporto > 6 mesi al momento dell'ingresso. Biglietto di rientro già prenotato come prova.",
    },
    {
      k: 'Guida sulle isole',
      v: 'Patente Internazionale Modello 1949.',
      body: 'Obbligatoria per noleggiare scooter a benzina su Lanyu e Lüdao. Da richiedere in Motorizzazione prima della partenza. Senza, niente noleggio.',
    },
    {
      k: 'Rotta traghetti',
      v: 'Triangolo Taitung — Lanyu — Lüdao.',
      body: 'Pacchetto ferry triangolare. Partenza dal porto di Fugang (Taitung), arrivo a Kaiyuan (Lanyu), inter-isola pomeridiano a Nanliao (Lüdao), ritorno a Fugang.',
    },
  ],

  footerMark: '福爾摩沙 — Ilha Formosa.',
});
