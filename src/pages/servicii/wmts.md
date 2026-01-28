---
title: WMTS - Web Map Tile Service
description: Serviciu OGC pentru tile-uri de hartă pre-generate, optimizat pentru performanță
---

# WMTS - Web Map Tile Service

## Despre serviciu

Web Map Tile Service (WMTS) oferă acces la tile-uri de hartă pre-generate și cached. Comparativ cu WMS, WMTS oferă performanță superioară deoarece tile-urile sunt calculate în avans.

📖 **Specificație oficială OGC:** [Web Map Tile Service (WMTS)](https://www.ogc.org/standards/wmts)

**Versiuni suportate:** WMTS 1.1.1, TMS 1.0.0, WMS-C 1.1.1

## Endpoint

**Endpoint general** (toate datele):
```
https://services.geo-spatial.org/geoserver/gwc/service/wmts
```

**Endpoint per workspace** (date dintr-un anumit domeniu):
```
https://services.geo-spatial.org/geoserver/{workspace}/gwc/service/wmts
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
https://services.geo-spatial.org/geoserver/gwc/service/wmts?request=GetCapabilities
```

**Doar un workspace** (ex: hărți istorice):
```
https://services.geo-spatial.org/geoserver/eharta/gwc/service/wmts?request=GetCapabilities
```

## Avantaje față de WMS

- Performanță superioară: tile-uri pre-generate;
- Cache eficient: în browser și pe server;
- Scalabilitate: suportă trafic intens;
- Consistență: aceleași tile-uri pentru toți utilizatorii.

## Alte protocoale pentru tile-uri

Pe lângă WMTS, se oferă acces la tile-uri și prin:

### TMS (Tile Map Service)

```
https://services.geo-spatial.org/geoserver/gwc/service/tms/1.0.0
```

Exemplu pentru un strat specific:
```
https://services.geo-spatial.org/geoserver/gwc/service/tms/1.0.0/{layer}@{gridset}@{format}/{z}/{x}/{y}.png
```

### WMS-C (WMS Cached / Tiled WMS)

```
https://services.geo-spatial.org/geoserver/gwc/service/wms
```

WMS-C folosește aceeași sintaxă ca WMS, dar returnează tile-uri cached. Util pentru clienți care nu suportă WMTS nativ.

## Exemplu de utilizare

### În OpenLayers

```javascript
import WMTS from 'ol/source/WMTS';
import WMTSTileGrid from 'ol/tilegrid/WMTS';

const wmtsSource = new WMTS({
    url: 'https://services.geo-spatial.org/geoserver/gwc/service/wmts',
    layer: 'administrative-boundaries:ro_admin_county_polygon',
    matrixSet: 'EPSG:3857',
    format: 'image/png',
    style: 'default'
});
```

### În Leaflet

```javascript
L.tileLayer('https://services.geo-spatial.org/geoserver/gwc/service/wmts?' +
    'layer=administrative-boundaries:ro_admin_county_polygon&' +
    'style=&tilematrixset=EPSG:3857&' +
    'Service=WMTS&Request=GetTile&Version=1.0.0&' +
    'Format=image/png&' +
    'TileMatrix=EPSG:3857:{z}&TileCol={x}&TileRow={y}', {
    attribution: 'geo-spatial.org'
}).addTo(map);
```

## Tile Matrix Sets disponibile

- `EPSG:4326` - WGS84 Geographic
- `EPSG:3857` - Web Mercator
- `EPSG:3844` - Romania Stereo70

## Straturi disponibile

Consultă [GetCapabilities](https://services.geo-spatial.org/geoserver/gwc/service/wmts?request=GetCapabilities) pentru lista completă.

## Vezi și

- [WMS](/servicii//wms) - Pentru hărți dinamice
- [Servicii OGC](/servicii/) - toate standardele OGC.
