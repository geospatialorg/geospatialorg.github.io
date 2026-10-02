---
title: "Unde locuiesc românii? — Atlas interactiv al populației României"
description: "Atlas interactiv al populației României pe grilă statistică de 1 km — interogări multi-criteriu (relief, climă, hazard, acces la servicii), integral în browser."
---

# Unde locuiesc românii?

:::tip Inițiator
geo-spatial.org a inițiat și dezvoltat integral acest proiect.
:::

## Link platformă

- [https://unde.geo-spatial.org](https://unde.geo-spatial.org)

## Despre proiect

**Unde locuiesc românii?** este un atlas interactiv al populației României pe grila statistică de 1 km. Platforma permite interogări multi-criteriu — relief, climă, distanțe, demografie, hazard meteo, acces la servicii — și funcționează integral în browser, fără server de calcul.

Proiectul pornește de la o întrebare simplă: *câți români locuiesc într-un anumit tip de loc și cum arată viața acolo?* Răspunsul vine sub forma unor hărți de densitate pe o grilă de 240.290 de celule (fiecare de 1 km²), colorate pe o rampă logaritmică de la 1 la 10.000 de locuitori.

Fiecare celulă poate fi interogată prin presete predefinite (ex. „La munte, la peste 800 m altitudine", „La sat, fără gaze naturale") sau prin constructorul de filtre, care permite combinarea liberă a parametrilor. Click pe o celulă deschide fișa detaliată a celulei, inclusiv graficul climatic zilnic.

## Funcționalități

- **Presete de întrebări** — întrebări predefinite cu variante comutabile rapid (ex. „La oraș" ↔ „La sat"), organizate pe categorii;
- **Constructor de filtre** — combinare liberă de parametri (altitudine, pantă, formă de relief, intravilan, acces gaze, distanțe, climă) cu operatori logici;
- **Harta densității** — fiecare celulă potrivită este colorată pe o rampă secvențială de roșuri, pe scară logaritmică 1 → 10.000; celulele potrivite dar nelocuite apar într-un gri discret;
- **Căutare pe hartă** — 3.186 UAT-uri (limite LAU) + 13.656 localități, cu potrivire fără diacritice, dezambiguizare pe județ și tip;
- **Avertizări meteo în timp real** — integrare nowcasting și atenționări de la MeteoRomania, cu geometrii tăiate pe grila de 1 km și populație afectată calculată canonic;
- **Prognoze meteo și calitate aer** — temperatura extremă (ECMWF IFS 0,25°) și calitate aer (CAMS Europe 0,1° — PM2.5, PM10, NO₂, O₃, SO₂);
- **Fișa celulei** — click pe hartă → detalii per celulă cu grafic climatic uPlot pe județ.

## Date și surse

| Parametru | Sursă |
|---|---|
| Populație pe grilă de 1 km | Recensământul RPL 2021 (240.290 celule, EPSG:3035) |
| Limite administrative | LAU România |
| Forme de relief | Ierarhia formală (câmpie, deal, munte etc.) |
| Intravilan | ANCPI / CNGCFT — perimetrul construit al localităților, clasificat oraș/sat |
| Acces gaze naturale | Atribut per localitate |
| Altitudine și pantă | FABDEM |
| Distanțe | Frontieră, litoral |
| Climă zilnică | MeteoRomania (ianuarie – iulie 2026) |
| Prognoze meteo | ECMWF Open Data, IFS determinist 0,25° |
| Calitate aer | CAMS European air quality ensemble, 0,1° |

## Tehnologii

Proiectul este construit cu tehnologii moderne, open-source:

- **Frontend**: Vite + React + TypeScript;
- **Hartă**: MapLibre GL JS;
- **Interogări date**: DuckDB-WASM (SQL în browser, fără server);
- **Grafice**: uPlot;
- **Pipeline ETL**: Python (container Docker);
- **Server de date**: Caddy (CORS + range requests);
- **Orchestrare**: Docker Compose.

## Cifre

- **240.290** celule de 1 km² acoperind România;
- **3.186** unități administrativ-teritoriale (UAT);
- **13.656** localități în gazetteer-ul integrat;
- **v0** — versiune funcțională cap-coadă.

## Cod sursă

Proiectul este open-source, disponibil pe GitHub:

- [github.com/geospatialorg/unde-locuiesc-romanii](https://github.com/geospatialorg/unde-locuiesc-romanii)

## Contact

Pentru întrebări sau sugestii: [contact@geo-spatial.org](mailto:contact@geo-spatial.org).

## Vezi și

- [Proiecte geo-spatial.org](/initiative) — lista completă de proiecte;
- [Servicii OGC](/servicii) — acces la date geospațiale.
