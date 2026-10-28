import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './servicii.module.css';

// Date pentru servicii - Editează această listă pentru a adăuga/modifica servicii
// status: "stable" | "beta" | "experimental"
// popular: true/false - afișează badge "Popular"
const SERVICES = {
    ogc: [
        {
            name: "WMS",
            fullName: "Web Map Service",
            slug: "servicii/wms",
            description: "Serviciu pentru vizualizarea hărților raster. Returnează imagini (PNG, JPEG) ale datelor geospațiale pentru afișare în aplicații GIS sau web.",
            icon: "🗺️",
            status: "stable",
            popular: true,
            endpoint: "https://services.geo-spatial.org/geoserver/wms",
            tags: ["vizualizare", "hărți", "raster"]
        },
        {
            name: "WMTS",
            fullName: "Web Map Tile Service",
            slug: "servicii/wmts",
            description: "Serviciu pentru tile-uri de hartă pre-generate. Oferă performanță superioară pentru vizualizare prin cache-ing și tile-uri standardizate.",
            icon: "🧩",
            status: "stable",
            popular: false,
            endpoint: "https://services.geo-spatial.org/geoserver/gwc/service/wmts",
            tags: ["tile-uri", "cache", "performanță"]
        },
        {
            name: "WFS",
            fullName: "Web Feature Service",
            slug: "servicii/wfs",
            description: "Serviciu pentru accesarea și descărcarea datelor vectoriale. Permite interogări spațiale și returnează date în format GeoJSON, GML sau Shapefile.",
            icon: "📍",
            status: "stable",
            popular: false,
            endpoint: "https://services.geo-spatial.org/geoserver/wfs",
            tags: ["vector", "descărcare", "interogări"]
        },
        {
            name: "WCS",
            fullName: "Web Coverage Service",
            slug: "servicii/wcs",
            description: "Serviciu pentru accesarea și descărcarea datelor raster (coverage). Ideal pentru modele digitale de teren, imagini satelitare și date climatice.",
            icon: "🛰️",
            status: "stable",
            popular: false,
            endpoint: "https://services.geo-spatial.org/geoserver/wcs",
            tags: ["raster", "descărcare", "coverage"]
        },
        {
            name: "CSW",
            fullName: "Catalog Service for the Web",
            slug: "servicii/csw",
            description: "Serviciu pentru căutarea și descoperirea metadatelor. Permite interogarea catalogului de date conform standardelor ISO și Dublin Core.",
            icon: "🔍",
            status: "stable",
            popular: false,
            endpoint: "https://services.geo-spatial.org/geonetwork/srv/eng/csw",
            tags: ["metadate", "catalog", "căutare"]
        },
        {
            name: "OGC API",
            fullName: "OGC API - Features, Tiles, Maps",
            slug: "servicii/ogc-api",
            description: "Noua generație de servicii OGC bazate pe REST și OpenAPI. Interfață modernă, ușor de utilizat, compatibilă cu ecosistemul web actual.",
            icon: "🚀",
            status: "beta",
            popular: false,
            endpoint: "https://services.geo-spatial.org/geoserver/ogc",
            tags: ["REST", "OpenAPI", "modern"]
        },
        {
            name: "WPS",
            fullName: "Web Processing Service",
            slug: "servicii/wps",
            description: "Serviciu pentru procesarea geospațială pe server. Permite executarea de procese (buffer, clip, union) fără instalare de software local.",
            icon: "⚙️",
            status: "stable",
            popular: false,
            endpoint: "https://services.geo-spatial.org/geoserver/wps",
            tags: ["procesare", "analiză", "geoprocesare"]
        }
    ],
    utilities: [
        {
            name: "PyTransDatRO",
            fullName: "Transformări moderne de coordonate (Stereo 70 ↔ ETRS89)",
            slug: "servicii/pytransdatro",
            description: "Platformă modernă și deschisă pentru transformări de înaltă precizie (Stereo 70 ↔ ETRS89). Include studio web interactiv, conversie fișiere (CSV/TXT) și API REST de mare viteză.",
            icon: "⚡",
            status: "stable",
            popular: true,
            endpoint: "https://pytransdat.geo-spatial.org",
            tags: ["Stereo 70", "ETRS89", "REST API", "geodezie"]
        },
        {
            name: "TransdatOnline",
            fullName: "Serviciu clasic de transformare sisteme de coordonate",
            slug: "servicii/transformare-coordonate",
            description: "Serviciu istoric pentru transformarea coordonatelor între sistemele românești (Stereo 70, Stereo 30) și internaționale (WGS84, ETRS89), activ din 2011.",
            icon: "🔄",
            status: "stable",
            popular: false,
            endpoint: "https://www.geo-spatial.org/transdatonline/",
            tags: ["coordonate", "Stereo 70", "Stereo 30", "istoric"]
        }
    ]
};

// Componenta pentru un card de serviciu
function ServiceCard({ service }) {
    return (
        <article className={styles.serviceCard}>
            <Link to={`/${service.slug}`} className={styles.cardLink}>
                {/* Icon și Badge-uri */}
                <div className={styles.cardHeader}>
                    <span className={styles.serviceIcon}>{service.icon}</span>
                    <div className={styles.badgeContainer}>
                        <span className={`${styles.statusBadge} ${styles[`status${service.status.charAt(0).toUpperCase() + service.status.slice(1)}`]}`}>
                            {service.status === 'stable' ? 'Stabil' :
                                service.status === 'beta' ? 'Beta' : 'Experimental'}
                        </span>
                        {service.popular && (
                            <span className={styles.badgePopular}>
                                ⭐ Popular
                            </span>
                        )}
                    </div>
                </div>

                {/* Conținutul cardului */}
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{service.name}</h3>
                    <p className={styles.cardFullName}>{service.fullName}</p>
                    <p className={styles.cardDescription}>{service.description}</p>

                    {/* Tags */}
                    {service.tags && service.tags.length > 0 && (
                        <div className={styles.cardTags}>
                            {service.tags.slice(0, 3).map((tag, index) => (
                                <span key={index} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                    )}

                    {/* Footer */}
                    <div className={styles.cardFooter}>
                        <span className={styles.readMore}>
                            Documentație <i className="fas fa-arrow-right"></i>
                        </span>
                        {service.endpoint && (
                            <span className={styles.endpointHint}>
                                <i className="fas fa-link"></i> Endpoint disponibil
                            </span>
                        )}
                    </div>
                </div>
            </Link>
        </article>
    );
}

// Componenta pentru o secțiune de servicii
function ServicesSection({ title, icon, description, services }) {
    if (!services || services.length === 0) {
        return null;
    }

    return (
        <section className={styles.section}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>{icon}</span>
                <h2 className={styles.sectionTitle}>{title}</h2>
                {description && (
                    <span className={styles.sectionDescription}>{description}</span>
                )}
            </div>
            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.slug || index}
                        service={service}
                    />
                ))}
            </div>
        </section>
    );
}

// Pagina principală de servicii
export default function ServicesPage() {
    return (
        <Layout
            title="Servicii Web"
            description="Servicii web OGC și utilitare oferite de geo-spatial.org - WMS, WMTS, WFS, WCS, CSW, OGC API și transformare coordonate"
        >
            <main className={styles.servicesPage}>
                <div className="container">
                    {/* Header pagină */}
                    <header className={styles.pageHeader}>
                        <h1 className={styles.pageTitle}>Servicii Web</h1>
                        <p className={styles.pageSubtitle}>
                            Servicii geospațiale standardizate OGC și utilitare oferite de platforma geo-spatial.org
                        </p>
                    </header>

                    {/* Servicii OGC */}
                    <ServicesSection
                        title="Servicii OGC"
                        icon="🌐"
                        description={`${SERVICES.ogc.length} servicii standardizate`}
                        services={SERVICES.ogc}
                    />

                    {/* Utilitare */}
                    <ServicesSection
                        title="Utilitare"
                        icon="🔧"
                        description={`${SERVICES.utilities.length} utilitar${SERVICES.utilities.length > 1 ? 'e' : ''}`}
                        services={SERVICES.utilities}
                    />
                </div>
            </main>
        </Layout>
    );
}
