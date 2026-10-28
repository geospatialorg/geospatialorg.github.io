---
title: PyTransDatRO - Serviciu modern de transformare coordonate
description: Transformări de coordonate de mare precizie între Stereo 70 și ETRS89, interfață web Studio, procesare fișiere și API REST de mare viteză.
---

# PyTransDatRO - Serviciu de transformare coordonate

:::tip ⭐ Serviciu modern
Noua generație a serviciilor de transformare a coordonatelor pe geo-spatial.org — gratuit, independent și cu sursă deschisă (Licență MIT).
:::

## Despre PyTransDatRO

**PyTransDatRO** este un proiect modern și deschis dezvoltat ca o alternativă independentă și o replică a aplicațiilor oficiale ANCPI (TransDatRO și RomGEO).

Platforma oferă transformări bidirecționale de mare precizie între proiecția națională **Stereografic 1970 (Stereo 70)** și sistemul european de referință terestru **ETRS89**, implementând riguros algoritmul oficial al Agenției Naționale de Cadastru și Publicitate Imobiliară (ANCPI), atât pentru coordonate 2D, cât și 3D (cu altitudini în sistemul Marea Neagră 1975).

## Acces platformă

- 🌐 **Aplicația Web (Studio)**: [https://pytransdat.geo-spatial.org](https://pytransdat.geo-spatial.org)
- 📚 **Documentație interactivă Swagger UI**: [https://pytransdat.geo-spatial.org/docs](https://pytransdat.geo-spatial.org/docs)
- 📖 **Documentație ReDoc**: [https://pytransdat.geo-spatial.org/redoc](https://pytransdat.geo-spatial.org/redoc)

## Caracteristici principale

- **Studio Web Interactiv**: Interfață web modernă (TypeScript + Leaflet) pentru transformarea directă a punctelor, inspecție pe hartă și interogare spațială;
- **Conversie de fișiere**: Suport complet pentru încărcare fișiere de coordonate (CSV, TXT) cu procesare rapidă și descărcare imediată a rezultatelor;
- **API REST de înaltă performanță**: Serviciu web FastAPI cu endpoint-uri JSON pentru conversii individuale și procesări masive de tip *batch*;
- **Compatibilitate TransDatOnline (100%)**: Emulare completă a vechiului endpoint `cooOpService` pentru scripturi existente și plugin-uri GIS;
- **Nucleu Python deschis (`pytransdatro`)**: Bibliotecă Python pură cu căutare binară direct în memorie a grilei oficiale `.spg`, fără dependențe externe compilate C/GIS;
- **Fără stocare de date personale**: Monitorizare transparentă și etică a volumului și performanței transformărilor, fără stocarea datelor personale.

## Specificații API REST

Aplicația expune un API REST rapid și modern:

### 1. Transformare punct individual
- **Endpoint:** `POST https://pytransdat.geo-spatial.org/transform`
- **Format:** JSON
- **Exemplu corp cerere:**
```json
{
  "x": 585489.123,
  "y": 325145.456,
  "z": 100.5,
  "source_crs": "EPSG:3844",
  "target_crs": "EPSG:4258"
}
```

### 2. Transformare loturi (batch)
- **Endpoint:** `POST https://pytransdat.geo-spatial.org/transform/batch`
- Permite transmiterea unei liste de puncte pentru procesare paralelă rapidă.

### 3. Emulare endpoint clasic TransDatOnline
- **Endpoint:** `GET https://pytransdat.geo-spatial.org/transdatonline/cooOpService` sau `POST https://pytransdat.geo-spatial.org/transdatonline/cooOpService`
- Permite migrarea fără modificări a integrărilor realizate anterior pentru serviciul istoric TransDatOnline.

## Exemplu de utilizare API (Python)

Interacțiunea cu serviciul se poate realiza direct prin solicitări HTTP din orice limbaj de programare:

```python
import requests

url = "https://pytransdat.geo-spatial.org/transform"
payload = {
    "x": 585489.123,
    "y": 325145.456,
    "z": 100.5,
    "source_crs": "EPSG:3844",
    "target_crs": "EPSG:4258"
}

response = requests.post(url, json=payload)
print(response.json())
```

## Vezi și

- 📋 [Pagina inițiativei PyTransDatRO](/initiative/pytransdatro) — Detalii complete despre viziunea și arhitectura proiectului;
- 📰 [Articol noutăți PyTransDatRO](/noutati/pytransdatro) — Anunțul oficial de lansare;
- 🏛️ [TransdatOnline](/servicii/transformare-coordonate) — Istoricul și documentația serviciului clasic (2011);
- 🌐 [Servicii OGC](/servicii/) — Toate serviciile și utilitarele geo-spatial.org.
