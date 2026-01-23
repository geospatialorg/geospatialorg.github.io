/**
 * Plugin custom pentru geo-spatial.org
 * Expune datele blogului "noutati" ca date globale accesibile în componente React
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

module.exports = function pluginRecentPosts(context, options) {
    return {
        name: 'docusaurus-plugin-recent-posts',

        async contentLoaded({ actions }) {
            const { setGlobalData } = actions;

            // Citim directorul noutati pentru articole
            const noutatiDir = path.join(context.siteDir, 'noutati');
            const posts = [];

            try {
                const folders = fs.readdirSync(noutatiDir);

                for (const folder of folders) {
                    const folderPath = path.join(noutatiDir, folder);

                    // Verificăm dacă e director și nu e fișier de configurare
                    if (fs.statSync(folderPath).isDirectory()) {
                        const indexPath = path.join(folderPath, 'index.md');

                        if (fs.existsSync(indexPath)) {
                            const fileContent = fs.readFileSync(indexPath, 'utf-8');
                            const { data, content } = matter(fileContent);

                            // Extragem data din numele folderului (format: YYYY-MM-DD-slug)
                            const dateMatch = folder.match(/^(\d{4}-\d{2}-\d{2})/);
                            const date = dateMatch ? dateMatch[1] : null;

                            // Extragem excerpt din conținut (prima propoziție sau până la <!-- truncate -->)
                            let excerpt = '';
                            const truncateIndex = content.indexOf('<!-- truncate -->');
                            if (truncateIndex > 0) {
                                excerpt = content.substring(0, truncateIndex).trim();
                            } else {
                                // Prima propoziție din conținut
                                const firstParagraph = content.split('\n\n')[0] || '';
                                excerpt = firstParagraph.substring(0, 200);
                            }

                            // Curățăm excerpt de markdown
                            excerpt = excerpt
                                .replace(/^#.*$/gm, '') // elimină titluri
                                .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // convertește linkuri în text
                                .replace(/\*\*([^*]+)\*\*/g, '$1') // elimină bold
                                .replace(/\*([^*]+)\*/g, '$1') // elimină italic
                                .replace(/\n/g, ' ')
                                .trim();

                            if (date && data.title) {
                                posts.push({
                                    id: folder,
                                    title: data.title,
                                    slug: data.slug,
                                    permalink: `/noutati/${data.slug}`,
                                    date: date,
                                    tags: data.tags || [],
                                    description: excerpt || data.description || ''
                                });
                            }
                        }
                    }
                }

                // Sortăm după dată (cele mai recente primele)
                posts.sort((a, b) => new Date(b.date) - new Date(a.date));

                // Păstrăm doar primele 6
                const recentPosts = posts.slice(0, 6);

                // Setăm ca date globale
                setGlobalData({ recentPosts });

                console.log(`✅ [recent-posts] Loaded ${recentPosts.length} recent posts`);
            } catch (error) {
                console.error('❌ [recent-posts] Error loading posts:', error);
                setGlobalData({ recentPosts: [] });
            }
        },
    };
};
