import React, { useState } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const data = [
  {
    name: `Grid ANCPI 40km`,
    nameHtml: `Grid ANCPI 40km <sup><code style="background-color: #d4f1f4; color: #0b5394; padding: 2px 6px; border-radius: 4px; margin-right: 4px; font-size: 0.7rem">România</code></sup> <sup><code style="background-color: #d4f1f4; color: #0b5394; padding: 2px 6px; border-radius: 4px; margin-right: 4px; font-size: 0.7rem">caroiaj geografic</code></sup> <sup><code style="background-color: #d4f1f4; color: #0b5394; padding: 2px 6px; border-radius: 4px; margin-right: 4px; font-size: 0.7rem">vector</code></sup> <sup><code style="background-color: #d4f1f4; color: #0b5394; padding: 2px 6px; border-radius: 4px; margin-right: 4px; font-size: 0.7rem">40x40km</code></sup>`,
    download: `<ul><li><a href="https://services.geo-spatial.org/data/grids/data/ro_grid_data_ancpi_40km.gpkg" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-hard-drive" style="margin-right: 0.4rem;"></i>GeoPackage</a></li><li><a href="https://services.geo-spatial.org/data/grids/data/ro_grid_data_ancpi_40km.zip" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-hard-drive" style="margin-right: 0.4rem;"></i>Shapefile</a></li><li><a href="https://services.geo-spatial.org/data/grids/data/ro_grid_data_ancpi_40km.parquet" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-cloud" style="margin-right: 0.4rem;"></i>Geoparquet</a></li><li><a href="https://services.geo-spatial.org/data/grids/data/ro_grid_data_ancpi_40km.fgb" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-cloud" style="margin-right: 0.4rem;"></i>FlatGeobuf</a></li><li><a href="https://services.geo-spatial.org/data/grids/data/ro_grid_data_ancpi_40km.geojson" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-hard-drive" style="margin-right: 0.4rem;"></i>GeoJSON</a></li><li><a href="https://services.geo-spatial.org/data/grids/data/ro_grid_data_ancpi_40km.topojson" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-hard-drive" style="margin-right: 0.4rem;"></i>TopoJSON</a></li><li><a href="https://services.geo-spatial.org/data/grids/data/ro_grid_data_ancpi_40km.kml" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-hard-drive" style="margin-right: 0.4rem;"></i>KML</a></li></ul>`,
    metadata: `<div><p><strong>Codul stratului:</strong> <code>ro_grid_data_ancpi_40km</code></p><div style="display: flex; align-items: flex-start; gap: 1rem;"><div style="flex: 1;"><strong>Abstract:</strong> Set de date care conține caroiajul de 40 x 40 km, în proiecție Stereo70, creat de Agenția Națională de Cadastru și Publicitate Imobiliară pentru distribuirea Modelului Numeric Altimetric de Teren. Caroiajul este utilizat de geo-spatial.org pentru prelucrarea și distribuirea mai multor seturi de date.<p><strong>Detalii specifice:</strong> <a href="https://geo-spatial.org/ghiduri/procesari-etl/grids/ro_grid_data_ancpi_40km" target="_blank" rel="noopener noreferrer">Procedura de prelucrare a datelor</a>.</p></div><a href="https://services.geo-spatial.org/data/thumbnails/grids/data/ro_grid_data_ancpi_40km.svg" target="_blank" rel="noopener noreferrer"><img src="https://services.geo-spatial.org/data/thumbnails/grids/data/ro_grid_data_ancpi_40km.svg" alt="thumbnail" style="width: 300px; height: auto;" /></a></div></div>`,
    resources: `<ul><li><a href="https://services.geo-spatial.org/geonetwork/srv/eng/catalog.search#/metadata/337d3cb7-45d1-4d60-91b5-76e566d389df" target="_blank" rel="noopener noreferrer"><i class="fa fa-book-open" style="margin-right: 0.3rem;"></i>Consultare intrare catalog geo-spatial.org</a></li><li><a href="https://services.geo-spatial.org/geoserver/grids/wms?service=WMS&version=1.1.0&request=GetMap&layers=grids%3Aro_grid_data_ancpi_40km&bbox=100000.0%2C220000.0%2C900000.0%2C780000.0625&width=768&height=537&srs=EPSG%3A3844&styles=&format=application/openlayers" target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-eye" style="margin-right: 0.3rem;"></i>Vizualizare interactivă simplă</a></li><li><a href="https://services.geo-spatial.org/maps/#/viewer/19" target="_blank" rel="noopener noreferrer"><i class="fa fa-eye" style="margin-right: 0.3rem;"></i>Vizualizare interactivă complexă</a></li><li><a href="https://services.geo-spatial.org/geoserver/grids/ows?service=WMS&version=1.3.0&request=GetCapabilities" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-map" style="margin-right: 0.3rem;"></i>Accesare WMS</a></li><li><a href="https://services.geo-spatial.org/geoserver/grids/gwc/service/wmts?service=WMTS&version=1.1.1&request=GetCapabilities" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-map" style="margin-right: 0.3rem;"></i>Accesare WMTS</a></li><li><a href="https://services.geo-spatial.org/geoserver/grids/ows?service=WFS&acceptversions=2.0.0&request=GetCapabilities" target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-map" style="margin-right: 0.3rem;"></i>Accesare WFS</a></li><li><a href="https://github.com/geospatialorg/simbolizare/blob/main/sld/grids/data/ro_grid_data_ancpi_40km_labels.sld" target="_blank" rel="noopener noreferrer"><i class="fa fa-palette" style="margin-right: 0.3rem;"></i>Simbolizare SLD</a></li><li><a href="https://github.com/geospatialorg/simbolizare/blob/main/sld/grids/data/ro_grid_data_ancpi_40km.sld" target="_blank" rel="noopener noreferrer"><i class="fa fa-palette" style="margin-right: 0.3rem;"></i>Simbolizare SLD alternativă</a></li></ul>`,
  },
];

export default function ListaCaroiajeGeografice() {
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
            <span dangerouslySetInnerHTML={{ __html: item.nameHtml }} />
          </summary>
          <Tabs>
            <TabItem value="desc" label={<><i className="fa fa-download" style={{ marginRight: '0.5rem' }}></i>Descărcare/Accesare</>}>
              <div dangerouslySetInnerHTML={{ __html: item.download }} />
            </TabItem>
            <TabItem value="meta" label={<><i className="fa fa-circle-info" style={{ marginRight: '0.5rem' }}></i>Descriere</>}>
              <div dangerouslySetInnerHTML={{ __html: item.metadata }} />
            </TabItem>
            <TabItem value="res" label={<><i className="fa fa-link" style={{ marginRight: '0.5rem' }}></i>Resurse</>}>
              <div dangerouslySetInnerHTML={{ __html: item.resources }} />
            </TabItem>
          </Tabs>
          <hr />
        </details>
      ))}
    </div>
  );
}
