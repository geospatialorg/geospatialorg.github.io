---
title: WCS - Web Coverage Service
description: Serviciu OGC pentru accesarea și descărcarea datelor raster (coverage)
---

# WCS - Web Coverage Service

## Despre serviciu

Web Coverage Service (WCS) permite accesarea și descărcarea datelor raster (coverage). Este ideal pentru modele digitale de teren, imagini satelitare, date climatice și alte date continue.

📖 **Specificație oficială OGC:** [Web Coverage Service (WCS)](https://www.ogc.org/standards/wcs)

**Versiuni suportate:** 2.0.1, 1.1.1, 1.1.0, 1.1, 1.0.0

## Endpoint

**Endpoint general** (toate datele):
```
https://services.geo-spatial.org/geoserver/wcs
```

**Endpoint per workspace** (date dintr-un anumit domeniu):
```
https://services.geo-spatial.org/geoserver/{workspace}/wcs
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
https://services.geo-spatial.org/geoserver/wcs?service=WCS&request=GetCapabilities
```

**Doar un workspace** (ex: date geomorfologice):
```
https://services.geo-spatial.org/geoserver/geomorphometry/wcs?service=WCS&request=GetCapabilities
```

## Operațiuni suportate

| Operațiune | Descriere |
|------------|-----------|
| `GetCapabilities` | Metadate serviciu și lista coverage-urilor |
| `DescribeCoverage` | Informații detaliate despre un coverage |
| `GetCoverage` | Descarcă datele raster |

## Formate de ieșire

- `image/tiff` (GeoTIFF) - recomandat
- `image/png`
- `image/jpeg`
- `application/x-netcdf` (NetCDF)

## Exemple de utilizare

### Descărcare GeoTIFF

```
https://services.geo-spatial.org/geoserver/wcs?
  service=WCS&
  version=2.0.1&
  request=GetCoverage&
  coverageId=geospatialorg:dem_romania&
  format=image/tiff
```

### Cu subset spațial

```
https://services.geo-spatial.org/geoserver/wcs?
  service=WCS&
  version=2.0.1&
  request=GetCoverage&
  coverageId=geospatialorg:dem_romania&
  subset=Long(25,27)&
  subset=Lat(44,46)&
  format=image/tiff
```

### În QGIS

1. Layer → Add Layer → Add WCS Layer
2. URL: `https://services.geo-spatial.org/geoserver/wcs`
3. Selectează coverage-ul dorit

## Coverage-uri disponibile

Consultă [GetCapabilities](https://services.geo-spatial.org/geoserver/wcs?service=WCS&request=GetCapabilities) pentru lista completă.

## Vezi și

- [WFS](/standarde-deschise/wfs) - Pentru date vector;
- [Servicii OGC](/servicii/) - toate standardele OGC.
