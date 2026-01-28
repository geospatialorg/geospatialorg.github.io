---
title: CSW - Catalog Service for the Web
description: Serviciu OGC pentru căutarea și descoperirea metadatelor geospațiale
---

# CSW - Catalog Service for the Web

## Despre serviciu

Catalog Service for the Web (CSW) permite căutarea și descoperirea metadatelor geospațiale. Este poarta de intrare către catalogul de date geo-spatial.org.

📖 **Specificație oficială OGC:** [Catalogue Service (CSW)](https://www.ogc.org/standards/cat)

**Versiuni suportate:** 2.0.2

## Endpoint-uri

### Catalog complet (GeoNetwork)

Catalogul principal cu metadate complete conform ISO 19115/19139:

```
https://services.geo-spatial.org/geonetwork/srv/eng/csw
```

**Capabilități:**
```
https://services.geo-spatial.org/geonetwork/srv/eng/csw?service=CSW&request=GetCapabilities
```

### Catalog GeoServer (subset restrâns)

Endpoint CSW direct de la GeoServer. Oferă un subset restrâns de metadate pentru datele publicate în GeoServer:

```
https://services.geo-spatial.org/geoserver/csw
```

**Capabilități:**
```
https://services.geo-spatial.org/geoserver/csw?service=CSW&request=GetCapabilities
```

## Interfață web

Pentru căutare vizuală, folosește interfața GeoNetwork:
[Catalog geo-spatial.org](https://services.geo-spatial.org/geonetwork/)

## Operațiuni suportate

| Operațiune | Descriere |
|------------|-----------|
| `GetCapabilities` | Metadate serviciu |
| `GetRecords` | Căutare în catalog |
| `GetRecordById` | Obține o înregistrare specifică |
| `DescribeRecord` | Schema înregistrărilor |

## Profile suportate

- ISO 19115/19139
- Dublin Core

## Exemple de utilizare

### Căutare liberă

```xml
POST https://services.geo-spatial.org/geonetwork/srv/eng/csw

<?xml version="1.0"?>
<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2"
    service="CSW" version="2.0.2" resultType="results">
    <csw:Query typeNames="csw:Record">
        <csw:Constraint version="1.1.0">
            <Filter xmlns="http://www.opengis.net/ogc">
                <PropertyIsLike wildCard="*" singleChar="?" escapeChar="\\">
                    <PropertyName>AnyText</PropertyName>
                    <Literal>*România*</Literal>
                </PropertyIsLike>
            </Filter>
        </csw:Constraint>
    </csw:Query>
</csw:GetRecords>
```

### În QGIS (MetaSearch)

1. Web → MetaSearch → MetaSearch
2. Services → New → URL: `https://services.geo-spatial.org/geonetwork/srv/eng/csw`
3. Caută date după text sau zonă geografică

## Vezi și

- [WFS](/standarde-deschise/wfs) - Pentru date vector;
- [Servicii OGC](/servicii/) - toate standardele OGC.