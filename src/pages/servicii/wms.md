---
title: WMS - Web Map Service
description: Serviciu OGC pentru vizualizarea hărților raster - returnează imagini ale datelor geospațiale
---

# WMS - Web Map Service

## Despre serviciu

Web Map Service (WMS) este un standard OGC care permite vizualizarea datelor geospațiale sub formă de imagini (PNG, JPEG, GIF). Serviciul returnează hărți gata de afișat, potrivite pentru integrare în aplicații web sau desktop GIS.

📖 **Specificație oficială OGC:** [Web Map Service (WMS)](https://www.ogc.org/standards/wms)

**Versiuni suportate:** 1.3.0 (implicit), 1.1.1

## Endpoint

**Endpoint general** (toate datele):
```
https://services.geo-spatial.org/geoserver/wms
```

**Endpoint per workspace** (date dintr-un anumit domeniu):
```
https://services.geo-spatial.org/geoserver/{workspace}/wms
```

### Workspace-uri disponibile

| Workspace | Domeniu | Endpoint |
|-----------|---------|----------|
| `administrative-boundaries` | Limite administrative | `.../geoserver/administrative-boundaries/wms` |
| `recensamant` | Date de la recensământ | `.../geoserver/recensamant/wms` |
| `geomorphometry` | Date geomorfologice | `.../geoserver/geomorphometry/wms` |
| `eharta` | Hărți istorice | `.../geoserver/eharta/wms` |

## Capabilități

**Toate datele:**
```
https://services.geo-spatial.org/geoserver/wms?service=WMS&request=GetCapabilities
```

**Doar un workspace** (ex: limite administrative):
```
https://services.geo-spatial.org/geoserver/administrative-boundaries/wms?service=WMS&request=GetCapabilities
```

## Operațiuni suportate

| Operațiune | Descriere |
|------------|-----------|
| `GetCapabilities` | Returnează metadatele serviciului și lista straturilor disponibile |
| `GetMap` | Returnează o imagine a hărții pentru zona și straturile specificate |
| `GetFeatureInfo` | Returnează informații despre entitățile de la o anumită locație |
| `GetLegendGraphic` | Returnează legenda pentru un strat specificat |

## Exemplu de utilizare

### URL pentru o hartă

```
https://services.geo-spatial.org/geoserver/wms?
  service=WMS&
  version=1.1.1&
  request=GetMap&
  layers=administrative-boundaries:ro_admin_county_polygon&
  bbox=20.26,43.62,29.72,48.27&
  width=768&
  height=330&
  srs=EPSG:4326&
  format=image/png
```

### În QGIS

1. Layer → Add Layer → Add WMS/WMTS Layer;
2. Creează o conexiune nouă;
3. URL: `https://services.geo-spatial.org/geoserver/wms`;
4. Selectează straturile dorite.

### În Leaflet

```javascript
L.tileLayer.wms("https://services.geo-spatial.org/geoserver/wms", {
    layers: 'administrative-boundaries:ro_admin_county_polygon',
    format: 'image/png',
    transparent: true,
    attribution: 'geo-spatial.org'
}).addTo(map);
```

## Straturi disponibile

Lista completă de straturi este disponibilă în [GetCapabilities](https://services.geo-spatial.org/geoserver/wms?service=WMS&request=GetCapabilities).

Exemple:
- `administrative-boundaries:ro_admin_county_polygon` - Limite județe România;
- `administrative-boundaries:ro_admin_lau_polygon` - Limite UAT România.

## Vezi și

- [WMTS](/standarde-deschise/wmts) - Pentru tile-uri pre-generate;
- [Servicii OGC](/servicii/) - toate standardele OGC.
