import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./evenimente.module.css";

// Date pentru evenimente - Editează această listă pentru a adăuga/modifica evenimente
// type: "seminar" | "conferinta" | "workshop" | "altele"
// status: "upcoming" | "past"
const EVENTS = {
  upcoming: [
    {
      name: "FOSS4G Europe 2026",
      slug: "foss4g-europe-2026",
      date: "29 iunie - 3 iulie 2026",
      location: "Timișoara, România",
      description:
        "Conferința europeană FOSS4G 2026, revine în România! Un eveniment major dedicat software-ului geospațial deschis, organizat de comunitatea locală și europeană.",
      image: "/img/evenimente/foss4g-europe2026.jpg",
      externalUrl: "https://2026.europe.foss4g.org/",
      type: "conferinta",
      isCoOrganizer: true,
      tags: ["conferință", "Europe", "FOSS4G", "open source"],
    },
    {
      name: "Seminare Cluj-Napoca 2026",
      slug: null,
      date: "8 mai 2026",
      location: "Cluj-Napoca, Romania",
      description: "Ediția 46 a seminarelor geo-spatial.org.",
      image: "/img/evenimente/cluj2026.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/cluj2026/",
      type: "seminar",
      edition: 46,
      tags: ["seminar", "Cluj-Napoca", "2026"],
    },
  ],
  past: [
    {
      name: "Seminare Chișinău 2026",
      slug: null,
      date: "6-7 martie 2026",
      location: "Chișinău, Republica Moldova",
      description:
        "Ediția 45 a seminarelor geo-spatial.org. Prima ediție pentru anul 2026, revenim la Chișinău!",
      image: "/img/evenimente/chisinau2026.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/chisinau2026/",
      type: "seminar",
      edition: 45,
      tags: ["seminar", "Chișinău", "2026"],
    },
    {
      name: "Seminare București 2025",
      slug: null,
      date: "31 octombrie 2025",
      location: "București, România",
      description: "Ediția de toamnă la București.",
      image: "/img/evenimente/bucuresti2025.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/bucuresti2025/",
      type: "seminar",
      edition: 44,
      tags: ["seminar", "București", "2025"],
    },
    {
      name: "Seminare Cluj 2025",
      slug: null,
      date: "13 iunie 2025",
      location: "Cluj-Napoca, România",
      description: "Ediția de primăvară la Cluj-Napoca.",
      image: "/img/evenimente/cluj2025.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/cluj2025/",
      type: "seminar",
      edition: 43,
      tags: ["seminar", "Cluj-Napoca", "2025"],
    },
    {
      name: "Seminare Chișinău 2025",
      slug: null,
      date: "28 februarie - 1 martie 2025",
      location: "Chișinău, Republica Moldova",
      description: "Prima ediție la Chișinău!",
      image: "/img/evenimente/chisinau2025.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/chisinau2025/",
      type: "seminar",
      edition: 42,
      tags: ["seminar", "Chișinău", "2025", "premieră"],
    },
    {
      name: "Seminare Timișoara 2024",
      slug: null,
      date: "22 noiembrie 2024",
      location: "Timișoara, România",
      description: "Ediția de toamnă la Timișoara.",
      image: "/img/evenimente/timisoara2024.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/timisoara2024/",
      type: "seminar",
      edition: 41,
      tags: ["seminar", "Timișoara", "2024"],
    },
    {
      name: "Seminare București 2024",
      slug: null,
      date: "25 octombrie 2024",
      location: "București, România",
      description: "Ediția de toamnă la București.",
      image: "/img/evenimente/bucuresti2024.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/bucuresti2024/",
      type: "seminar",
      edition: 40,
      tags: ["seminar", "București", "2024"],
    },
    {
      name: "Seminare Cluj 2024",
      slug: null,
      date: "07 iunie 2024",
      location: "Cluj-Napoca, România",
      description: "Ediția de primăvară la Cluj-Napoca.",
      image: "/img/evenimente/cluj2024.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/cluj2024/",
      type: "seminar",
      edition: 39,
      tags: ["seminar", "Cluj-Napoca", "2024"],
    },
    // 2023
    {
      name: "Seminare Timișoara 2023",
      slug: null,
      date: "24 noiembrie 2023",
      location: "Timișoara, România",
      description: "Ediția de toamnă la Timișoara.",
      image: "/img/evenimente/timisoara2023.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/timisoara2023/",
      type: "seminar",
      edition: 38,
      tags: ["seminar", "Timișoara", "2023"],
    },
    {
      name: "Seminare București 2023",
      slug: null,
      date: "27 octombrie 2023",
      location: "București, România",
      description: "Ediția de toamnă la București.",
      image: "/img/evenimente/bucuresti2023.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/bucuresti2023/",
      type: "seminar",
      edition: 37,
      tags: ["seminar", "București", "2023"],
    },
    {
      name: "Seminare Cluj 2023",
      slug: null,
      date: "05 mai 2023",
      location: "Cluj-Napoca, România",
      description: "Ediția de primăvară la Cluj-Napoca.",
      image: "/img/evenimente/cluj2023.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/cluj2023/",
      type: "seminar",
      edition: 36,
      tags: ["seminar", "Cluj-Napoca", "2023"],
    },
    // 2022
    {
      name: "Seminare Timișoara 2022",
      slug: null,
      date: "25 noiembrie 2022",
      location: "Timișoara, România",
      description: "Ediția de toamnă la Timișoara.",
      image: "/img/evenimente/timisoara2022.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/timisoara2022/",
      type: "seminar",
      edition: 35,
      tags: ["seminar", "Timișoara", "2022"],
    },
    {
      name: "Seminare București 2022",
      slug: null,
      date: "21 octombrie 2022",
      location: "București, România",
      description: "Ediția de toamnă la București.",
      image: "/img/evenimente/bucuresti2022.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/bucuresti2022/",
      type: "seminar",
      edition: 34,
      tags: ["seminar", "București", "2022"],
    },
    {
      name: "Seminare Cluj 2022",
      slug: null,
      date: "10 iunie 2022",
      location: "Cluj-Napoca, România",
      description: "Ediția de primăvară la Cluj-Napoca.",
      image: "/img/evenimente/cluj2022.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/cluj2022/",
      type: "seminar",
      edition: 33,
      tags: ["seminar", "Cluj-Napoca", "2022"],
    },
    // 2021
    {
      name: "Seminare Timișoara 2021",
      slug: null,
      date: "10 decembrie 2021",
      location: "Timișoara, România",
      description: "Ediția de iarnă la Timișoara.",
      image: "/img/evenimente/timisoara2021.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/timisoara2021/",
      type: "seminar",
      edition: 32,
      tags: ["seminar", "Timișoara", "2021"],
    },
    {
      name: "Seminare București 2021",
      slug: null,
      date: "05 noiembrie 2021",
      location: "București, România",
      description: "Ediția de toamnă la București.",
      image: "/img/evenimente/bucuresti2021.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/bucuresti2021/",
      type: "seminar",
      edition: 31,
      tags: ["seminar", "București", "2021"],
    },
    {
      name: "Seminare Cluj 2021",
      slug: null,
      date: "04 iunie 2021",
      location: "Cluj-Napoca, România",
      description:
        "Ediția de primăvară la Cluj-Napoca - prima ediție după pandemie.",
      image: "/img/evenimente/cluj2021.jpg",
      externalUrl: "https://geo-spatial.org/proiecte/seminarii/cluj2021/",
      type: "seminar",
      edition: 30,
      tags: ["seminar", "Cluj-Napoca", "2021"],
    },
    {
      name: "FOSS4G 2019 București",
      slug: "foss4g-2019",
      date: "26-30 August 2019",
      location: "București, România",
      description:
        "Conferința internațională FOSS4G 2019, cel mai mare eveniment global dedicat software-ului geospațial open source. Organizat de geo-spatial.org.",
      image: "/img/evenimente/foss4g2019.jpg",
      externalUrl: "https://2019.foss4g.org/",
      type: "conferinta",
      edition: null,
      tags: ["conferință", "internațional", "FOSS4G", "open source"],
    },
    // 2018
    {
      name: "Seminare Timișoara 2018",
      slug: null,
      date: "23-24 noiembrie 2018",
      location: "Timișoara, România",
      description: "Ediția de toamnă la Timișoara.",
      image: "/img/evenimente/timisoara2018.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=476",
      type: "seminar",
      edition: 23,
      tags: ["seminar", "Timișoara", "2018"],
    },
    {
      name: "Seminare București 2018",
      slug: null,
      date: "12-13 octombrie 2018",
      location: "București, România",
      description: "Ediția de toamnă la București.",
      image: "/img/evenimente/bucuresti2018.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=474",
      type: "seminar",
      edition: 22,
      tags: ["seminar", "București", "2018"],
    },
    {
      name: "Seminare Cluj 2018",
      slug: null,
      date: "20-21 aprilie 2018",
      location: "Cluj-Napoca, România",
      description: "Ediția de primăvară la Cluj-Napoca.",
      image: "/img/evenimente/cluj2018.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=473",
      type: "seminar",
      edition: 21,
      tags: ["seminar", "Cluj-Napoca", "2018"],
    },
    // 2017
    {
      name: "Seminare Timișoara 2017",
      slug: null,
      date: "24-25 noiembrie 2017",
      location: "Timișoara, România",
      description: "Ediția de toamnă la Timișoara.",
      image: "/img/evenimente/timisoara2017.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=461",
      type: "seminar",
      edition: 20,
      tags: ["seminar", "Timișoara", "2017"],
    },
    {
      name: "Seminare București 2017",
      slug: null,
      date: "20-21 octombrie 2017",
      location: "București, România",
      description: "Ediția de toamnă la București.",
      image: "/img/evenimente/bucuresti2017.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=460",
      type: "seminar",
      edition: 19,
      tags: ["seminar", "București", "2017"],
    },
    {
      name: "Seminare Cluj 2017",
      slug: null,
      date: "31 Martie - 1 aprilie 2017",
      location: "Cluj-Napoca, România",
      description: "Ediția de primăvară la Cluj-Napoca.",
      image: "/img/evenimente/cluj2017.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=459",
      type: "seminar",
      edition: 18,
      tags: ["seminar", "Cluj-Napoca", "2017"],
    },
    // 2016
    {
      name: "Seminare Timișoara 2016",
      slug: null,
      date: "18-19 noiembrie 2016",
      location: "Timișoara, România",
      description: "Ediția de toamnă la Timișoara.",
      image: "/img/evenimente/timisoara2016.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=457",
      type: "seminar",
      edition: 17,
      tags: ["seminar", "Timișoara", "2016"],
    },
    {
      name: "Seminare București 2016",
      slug: null,
      date: "7-8 octombrie 2016",
      location: "București, România",
      description: "Ediția de toamnă la București.",
      image: "/img/evenimente/bucuresti2016.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=456",
      type: "seminar",
      edition: 16,
      tags: ["seminar", "București", "2016"],
    },
    {
      name: "Seminare Cluj 2016",
      slug: null,
      date: "15-16 aprilie 2016",
      location: "Cluj-Napoca, România",
      description: "Ediția de primăvară la Cluj-Napoca.",
      image: "/img/evenimente/cluj2016.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=450",
      type: "seminar",
      edition: 15,
      tags: ["seminar", "Cluj-Napoca", "2016"],
    },
    // 2015
    {
      name: "Seminare Timișoara 2015",
      slug: null,
      date: "20-21 noiembrie 2015",
      location: "Timișoara, România",
      description: "Ediția de toamnă la Timișoara.",
      image: "/img/evenimente/timisoara2015.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=445",
      type: "seminar",
      edition: 14,
      tags: ["seminar", "Timișoara", "2015"],
    },
    {
      name: "Seminare Cluj 2015",
      slug: null,
      date: "24-25 aprilie 2015",
      location: "Cluj-Napoca, România",
      description: "Ediția de primăvară la Cluj-Napoca.",
      image: "/img/evenimente/cluj2015.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=439",
      type: "seminar",
      edition: 13,
      tags: ["seminar", "Cluj-Napoca", "2015"],
    },
    // 2014
    {
      name: "Atelier geo-spatial.org: MapBox - fabrica de hărți frumoase",
      slug: null,
      date: "28 noiembrie 2014",
      location: "București, România",
      description:
        "Atelier practic dedicat utilizării MapBox Studio pentru crearea de hărți web estetice și performante. Organizat în parteneriat cu The Sponge.",
      image: "/img/evenimente/atelier-spatializare-thesponge-2014.jpg",
      externalUrl:
        "https://web.archive.org/web/20170603111626/http://thesponge.eu/press/releases/11_noiembrie_Atelier%20geo-spa%C8%9Bial.org%20MapBox%20-%20fabrica%20de%20h%C4%83r%C8%9Bi%20frumoase.pdf",
      type: "seminar",
      edition: null,
      tags: ["seminar", "MapBox Studio", "cartografie", "2014"],
    },
    {
      name: "Seminare Timișoara 2014",
      slug: null,
      date: "14-15 noiembrie 2014",
      location: "Timișoara, România",
      description: "Ediția de toamnă la Timișoara.",
      image: "/img/evenimente/timisoara2014.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=430",
      type: "seminar",
      edition: 12,
      tags: ["seminar", "Timișoara", "2014"],
    },
    {
      name: "Seminare Cluj 2014",
      slug: null,
      date: "4-5 aprilie 2014",
      location: "Cluj-Napoca, România",
      description: "Ediția de primăvară la Cluj-Napoca.",
      image: "/img/evenimente/cluj2014.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=421",
      type: "seminar",
      edition: 11,
      tags: ["seminar", "Cluj-Napoca", "2014"],
    },
    // 2013
    {
      name: "Seminare Timișoara 2013",
      slug: null,
      date: "15-16 noiembrie 2013",
      location: "Timișoara, România",
      description: "Ediția de toamnă la Timișoara.",
      image: "/img/evenimente/timisoara2013.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=417",
      type: "seminar",
      edition: 10,
      tags: ["seminar", "Timișoara", "2013"],
    },
    {
      name: "FOSS4G-CEE 2013",
      slug: null,
      date: "16-20 iunie 2013",
      location: "România",
      description:
        "FOSS4G Central and Eastern Europe 2013 - conferință regională dedicată soluțiilor geospațiale open source.",
      image: "/img/evenimente/foss4g2013.jpg",
      externalUrl:
        "https://web.archive.org/web/20150228052655/http://2013.foss4g-cee.org/",
      type: "conferinta",
      edition: null,
      tags: ["conferință", "FOSS4G", "CEE", "open source"],
    },
    {
      name: "Seminare Cluj 2013",
      slug: null,
      date: "19-20 aprilie 2013",
      location: "Cluj-Napoca, România",
      description: "Ediția de primăvară la Cluj-Napoca.",
      image: "/img/evenimente/30197748996_ce521dde76_b.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=403",
      type: "seminar",
      edition: 9,
      tags: ["seminar", "Cluj-Napoca", "2013"],
    },
    // 2012
    {
      name: "Seminare Timișoara 2012",
      slug: null,
      date: "23-24 noiembrie 2012",
      location: "Timișoara, România",
      description: "Ediția de toamnă la Timișoara.",
      image: "/img/evenimente/29578130653_58ab9c70f1_b.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=396",
      type: "seminar",
      edition: 8,
      tags: ["seminar", "Timișoara", "2012"],
    },
    {
      name: "Conferința București 2012",
      slug: null,
      date: "12-13 octombrie 2012",
      location: "București, România",
      description:
        "Conferința 'Tehnologii, date și cunoștințe geospațiale libere' - Al doilea eveniment major la București. S-a numit conferință pentru că nu a inclus seminare practice.",
      image: "/img/evenimente/bucuresti2012.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=394",
      type: "conferinta",
      edition: null,
      tags: ["conferință", "București", "2012"],
    },
    {
      name: "Simpozion Cartografie Istorică 2012",
      slug: null,
      date: "21-23 iunie 2012",
      location: "România",
      description:
        "Simpozionul Internațional de Cartografie Istorică 'European cartographic heritage - historical maps in environmental geosciences'.",
      image: "/img/evenimente/hmeg.jpg",
      externalUrl: "https://geo-spatial.org/vechi/articole/sici2012",
      type: "conferinta",
      edition: null,
      tags: ["simpozion", "cartografie", "internațional"],
    },
    {
      name: "Seminare Cluj 2012",
      slug: null,
      date: "27-28 aprilie 2012",
      location: "Cluj-Napoca, România",
      description: "Ediția de primăvară la Cluj-Napoca.",
      image: "/img/evenimente/cluj2012.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=382",
      type: "seminar",
      edition: 7,
      tags: ["seminar", "Cluj-Napoca", "2012"],
    },
    // 2011
    {
      name: "Seminare Timișoara 2011",
      slug: null,
      date: "25-26 noiembrie 2011",
      location: "Timișoara, România",
      description: "Ediția de toamnă la Timișoara.",
      image: "/img/evenimente/timisoara2011.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=355",
      type: "seminar",
      edition: 6,
      tags: ["seminar", "Timișoara", "2011"],
    },
    {
      name: "Seminare București 2011",
      slug: null,
      date: "7-8 octombrie 2011",
      location: "București, România",
      description: "Prima ediție a seminarelor la București.",
      image: "/img/evenimente/6287116094_4c11fcd310_b.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=347",
      type: "seminar",
      edition: 5,
      tags: ["seminar", "București", "2011"],
    },
    {
      name: "Seminare Cluj 2011",
      slug: null,
      date: "15-16 aprilie 2011",
      location: "Cluj-Napoca, România",
      description: "Ediția de primăvară la Cluj-Napoca.",
      image: "/img/evenimente/8631038016_78da3b2766_b.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=331",
      type: "seminar",
      edition: 4,
      tags: ["seminar", "Cluj-Napoca", "2011"],
    },
    // 2010
    {
      name: "Seminare Timișoara 2010",
      slug: null,
      date: "19-20 noiembrie 2010",
      location: "Timișoara, România",
      description: "Prima ediție a seminarelor la Timișoara!",
      image: "/img/evenimente/5356762292_54438b6d7f_b.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=308",
      type: "seminar",
      edition: 3,
      tags: ["seminar", "Timișoara", "2010", "premieră"],
    },
    {
      name: "Seminare Cluj 2010",
      slug: null,
      date: "16-18 aprilie 2010",
      location: "Cluj-Napoca, România",
      description: "Ediția de primăvară la Cluj-Napoca.",
      image: "/img/evenimente/4540701982_4d3fb7c7c6_b.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=294",
      type: "seminar",
      edition: 2,
      tags: ["seminar", "Cluj-Napoca", "2010"],
    },
    // 2009
    {
      name: "Seminare Cluj 2009",
      slug: null,
      date: "3-4 aprilie 2009",
      location: "Cluj-Napoca, România",
      description:
        "Primul seminar geo-spatial.org! Începutul unei tradiții de peste 15 ani.",
      image: "/img/evenimente/3417026115_8994641688_b.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=244",
      type: "seminar",
      edition: 1,
      tags: ["seminar", "Cluj-Napoca", "2009", "primul"],
    },
    // 2008
    {
      name: "Seminar Webmapping Brașov 2008",
      slug: null,
      date: "13-14 decembrie 2008",
      location: "Brașov, România",
      description: "Seminar dedicat tehnologiilor webmapping.",
      image: "/img/evenimente/3201320066_e1450bc791_b.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=243",
      type: "seminar",
      edition: null,
      tags: ["seminar", "Brașov", "2008", "webmapping"],
    },
    {
      name: "Întâlnire Iași 2008",
      slug: null,
      date: "23 octombrie 2008",
      location: "Iași, România",
      description: "Întâlnire la Facultatea de Geografie din Iași.",
      image: "/img/evenimente/1517.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=242",
      type: "seminar",
      edition: null,
      tags: ["seminar", "întâlnire", "Iași", "2008"],
    },
    {
      name: "Întâlnire București 2008",
      slug: null,
      date: "25 septembrie 2008",
      location: "București, România",
      description: "Întâlnire la Facultatea de Geografie din București.",
      image: "/img/evenimente/1514.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=241",
      type: "seminar",
      edition: null,
      tags: ["seminar", "întâlnire", "București", "2008"],
    },
    {
      name: "Primele întâlniri",
      slug: null,
      date: "2008",
      location: "România",
      description:
        "Primele întâlniri ale comunității geo-spatial.org - începutul poveștii.",
      image: "/img/evenimente/1512.jpg",
      externalUrl: "https://geo-spatial.org/vechi/osgeo/index.php?id=240",
      type: "seminar",
      edition: null,
      tags: ["seminar", "întâlnire", "2008", "început"],
    },
  ],
};

// Componenta pentru un card de eveniment
function EventCard({ event, isUpcoming = false }) {
  const linkUrl = event.externalUrl || (event.slug ? `/${event.slug}` : "#");
  const isExternal =
    event.externalUrl &&
    (event.externalUrl.startsWith("http") ||
      event.externalUrl.startsWith("/noutati"));

  return (
    <article className={styles.eventCard}>
      <a
        href={linkUrl}
        className={styles.cardLink}
        target={
          isExternal && event.externalUrl.startsWith("http")
            ? "_blank"
            : "_self"
        }
        rel="noopener noreferrer"
      >
        {/* Imaginea evenimentului */}
        <div className={styles.cardImageContainer}>
          {event.image ? (
            <img
              src={event.image}
              alt={event.name}
              className={styles.cardImage}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          ) : null}
          <div
            className={styles.imagePlaceholder}
            style={{ display: event.image ? "none" : "flex" }}
          >
            📅
          </div>

          {/* Badge-uri */}
          <div className={styles.badgeContainer}>
            <span
              className={`${styles.statusBadge} ${isUpcoming ? styles.statusUpcoming : styles.statusPast}`}
            >
              {isUpcoming ? "🔴 În curând" : "Încheiat"}
            </span>
            {event.isCoOrganizer && (
              <span className={styles.coOrganizerBadge}>🤝 Co-organizator</span>
            )}
            {event.type && (
              <span
                className={`${styles.typeBadge} ${styles[`type${event.type.charAt(0).toUpperCase() + event.type.slice(1)}`]}`}
              >
                {event.type === "seminar"
                  ? "🎓 Seminar"
                  : event.type === "conferinta"
                    ? "🎤 Conferință"
                    : event.type === "workshop"
                      ? "🔧 Workshop"
                      : event.type}
              </span>
            )}
          </div>
        </div>

        {/* Conținutul cardului */}
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{event.name}</h3>

          <div className={styles.eventMeta}>
            <span className={styles.eventDate}>📅 {event.date}</span>
            <span className={styles.eventLocation}>📍 {event.location}</span>
          </div>

          <p className={styles.cardDescription}>{event.description}</p>

          {/* Tags */}
          {event.tags && event.tags.length > 0 && (
            <div className={styles.cardTags}>
              {event.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className={styles.cardFooter}>
            <span className={styles.readMore}>
              {isUpcoming ? "Detalii →" : "Detalii →"}
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

// Componenta pentru o secțiune de evenimente
function EventsSection({
  title,
  icon,
  description,
  events,
  isUpcoming = false,
}) {
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionIcon}>{icon}</span>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {description && (
          <span className={styles.sectionDescription}>{description}</span>
        )}
      </div>
      <div className={styles.eventsGrid}>
        {events.map((event, index) => (
          <EventCard
            key={event.slug || index}
            event={event}
            isUpcoming={isUpcoming}
          />
        ))}
      </div>
    </section>
  );
}

// Pagina principală de evenimente
export default function EventsPage() {
  return (
    <Layout
      title="Evenimente"
      description="Seminarele și evenimentele geo-spatial.org în România și Republica Moldova"
    >
      <main className={styles.eventsPage}>
        <div className="container">
          {/* Header pagină */}
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Evenimente</h1>
            <p className={styles.pageSubtitle}>
              Seminarele geo-spatial.org și alte evenimente organizate sau
              susținute de comunitate
            </p>
          </header>

          {/* Evenimente viitoare */}
          <EventsSection
            title="Evenimente viitoare"
            icon="🎯"
            description={`${EVENTS.upcoming.length} eveniment${EVENTS.upcoming.length > 1 ? "e" : ""} programat${EVENTS.upcoming.length > 1 ? "e" : ""}`}
            events={EVENTS.upcoming}
            isUpcoming={true}
          />

          {/* Evenimente trecute */}
          <EventsSection
            title="Evenimente trecute"
            icon="📚"
            description="Arhiva evenimentelor anterioare"
            events={EVENTS.past}
            isUpcoming={false}
          />

          {/* Link către blog */}
          <section className={styles.blogLink}>
            <p>
              Pentru anunțuri detaliate și rapoarte de la evenimente, consultă{" "}
              <Link to="/noutati/tags/evenimente">
                secțiunea Evenimente din blog
              </Link>
              .
            </p>
          </section>

          {/* Link către pagina de seminare */}
          <section className={styles.seminarsInfo}>
            <h3>Despre seminarele geo-spatial.org</h3>
            <p>
              Din 2008 organizăm seminare hands-on pentru comunitatea
              geospațială. Citește{" "}
              <Link to="/initiative/seminare">povestea completă</Link> a celor
              aproape 20 de ani de evenimente.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
