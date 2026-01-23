import React, { useState, useEffect, useCallback } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Date statice pentru articolele din blog (cele mai recente)
// Acestea sunt extrase din secțiunile Noutăți și Evenimente
const BLOG_POSTS = [
    {
        id: 1,
        title: "Seminarele geo-spatial.org Chișinău 2026",
        permalink: "/noutati/seminare-chisinau2026",
        date: "2026-01-21",
        tags: ["evenimente"],
        description: "Ediția cu numărul 45 a seminarelor geo-spatial.org va avea loc în perioada 6 - 7 martie 2026, la Chișinău."
    },
    {
        id: 2,
        title: "Seminarele geo-spatial.org București 2025",
        permalink: "/noutati/seminare-bucuresti2025",
        date: "2025-09-30",
        tags: ["evenimente"],
        description: "Ediția cu numărul 44 a seminarelor geo-spatial.org va avea loc în data de 31 octombrie 2025, la București."
    },
    {
        id: 3,
        title: "Noul sit web geo-spatial.org",
        permalink: "/noutati/anunt-sit-nou-geo-spatial-org",
        date: "2025-06-14",
        tags: ["noutati"],
        description: "geo-spatial.org trece printr-o transformare radicală. Situl web a fost refăcut complet, folosind Docusaurus."
    },
    {
        id: 4,
        title: "Seminarele geo-spatial.org Cluj-Napoca 2025",
        permalink: "/noutati/seminare-cluj2025",
        date: "2025-05-30",
        tags: ["evenimente"],
        description: "Ediția cu numărul 43 a seminarelor geo-spatial.org va avea loc în data de 13 iunie 2025, la Cluj-Napoca."
    },
    {
        id: 5,
        title: "Seminarele geo-spatial.org Chișinău 2025",
        permalink: "/noutati/seminare-chisinau2025",
        date: "2025-02-28",
        tags: ["evenimente"],
        description: "Ediția cu numărul 42 a seminarelor geo-spatial.org va avea loc în perioada 28 februarie - 1 martie 2025."
    },
    {
        id: 6,
        title: "Seminarele geo-spatial.org Timișoara 2024",
        permalink: "/noutati/seminare-timisoara2024",
        date: "2024-11-15",
        tags: ["evenimente"],
        description: "Ediția cu numărul 41 a seminarelor geo-spatial.org a avut loc în data de 6 decembrie 2024, la Timișoara."
    }
];

// Componenta principală pentru carusel
export default function NewsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [itemsPerView, setItemsPerView] = useState(3);

    // Determinăm câte elemente se văd pe ecran
    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth <= 768) {
                setItemsPerView(1);
            } else if (window.innerWidth <= 1200) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3);
            }
        };

        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    // Numărul maxim de "pagini"
    const maxIndex = Math.max(0, BLOG_POSTS.length - itemsPerView);

    // Navigare
    const goToNext = useCallback(() => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const goToPrev = useCallback(() => {
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    const goToSlide = useCallback((index) => {
        setCurrentIndex(Math.min(index, maxIndex));
    }, [maxIndex]);

    // Auto-play
    useEffect(() => {
        if (isPaused || BLOG_POSTS.length <= itemsPerView) return;

        const interval = setInterval(goToNext, 5000);
        return () => clearInterval(interval);
    }, [isPaused, goToNext, itemsPerView]);

    // Formatăm data
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ro-RO', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    // Determinăm tipul de badge (noutăți sau evenimente)
    const getBadgeInfo = (tags) => {
        if (tags.includes('evenimente')) {
            return { label: 'Eveniment', className: styles.badgeEvenimente, icon: '📅' };
        }
        return { label: 'Noutate', className: styles.badgeNoutati, icon: '📰' };
    };

    // Număr de puncte de navigare
    const numDots = Math.min(BLOG_POSTS.length, maxIndex + 1);

    return (
        <div
            className={styles.carouselContainer}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className={styles.carouselHeader}>
                <h2 className={styles.carouselTitle}>Ce este nou?</h2>
            </div>

            <div className={styles.carouselWrapper}>
                {/* Buton Previous */}
                <button
                    className={`${styles.navButton} ${styles.navButtonPrev}`}
                    onClick={goToPrev}
                    disabled={BLOG_POSTS.length <= itemsPerView}
                    aria-label="Articolul anterior"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>

                {/* Track-ul cu carduri */}
                <div
                    className={styles.carouselTrack}
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsPerView + 1.5)}%)`
                    }}
                >
                    {BLOG_POSTS.map((post) => {
                        const badge = getBadgeInfo(post.tags);
                        return (
                            <div key={post.id} className={styles.carouselSlide}>
                                <article className={styles.card}>
                                    <Link to={post.permalink} className={styles.cardLink}>
                                        <div className={styles.cardContent}>
                                            <div className={styles.cardHeader}>
                                                <span className={`${styles.badge} ${badge.className}`}>
                                                    {badge.icon} {badge.label}
                                                </span>
                                                <span className={styles.date}>
                                                    {formatDate(post.date)}
                                                </span>
                                            </div>
                                            <h3 className={styles.cardTitle}>{post.title}</h3>
                                            <p className={styles.cardExcerpt}>{post.description}</p>
                                            <span className={styles.readMore}>
                                                Citește mai mult <i className="fas fa-arrow-right"></i>
                                            </span>
                                        </div>
                                    </Link>
                                </article>
                            </div>
                        );
                    })}
                </div>

                {/* Buton Next */}
                <button
                    className={`${styles.navButton} ${styles.navButtonNext}`}
                    onClick={goToNext}
                    disabled={BLOG_POSTS.length <= itemsPerView}
                    aria-label="Articolul următor"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>

            {/* Pagination Dots */}
            {numDots > 1 && (
                <div className={styles.pagination}>
                    {Array.from({ length: numDots }, (_, i) => (
                        <button
                            key={i}
                            className={`${styles.paginationDot} ${i === currentIndex ? styles.paginationDotActive : ''}`}
                            onClick={() => goToSlide(i)}
                            aria-label={`Mergi la slide ${i + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Link către toate articolele */}
            <div className={styles.viewAllContainer}>
                <Link to="/noutati" className={styles.viewAllLink}>
                    Vezi toate articolele <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    );
}
