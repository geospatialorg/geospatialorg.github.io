import React, { useState, useEffect, useCallback } from 'react';
import Link from '@docusaurus/Link';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

// Componenta principală pentru carusel
export default function NewsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [itemsPerView, setItemsPerView] = useState(3);

    // Preluăm datele din plugin-ul custom
    let recentPosts = [];
    try {
        const pluginData = usePluginData('docusaurus-plugin-recent-posts');
        if (pluginData?.recentPosts) {
            recentPosts = pluginData.recentPosts;
        }
    } catch (e) {
        console.warn('Could not load recent posts:', e);
    }

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
    const maxIndex = Math.max(0, recentPosts.length - itemsPerView);

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
        if (isPaused || recentPosts.length <= itemsPerView) return;

        const interval = setInterval(goToNext, 5000);
        return () => clearInterval(interval);
    }, [isPaused, goToNext, recentPosts.length, itemsPerView]);

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
        const tagList = Array.isArray(tags) ? tags : [];
        if (tagList.includes('evenimente')) {
            return { label: 'Eveniment', className: styles.badgeEvenimente, icon: '📅' };
        }
        return { label: 'Noutate', className: styles.badgeNoutati, icon: '📰' };
    };

    // Fallback dacă nu există date
    if (recentPosts.length === 0) {
        return (
            <div className={styles.carouselContainer}>
                <div className={styles.carouselHeader}>
                    <h2 className={styles.carouselTitle}>Ce este nou?</h2>
                </div>
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <p>Noutățile și evenimentele vor apărea aici curând!</p>
                    <Link to="/noutati" className={styles.viewAllLink}>
                        Vezi toate articolele <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        );
    }

    // Număr de puncte de navigare
    const numDots = Math.min(recentPosts.length, maxIndex + 1);

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
                    disabled={recentPosts.length <= itemsPerView}
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
                    {recentPosts.map((post, index) => {
                        const badge = getBadgeInfo(post.tags);
                        return (
                            <div key={post.id || index} className={styles.carouselSlide}>
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
                                            <p className={styles.cardExcerpt}>
                                                {post.description?.substring(0, 120) || 'Citește mai multe...'}
                                                {post.description?.length > 120 ? '...' : ''}
                                            </p>
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
                    disabled={recentPosts.length <= itemsPerView}
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
