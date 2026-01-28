---
title: WPS - Web Processing Service
description: Serviciu OGC pentru procesarea geospațială pe server
---

# WPS - Web Processing Service

## Despre serviciu

Web Processing Service (WPS) permite executarea de procese geospațiale pe server. Clienții pot trimite date de intrare, iar serverul returnează rezultatele procesării fără a fi necesară instalarea software-ului local.

📖 **Specificație oficială OGC:** [Web Processing Service (WPS)](https://www.ogc.org/standards/wps)

**Versiuni suportate:** 1.0.0

## Endpoint

```
https://services.geo-spatial.org/geoserver/wps
```

## Capabilități

```
https://services.geo-spatial.org/geoserver/wps?service=WPS&request=GetCapabilities
```

## Operațiuni suportate

| Operațiune | Descriere |
|------------|-----------|
| `GetCapabilities` | Returnează metadatele serviciului și lista proceselor disponibile |
| `DescribeProcess` | Returnează informații detaliate despre un proces specific |
| `Execute` | Execută un proces cu parametrii specificați |

## Tipuri de procese

WPS oferă acces la diverse procese geospațiale:

- Procese vectoriale: buffer, clip, union, intersection, simplify;
- Procese raster: reclassify, contour, hillshade;
- Procese de analiză: nearest neighbor, point in polygon;
- Procese de agregare: statistici zonale, colectare.

## Exemple de utilizare

### Listarea proceselor disponibile

```
https://services.geo-spatial.org/geoserver/wps?
  service=WPS&
  version=1.0.0&
  request=DescribeProcess&
  identifier=all
```

### Descrierea unui proces specific

```
https://services.geo-spatial.org/geoserver/wps?
  service=WPS&
  version=1.0.0&
  request=DescribeProcess&
  identifier=JTS:buffer
```

### Executare proces (POST)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<wps:Execute version="1.0.0" service="WPS"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:wps="http://www.opengis.net/wps/1.0.0"
  xmlns:ows="http://www.opengis.net/ows/1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <ows:Identifier>JTS:buffer</ows:Identifier>
  <wps:DataInputs>
    <wps:Input>
      <ows:Identifier>geom</ows:Identifier>
      <wps:Data>
        <wps:LiteralData>POINT(26.1 44.4)</wps:LiteralData>
      </wps:Data>
    </wps:Input>
    <wps:Input>
      <ows:Identifier>distance</ows:Identifier>
      <wps:Data>
        <wps:LiteralData>0.01</wps:LiteralData>
      </wps:Data>
    </wps:Input>
  </wps:DataInputs>
  <wps:ResponseForm>
    <wps:RawDataOutput mimeType="application/json">
      <ows:Identifier>result</ows:Identifier>
    </wps:RawDataOutput>
  </wps:ResponseForm>
</wps:Execute>
```

### În QGIS

1. Processing → Toolbox → WPS
2. Adaugă conexiune: `https://services.geo-spatial.org/geoserver/wps`
3. Navighează și execută procesele disponibile

## Procese disponibile

Lista completă de procese este disponibilă în [GetCapabilities](https://services.geo-spatial.org/geoserver/wps?service=WPS&request=GetCapabilities).

Exemple de procese:
- `JTS:buffer` - Creează un buffer în jurul geometriei
- `JTS:union` - Unește mai multe geometrii
- `JTS:intersection` - Intersecția a două geometrii
- `ras:Contour` - Generează curbe de nivel din raster
- `vec:Query` - Interogare avansată pe straturi vectoriale

## Moduri de execută

- Sincron - Rezultatul este returnat imediat
- Asincron - Serverul returnează un URL de status pentru verificare

## Vezi și

- [Servicii OGC](/servicii/) - toate standardele OGC.
