---
title: "PyTransDatRO — Studio Geodezic Național"
description: "Motor geodezic de înaltă performanță și aplicație web deschisă pentru transformarea coordonatelor între Stereo 70 și ETRS89, alternativă modernă a aplicațiilor oficiale ANCPI TransDatRO și RomGEO."
---

# PyTransDatRO

:::tip Inițiativă open source
Proiect independent, gratuit și cu sursă deschisă (Licență MIT), dezvoltat pentru comunitatea geodezică și GIS din România.
:::

## Link platformă

- [https://pytransdat.geo-spatial.org](https://pytransdat.geo-spatial.org)

## Despre proiect

**PyTransDatRO** este un proiect independent, gratuit și cu sursă deschisă (Licență MIT), dezvoltat ca o alternativă modernă și o replică a aplicațiilor oficiale ANCPI, TransDatRO și succesorul său RomGEO.

Aplicația oferă transformări bidirecționale de înaltă precizie între proiecția națională **Stereografic 1970 (Stereo 70)** și sistemul european de referință terestru **ETRS89** (atât 2D, cât și 3D, incluzând cotele elipsoidale și altitudinile în sistemul Marea Neagră 1975).

<figure style={{ textAlign: "center" }}>
  <a href="https://pytransdat.geo-spatial.org">
    <img src="/img/proiecte/pytransdatro.png" alt="PyTransDatRO — Studio Geodezic Național" />
  </a>
  <figcaption><em>Interfața web interactivă PyTransDatRO (Studio Geodezic Național)</em></figcaption>
</figure>

## Componente și funcționalități

- **Studio Web Interactiv**: Aplicație web modernă construită cu TypeScript și Leaflet pentru transformarea directă a coordonatelor, navigare pe hartă și interogare spațială;
- **Transformare fișiere**: Suport complet pentru încărcare fișiere de coordonate (CSV, TXT) și descărcare imediată a rezultatelor transformate;
- **API REST de înaltă performanță**: Serviciu web FastAPI cu endpoint-uri JSON pentru conversii individuale și procesări masive de tip *batch*;
- **Compatibilitate TransDatOnline (100%)**: Păstrează compatibilitatea cu vechile endpoint-uri TransDatOnline (`/transdatonline/cooOpService`), permițând migrarea automată a scripturilor existente și a plugin-urilor GIS;
- **Motor geodezic Python pur (`pytransdatro`)**: Fără dependențe compilate C/GIS externe pentru procesarea numerică, utilizând căutare rapidă binară direct în memorie a grilei `.spg`;
- **Telemetrie și monitorizare etică**: Monitorizare transparentă a volumului și performanței transformărilor, cu matrice spațială agregată fără stocarea datelor personale.

## Tehnologii

- **Backend & Geodetic Engine**: Python 3.11+, FastAPI, `pytransdatro`;
- **Frontend**: TypeScript, Leaflet, Vite;
- **Containerizare**: Docker Compose, Caddy / Nginx reverse proxy;
- **Licență**: MIT (Open Source).

## Resurse

- 🌐 [pytransdat.geo-spatial.org](https://pytransdat.geo-spatial.org) — platforma online;
- 📚 [Documentație API (Swagger)](https://pytransdat.geo-spatial.org/docs) — specificația REST API;
- ⚙️ [Documentație serviciu pe geo-spatial.org](/servicii/pytransdatro) — specificații și mod de utilizare;
- 🔄 [TransdatOnline](/servicii/transformare-coordonate) — istoricul serviciului de transformare coordonate pe geo-spatial.org.
