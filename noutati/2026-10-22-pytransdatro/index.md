---
slug: pytransdatro
title: "PyTransDatRO — transformări de coordonate deschise și moderne"
authors: [bmorosanu]
tags: [noutati]
image: /img/proiecte/pytransdatro.png
---

PyTransDatRO este un proiect independent, gratuit și cu sursă deschisă (Licență MIT), dezvoltat ca o alternativă modernă și o replică a aplicațiilor oficiale ANCPI, TransDatRO și succesorul său RomGEO. Platforma este disponibilă online la [pytransdat.geo-spatial.org](https://pytransdat.geo-spatial.org).

<!-- truncate -->

![PyTransDatRO](/img/proiecte/pytransdatro.png)

Aplicația oferă transformări bidirecționale de coordonate între **Stereo 70** (Proiecția Națională) și **ETRS89** (European Terrestrial Reference System 1989), implementând riguros algoritmul oficial publicat de Agenția Națională de Cadastru și Publicitate Imobiliară (ANCPI).

### Caracteristici principale

- **Interfață web interactivă**: hartă integrată pentru inspecție vizuală, introducere interactivă a punctelor și procesare rapidă;
- **Conversie de fișiere**: încărcare și procesare fișiere CSV și TXT cu descărcare automată a rezultatelor;
- **API REST modern**: servicii de mare viteză pentru transformări individuale și în lot (*batch*), complet documentate prin Swagger UI și ReDoc;
- **Compatibilitate TransDatOnline**: emulare completă a vechiului endpoint `cooOpService` pentru scripturi existente și plugin-uri GIS;
- **Nucleu Python deschis (`pytransdatro`)**: bibliotecă Python pură cu lookup binar în memorie al grilei oficiale `.spg`, fără dependențe externe compilate C/GIS;
- **Licență deschisă (MIT)**: codul sursă și toate componentele sunt disponibile liber comunității.

### Resurse

- 🌐 [pytransdat.geo-spatial.org](https://pytransdat.geo-spatial.org) — Aplicația web și API-ul;
- ⚙️ [Documentație serviciu utilitar](/servicii/pytransdatro) — Ghid tehnic și exemple de integrare;
- 📋 [Pagina proiectului pe geo-spatial.org](/initiative/pytransdatro) — Detalii complete despre inițiativă.
