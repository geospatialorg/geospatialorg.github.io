import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./acces-liber.module.css";

const ACCES_LIBER_SECTIONS = [
  {
    name: "Software liber open source",
    slug: "acces-liber/software-liber",
    description: "Promovarea software-ului geospațial liber și open source. geo-spatial.org este reprezentanța locală OSGeo.",
    image: "/img/acces-liber/software-liber.jpg",
    tags: ["FOSS4G", "OSGeo", "GDAL/QGIS/GeoServer"],
  },
  {
    name: "Date deschise",
    slug: "acces-liber/date-deschise",
    description: "Acces liber la date geografice de calitate. Promovăm licențierea deschisă și crowdsourcing-ul.",
    image: "/img/acces-liber/date-deschise.jpg",
    tags: ["Open Data", "crowdsourcing", "CC BY-SA"],
  },
  {
    name: "Standarde deschise",
    slug: "acces-liber/standarde-deschise",
    description: "Interoperabilitate prin standarde OGC și independente. Asigurăm circulația liberă a datelor.",
    image: "/img/acces-liber/standarde-deschise.jpg",
    tags: ["OGC", "Interoperabilitate", "WMS/WFS/CSW/COG"],
  },
];

function SectionCard({ section }) {
  return (
    <article className={styles.projectCard}>
      <Link to={`/${section.slug}`} className={styles.cardLink}>
        <div className={styles.cardImageContainer}>
          <img
            src={section.image}
            alt={section.name}
            className={styles.cardImage}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className={styles.imagePlaceholder} style={{ display: section.image ? "none" : "flex" }}>
            🔓
          </div>
        </div>

        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{section.name}</h3>
          <p className={styles.cardDescription}>{section.description}</p>

          <div className={styles.cardTags}>
            {section.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.cardFooter}>
            <span className={styles.readMore}>
              Află mai multe <i className="fas fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function AccesLiberPage() {
  return (
    <Layout title="Acces Liber" description="Angajamentul geo-spatial.org pentru software liber, date deschise și standarde geospațiale.">
      <main className={styles.projectsPage}>
        <div className="container">
          <header className={styles.pageHeader}>
            <h1 className={styles.pageTitle}>Acces liber</h1>
            <p className={styles.pageSubtitle}>Pilonii de bază ai comunității geo-spatial.org: acces liber la tehnologie, date și cunoștințe.</p>
          </header>

          <section className={styles.section}>
            <div className={styles.projectsGrid}>
              {ACCES_LIBER_SECTIONS.map((section, index) => (
                <SectionCard key={section.slug || index} section={section} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
