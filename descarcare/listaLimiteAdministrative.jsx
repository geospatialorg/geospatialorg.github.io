import React, { useState } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const data = [
  {
    name: 'Limite administrative - UAT, România (poligon)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_polygon.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_polygon.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_polygon.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_polygon.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_polygon.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_polygon.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_polygon.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p>5d90a442-0659-4ad9-9af1-9b890b2ff0c8</p>,
  },
  {
    name: 'Limite administrative - UAT, România  (linie)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_line.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_line.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_line.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_line.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_line.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_line.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_line.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p>e4d24e1e-f749-4425-806f-1c33dabd20f2</p>,
  },
  {
    name: 'Limite administrative - UAT, România  (poligon, geometrie simplificată)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_polygon.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_polygon.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_polygon.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_polygon.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_polygon.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_polygon.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_polygon.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p>f00bfc1b-aba6-4f26-a81a-dba0e188a6b7</p>,
  },
  {
    name: 'Limite administrative - UAT, România  (linie, geometrie simplificată)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_line.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_line.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_line.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_line.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_line.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_line.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_line.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - UAT, România  (poligon, geometrie unificată București)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_bucharest_merged_polygon.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_bucharest_merged_polygon.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_bucharest_merged_polygon.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_bucharest_merged_polygon.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_bucharest_merged_polygon.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_bucharest_merged_polygon.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_bucharest_merged_polygon.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - UAT, România  (linie, geometrie unificată București)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_bucharest_merged_line.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_bucharest_merged_line.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_bucharest_merged_line.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_bucharest_merged_line.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_bucharest_merged_line.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_bucharest_merged_line.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_bucharest_merged_line.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - UAT, România  (poligon, geometrie unificată și simplicata București)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_bucharest_merged_polygon.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_bucharest_merged_polygon.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_bucharest_merged_polygon.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_bucharest_merged_polygon.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_bucharest_merged_polygon.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_bucharest_merged_polygon.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_bucharest_merged_polygon.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - UAT, România  (linie, geometrie unificată și simplificată București)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_bucharest_merged_line.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_bucharest_merged_line.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_bucharest_merged_line.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_bucharest_merged_line.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_bucharest_merged_line.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_bucharest_merged_line.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/lau/ro_admin_lau_simplified_bucharest_merged_line.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - județe, România (poligon)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_polygon.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_polygon.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_polygon.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_polygon.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_polygon.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_polygon.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_polygon.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - județe, România (linie)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_line.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_line.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_line.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_line.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_line.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_line.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_line.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - județe, România (poligon, geometrie simplificată)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_simplified_polygon.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_simplified_polygon.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_simplified_polygon.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_simplified_polygon.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_simplified_polygon.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_simplified_polygon.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_simplified_polygon.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - județe, România (linie, geometrie simplificată)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_simplified_line.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_simplified_line.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_simplified_line.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_simplified_line.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_simplified_line.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_simplified_line.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/county/ro_admin_county_simplified_line.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - regiuni dezvoltare, România  (poligon)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_polygon.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_polygon.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_polygon.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_polygon.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_polygon.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_polygon.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_polygon.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - regiuni dezvoltare, România  (linie)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_line.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_line.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_line.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_line.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_line.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_line.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_line.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - regiuni dezvoltare, România  (poligon, geometrie simplificată)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_simplified_polygon.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_simplified_polygon.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_simplified_polygon.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_simplified_polygon.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_simplified_polygon.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_simplified_polygon.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_simplified_polygon.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - regiuni dezvoltare, România  (linie, geometrie simplificată)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_simplified_line.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_simplified_line.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_simplified_line.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_simplified_line.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_simplified_line.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_simplified_line.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/region/ro_admin_region_simplified_line.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - macroregiuni, România (poligon)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_polygon.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_polygon.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_polygon.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_polygon.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_polygon.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_polygon.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_polygon.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - macroregiuni, România (linie)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_line.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_line.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_line.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_line.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_line.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_line.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_line.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - macroregiuni, România (poligon, geometrie simplificată)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_simplified_polygon.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_simplified_polygon.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_simplified_polygon.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_simplified_polygon.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_simplified_polygon.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_simplified_polygon.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_simplified_polygon.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - macroregiuni, România (linie, geometrie simplificată)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_simplified_line.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_simplified_line.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_simplified_line.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_simplified_line.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_simplified_line.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_simplified_line.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/macroregion/ro_admin_macroregion_simplified_line.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - frontiera de stat, România (poligon)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - frontiera de stat, România (poligon, geometrie simplificată)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - frontiera de stat, România (linie)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
  {
    name: 'Limite administrative - frontiera de stat, România (linie, geometrie simplificată)',
    download: <>'<a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.gpkg" target="_blank" rel="noopener noreferrer">GeoPackage</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.zip" target="_blank" rel="noopener noreferrer">Shapefile</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.parquet" target="_blank" rel="noopener noreferrer">Geoparquet</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.fgb" target="_blank" rel="noopener noreferrer">FlatGeobuf</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.geojson" target="_blank" rel="noopener noreferrer">GeoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.topojson" target="_blank" rel="noopener noreferrer">TopoJSON</a> | <a href="https://services.geo-spatial.org/data/administrative_boundaries/country/ro_admin_admin_country_polygon.kml" target="_blank" rel="noopener noreferrer">KML</a>' </>,
    metadata: <p></p>,
  },
];

export default function listaLimiteAdministrative() {
  const [query, setQuery] = useState('');

  const filtered = data.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Caută..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          marginBottom: '1rem',
          padding: '0.5rem',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '6px',
          border: '1px solid #ccc',
        }}
      />
      {filtered.map((item, idx) => (
        <details key={idx} style={{ marginBottom: '1rem' }}>
          <summary
            style={{
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem',
              padding: '0.5rem 0',
            }}
          >
            {item.name}
          </summary>
          <Tabs>
            <TabItem value="desc" label="Descărcare">
              {item.download}
            </TabItem>
            <TabItem value="meta" label="Descriere">
              {item.metadata}
            </TabItem>
          </Tabs>
        </details>
      ))}
    </div>
  );
}
