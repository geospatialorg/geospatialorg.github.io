---
title: Standarde deschise
description: Interoperabilitate prin standarde deschise în domeniul geospațial
sidebar_label: Standarde deschise
---

# Standarde geospațiale deschise

Interoperabilitatea reprezintă capacitatea diverselor sisteme de a comunica și de a schimba date în mod eficient. În domeniul geospațial, acest lucru este posibil datorită adoptării standardelor deschise.

## OGC - Open Geospatial Consortium

**[Open Geospatial Consortium (OGC)](https://www.ogc.org/)** este o organizație internațională de standardizare fondată în 1994, formată dintr-o rețea globală de peste 500 de companii, agenții guvernamentale și organizații academice.

### Misiunea OGC
OGC are misiunea de a face informația geografică "findable, accessible, interoperable, and reusable" (FAIR). Aceasta dezvoltă standarde libere (open standards) pentru servicii web, formate de fișiere și modelarea datelor, asigurându-se că tehnologiile geospațiale pot lucra împreună.

## Standarde OGC

Comunitatea geo-spatial.org utilizează și promovează următoarele standarde:

*   **[WMS (Web Map Service)](https://www.ogc.org/standard/wms)**: Permite vizualizarea hărților sub formă de imagini (raster) generate din date geografice.
*   **[WMTS (Web Map Tile Service)](https://www.ogc.org/standard/wmts)**: O variantă optimizată a WMS care utilizează fragmente de hartă precaculate (tiles) pentru o afișare rapidă.
*   **[WFS (Web Feature Service)](https://www.ogc.org/standard/wfs)**: Permite accesul direct la datele vectoriale, oferind posibilitatea de a interoga și edita obiectele geografice.
*   **[WCS (Web Coverage Service)](https://www.ogc.org/standard/wcs)**: Dedicat accesului la date de tip "coverage" (cum ar fi modelele digitale ale terenului sau imaginile de satelit) în format brut.
*   **[WPS (Web Processing Service)](https://www.ogc.org/standard/wps)**: Standard pentru publicarea proceselor de analiză geospațială ca servicii web.
*   **[OGC API - Maps](https://ogc.org/standard/ogcapi-maps)**: Succesorul WMS, oferind o abordare modernă pentru servirea hărților pe web.
*   **[OGC API - Tiles](https://ogc.org/standard/ogcapi-tiles)**: Standard pentru furnizarea de date geospațiale sub formă de tile-uri (vectoriale sau raster).
*   **[OGC API - Records](https://ogc.org/standard/ogcapi-records)**: Standard pentru catalogarea și descoperirea resurselor geospațiale (succesorul CSW).
*   **[OGC API - Features](https://ogc.org/standard/ogcapi-features)**: Standard pentru accesul și manipularea datelor vectoriale (succesorul WFS).
*   **[OGC API - Coverages](https://ogc.org/standard/ogcapi-coverages)**: Standard pentru accesul la date de tip coverage (succesorul WCS).
*   **[OGC API - DGGS](https://ogc.org/standard/dggs)**: Standard pentru Discrete Global Grid Systems.
*   **[OGC API - Styles](https://ogc.org/standard/ogcapi-styles)**: Standard pentru gestionarea și aplicarea stilurilor vizuale asupra datelor geospațiale.
*   **[OGC API - Processes](https://ogc.org/standard/ogcapi-processes)**: Standard pentru execuția proceselor geospațiale pe web (succesorul WPS).
*   **[GeoTIFF](http://www.ogc.org/standards/geotiff)**: Format standard pentru imagini georeferențiate.
*   **[COG (Cloud Optimized GeoTIFF)](http://www.ogc.org/standards/cog)**: Un format GeoTIFF optimizat pentru stocarea și procesarea în cloud.
*   **[KML (Keyhole Markup Language)](http://www.ogc.org/standards/kml)**: Format XML pentru reprezentarea datelor geografice în hărți digitale.
*   **[Zarr](http://www.ogc.org/standards/zarr)**: Format de stocare a datelor multidimensionale, eficient pentru date științifice.
*   **[CSW (Catalog Service for the Web)](http://www.ogc.org/standards/cat)**: Standard pentru publicarea și căutarea metadatelor.
*   **[WKT (Well-Known Text)](http://www.ogc.org/standards/wkt-crs)**: Format text pentru reprezentarea geometriei obiectelor spațiale.
*   **[GML (Geography Markup Language)](http://www.ogc.org/standards/gml)**: Format XML pentru codificarea informației geografice.
*   **[LAS](http://www.ogc.org/standards/las)**: Format standard pentru date LiDAR și nori de puncte.
*   **[GeoPackage](http://www.ogc.org/standards/geopackage)**: Format de fișier bazat pe SQLite pentru stocarea datelor geospațiale.
*   **[OpenSearch](http://www.ogc.org/standards/opensearch)**: Standard pentru căutarea și descoperirea resurselor geospațiale.
*   **[HDF (Hierarchical Data Format)](http://www.ogc.org/standards/hdf)**: Format pentru stocarea și organizarea datelor științifice mari.
*   **[netCDF (Network Common Data Form)](http://www.ogc.org/standards/netcdf)**: Format pentru date științifice multidimensionale, utilizat în climatologie și oceanografie.

## Standarde Independente

Pe lângă standardele oficiale OGC, există și standarde dezvoltate de comunitate care au devenit de facto în industria geospațială:

*   **[GeoJSON](https://geojson.org/)**: Un format de schimb de date bazat pe JSON, extrem de popular datorită simplității și ușurinței de integrare în aplicații web și mobile.
*   **[TopoJSON](https://github.com/topojson/topojson)**: O extensie a GeoJSON care reduce dimensiunea fișierelor prin codificarea topologiei.
*   **[GeoParquet](https://geoparquet.org)**: Format columnar eficient pentru stocarea datelor spațiale mari.
*   **[FlatGeobuf](https://flatgeobuf.org)**: Format binar performant pentru date vectoriale.
*   **[GPX (GPS Exchange Format)](https://www.topografix.com/gpx.asp)**: Format XML pentru date GPS, utilizat de majoritatea dispozitivelor de navigație.
*   **[OSM XML](https://wiki.openstreetmap.org/wiki/OSM_XML)**: Formatul XML utilizat de OpenStreetMap pentru stocarea datelor geografice.
*   **[PBF (Protocolbuffer Binary Format)](https://wiki.openstreetmap.org/wiki/PBF_Format)**: Format binar comprimat pentru datele OpenStreetMap, mai eficient decât OSM XML.
*   **[MBTiles](https://github.com/mapbox/mbtiles-spec)**: Format pentru stocarea tile-urilor de hartă într-o bază de date SQLite.
*   **[Vector Tiles](https://github.com/mapbox/vector-tile-spec)**: Specificație pentru tile-uri vectoriale, optimizată pentru afișare web.
