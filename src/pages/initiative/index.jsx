import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './initiative.module.css';

// Date pentru proiecte - Editează această listă pentru a adăuga/modifica proiecte
// role: "initiator" = geo-spatial.org a inițiat proiectul
// role: "contributor" = geo-spatial.org a contribuit la proiect
const PROJECTS = {
    active: [
        {
            name: "eHarta",
            slug: "initiative/eharta",
            description: "Proiect colaborativ de digitizare și georeferențiere a hărților istorice. Premiat la Open Data Challenge 2011 de Comisia Europeană.",
            image: "/img/proiecte/eharta-placeholder.jpg",
            externalUrl: "https://www.geo-spatial.org/vechi/articole/eharta",
            role: "initiator",
            tags: ["hărți istorice", "digitizare", "premiu"]
        },
        {
            name: "DupăCutremur.ro",
            slug: "initiative/dupa-cutremur",
            description: "Platformă pentru pregătirea și răspunsul în caz de cutremur. Informații despre clădiri vulnerabile, resurse și coordonare în situații de urgență.",
            image: "/img/proiecte/dupacutremur-placeholder.jpg",
            externalUrl: "https://sites.google.com/rerise.org/dupacutremur",
            role: "contributor",
            tags: ["urgență", "seismic", "pregătire"]
        },
        {
            name: "Seminarele geo-spatial.org",
            slug: "initiative/seminare",
            description: "Seria de seminare geo-spatial.org - aproape 20 de ani de evenimente educaționale organizate în România și Republica Moldova.",
            image: "/img/proiecte/seminare-placeholder.jpg",
            externalUrl: null,
            role: "initiator",
            tags: ["educație", "comunitate", "evenimente"]
        },
        {
            name: "Ro-VIBE",
            slug: "initiative/rovibe",
            description: "Concurs interjudețean multidisciplinar pentru liceeni – explorarea virtuală interactivă a României. geo-spatial.org a dezvoltat platforma digitală a concursului.",
            image: "/img/proiecte/rovibe-placeholder.png",
            externalUrl: "https://services.geo-spatial.org/rovibe",
            role: "contributor",
            tags: ["educație", "patrimoniu", "hartă interactivă"]
        },
        {
            name: "Date contact primării",
            slug: "initiative/date-contact-localitati",
            description: "Bază de date deschisă cu datele de contact ale primăriilor din România. Compilată de voluntari, actualizare planificată pentru 2026.",
            image: "/img/proiecte/contact-primarii-placeholder.jpg",
            externalUrl: "https://github.com/geospatialorg/date-contact-localitati",
            role: "initiator",
            tags: ["date deschise", "administrație", "crowdsourcing"]
        }
    ],
    archive: [
        {
            name: "COVID-19 România",
            slug: "initiative/covid19",
            description: "Dashboard interactiv cu date geospațiale despre evoluția pandemiei COVID-19 în România. Vizualizări, statistici și hărți actualizate.",
            image: "/img/proiecte/covid19-placeholder.jpg",
            externalUrl: "https://covid19.geo-spatial.org",
            role: "initiator", // "initiator" sau "contributor"
            tags: ["dashboard", "date deschise", "sănătate"]
        },
        {
            name: "FOSS4G 2019 București",
            slug: "initiative/foss4g-2019",
            description: "Conferința internațională FOSS4G 2019, organizată la București. Cel mai mare eveniment global dedicat software-ului geospațial open source.",
            image: "/img/proiecte/foss4g2019-placeholder.jpg",
            externalUrl: "https://2019.foss4g.org/",
            role: "initiator",
            tags: ["conferință", "open source", "internațional"]
        }
    ]
};

// Componenta pentru un card de proiect
function ProjectCard({ project, isArchive = false }) {
    return (
        <article className={styles.projectCard}>
            <Link to={`/${project.slug}`} className={styles.cardLink}>
                {/* Imaginea proiectului */}
                <div className={styles.cardImageContainer}>
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.name}
                            className={styles.cardImage}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                    ) : null}
                    <div
                        className={styles.imagePlaceholder}
                        style={{ display: project.image ? 'none' : 'flex' }}
                    >
                        🗺️
                    </div>

                    {/* Badge-uri */}
                    <div className={styles.badgeContainer}>
                        <span className={`${styles.statusBadge} ${isArchive ? styles.statusArchive : styles.statusActive}`}>
                            {isArchive ? 'Arhivă' : 'Activ'}
                        </span>
                        {project.role && (
                            <span className={`${styles.roleBadge} ${project.role === 'initiator' ? styles.roleInitiator : styles.roleContributor}`}>
                                {project.role === 'initiator' ? '★ Inițiator' : '◆ Contribuitor'}
                            </span>
                        )}
                    </div>
                </div>

                {/* Conținutul cardului */}
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{project.name}</h3>
                    <p className={styles.cardDescription}>{project.description}</p>

                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                        <div className={styles.cardTags}>
                            {project.tags.slice(0, 3).map((tag, index) => (
                                <span key={index} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                    )}

                    {/* Footer */}
                    <div className={styles.cardFooter}>
                        <span className={styles.readMore}>
                            Vezi detalii <i className="fas fa-arrow-right"></i>
                        </span>
                        {project.externalUrl && (
                            <span className={styles.externalLink}>
                                <i className="fas fa-external-link-alt"></i> Site extern
                            </span>
                        )}
                    </div>
                </div>
            </Link>
        </article>
    );
}

// Componenta pentru o secțiune de proiecte
function ProjectsSection({ title, icon, description, projects, isArchive = false }) {
    if (!projects || projects.length === 0) {
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
            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.slug || index}
                        project={project}
                        isArchive={isArchive}
                    />
                ))}
            </div>
        </section>
    );
}

// Pagina principală de proiecte
export default function ProjectsPage() {
    return (
        <Layout
            title="Proiecte"
            description="Proiectele comunității geo-spatial.org - inițiative active și arhiva istorică"
        >
            <main className={styles.projectsPage}>
                <div className="container">
                    {/* Header pagină */}
                    <header className={styles.pageHeader}>
                        <h1 className={styles.pageTitle}>Proiecte geo-spatial.org</h1>
                        <p className={styles.pageSubtitle}>
                            Inițiative și proiecte dezvoltate de comunitatea geo-spatial.org de-a lungul anilor
                        </p>
                    </header>

                    {/* Proiecte Active */}
                    <ProjectsSection
                        title="Proiecte Active"
                        icon="🚀"
                        description={`${PROJECTS.active.length} proiecte`}
                        projects={PROJECTS.active}
                        isArchive={false}
                    />

                    {/* Arhiva Istorică */}
                    <ProjectsSection
                        title="Arhivă Istorică"
                        icon="📚"
                        description={`${PROJECTS.archive.length} proiecte`}
                        projects={PROJECTS.archive}
                        isArchive={true}
                    />
                </div>
            </main>
        </Layout>
    );
}
