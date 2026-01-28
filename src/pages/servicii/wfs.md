---
title: WFS - Web Feature Service
description: Serviciu OGC pentru accesarea și descărcarea datelor vectoriale
---

# WFS - Web Feature Service

## Despre serviciu

Web Feature Service (WFS) permite accesarea și descărcarea datelor geospațiale vectoriale. Spre deosebire de WMS care returnează imagini, WFS returnează datele brute în format GeoJSON, GML sau alte formate.

📖 **Specificație oficială OGC:** [Web Feature Service (WFS)](https://www.ogc.org/standards/wfs)

**Versiuni suportate:** 2.0.0, 1.1.0, 1.0.0

## Endpoint

**Endpoint general** (toate datele):
```
https://services.geo-spatial.org/geoserver/wfs
```

**Endpoint per workspace** (date dintr-un anumit domeniu):
```
https://services.geo-spatial.org/geoserver/{workspace}/wfs
```

### Workspace-uri disponibile

| Workspace | Domeniu |
|-----------|---------|
| `administrative-boundaries` | Limite administrative |
| `recensamant` | Date de la recensământ |
| `geomorphometry` | Date geomorfologice |
| `eharta` | Hărți istorice |

## Capabilități

**Toate datele:**
```
https://services.geo-spatial.org/geoserver/wfs?service=WFS&request=GetCapabilities
```

**Doar un workspace** (ex: limite administrative):
```
https://services.geo-spatial.org/geoserver/administrative-boundaries/wfs?service=WFS&request=GetCapabilities
```

## Operațiuni suportate

| Operațiune | Descriere |
|------------|-----------|
| `GetCapabilities` | Metadate serviciu și lista feature types |
| `DescribeFeatureType` | Schema (atributele) unui feature type |
| `GetFeature` | Descarcă entitățile geografice |

## Formate de ieșire

- `application/json` (GeoJSON) - recomandat
- `application/gml+xml` (GML)
- `SHAPE-ZIP` (Shapefile arhivat)
- `csv` (CSV cu geometrie WKT)

## Exemple de utilizare

### Descărcare GeoJSON

```
https://services.geo-spatial.org/geoserver/wfs?
  service=WFS&
  version=2.0.0&
  request=GetFeature&
  typeName=administrative-boundaries:ro_admin_county_polygon&
  outputFormat=application/json
```

### Cu filtru spațial (BBOX)

```
https://services.geo-spatial.org/geoserver/wfs?
  service=WFS&
  version=2.0.0&
  request=GetFeature&
  typeName=administrative-boundaries:ro_admin_county_polygon&
  bbox=25,44,27,46,EPSG:4326&
  outputFormat=application/json
```

### Cu filtru CQL

```
https://services.geo-spatial.org/geoserver/wfs?
  service=WFS&
  version=2.0.0&
  request=GetFeature&
  typeName=administrative-boundaries:ro_admin_county_polygon&
  CQL_FILTER=name='Suceava'&
  outputFormat=application/json
```

### În QGIS

1. Layer → Add Layer → Add WFS Layer
2. URL: `https://services.geo-spatial.org/geoserver/wfs`
3. Selectează feature type-ul dorit

### În JavaScript (fetch)

```javascript
const response = await fetch(
    'https://services.geo-spatial.org/geoserver/wfs?' +
    'service=WFS&version=2.0.0&request=GetFeature&' +
    'typeName=administrative-boundaries:ro_admin_county_polygon&' +
    'outputFormat=application/json'
);
const geojson = await response.json();
```

## Vezi și

- [WCS](/standarde-deschise/wcs) - Pentru date raster;
- [Servicii OGC](/servicii/) - toate standardele OGC.
