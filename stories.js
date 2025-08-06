// Stories Data
class StoriesLibrary {
    constructor() {
        this.stories = [
            {
                id: 1,
                category: 'WILDLIFE',
                title: 'The Watcher of the Rain',
                excerpt: 'A lone bird in the monsoon becomes more than just a subject — it becomes a symbol of presence, peace, and patience.',
                image: 'https://i.ibb.co/X6qThPX/IMG-0861.jpg?auto=compress&cs=tinysrgb&w=800',
                content: `
                    <p>It was just another rainy day in the countryside — the kind where the sky forgets to stop crying, and the earth welcomes every drop like a long-lost friend. The fields turned darker,           the leaves shimmered with water, and the scent of wet soil floated quietly through the air.</p>

                    <p>And there it was — a lone bird perched silently, halfway between the sky and the earth. Not fluttering. Not flying. Just watching.</p>

                    <p>There was something hypnotic about it. The way it sat, feathers gently puffed, not bothered by the storm. It wasn’t looking for food. It wasn’t scared. It was simply present — existing             in that moment with an elegance that felt almost human.</p>

                    <p>We often look at rain as something to hide from. Something inconvenient. But this bird — the silent <em>Watcher of the Rain</em> — showed something else. It embraced the grey, the          quiet, and the cold. It stared into the storm like it was listening to a story only the sky could tell.</p>

                    <p>And maybe that’s what we need to learn. That not every moment has to be loud. That sometimes, the greatest strength lies in being still. In watching. In feeling.</p>

                    <p>In a world constantly moving, rushing, changing — sometimes the most beautiful thing you can do is pause and be like the watcher: <strong>still, grounded, and unafraid of the storm.</          strong></p>
                `,
                author: 'Juman Deep Bharati',
                date: 'August 6, 2025',
                readTime: '3 min read',
                featured: true
            },

            {
                id: 2,
                category: 'SCIENCE',
                title: 'This ancient worm had spiky teeth and a retractable throat',
                excerpt: 'Scientists have discovered a 500-million-year-old worm with a fearsome set of teeth and a throat that could shoot out to catch prey.',
                image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800',
                content: `
                    <p>A newly discovered ancient worm species reveals fascinating insights into early predatory behavior in Earth's oceans. This remarkable creature lived over 500 million years ago during the Cambrian period.</p>
                    
                    <p>The worm, named Selkirkia columbia, possessed a unique feeding mechanism that allowed it to extend its throat outward to capture prey. This retractable pharynx was lined with sharp, spiky teeth that could grip and tear apart small organisms.</p>
                    
                    <p>Fossil evidence suggests these creatures were among the ocean's top predators during their time, using their specialized anatomy to hunt effectively in the ancient seas.</p>
                `,
                author: 'Dr. Sarah Chen',
                date: 'July 12, 2024',
                readTime: '4 min read',
                featured: false
            },
            {
                id: 3,
                category: 'HISTORY & CULTURE',
                title: 'The best evidence yet Queen Victoria had a secret "marriage"',
                excerpt: 'New historical documents suggest Queen Victoria may have secretly married her Scottish servant John Brown after Prince Albert\'s death.',
                image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800',
                content: `
                    <p>Recently discovered letters and diary entries provide compelling evidence that Queen Victoria may have entered into a secret marriage with her devoted Scottish servant, John Brown, following the death of Prince Albert in 1861.</p>
                    
                    <p>The relationship between Victoria and Brown has long been a subject of speculation among historians. Brown served as the Queen's personal attendant and was known for his unusually close relationship with the monarch.</p>
                    
                    <p>These new documents, found in a private collection, include what appears to be a marriage certificate dated 1868, though its authenticity is still being verified by experts.</p>
                `,
                author: 'Prof. Margaret Thornton',
                date: 'July 10, 2024',
                readTime: '6 min read',
                featured: false
            },
            {
                id: 4,
                category: 'ANIMALS',
                title: 'Here\'s why we call this time of year the \'dog days\' of summer',
                excerpt: 'The hottest days of summer get their name from an ancient astronomical observation about the brightest star in our night sky.',
                image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
                content: `
                    <p>Ancient Greeks noticed that Sirius—which they dubbed the "dog star" as it is the brightest star in the constellation Canis Major—appears to rise alongside the sun in late July. They believed the combined power of the stars is what made this the hottest time of year.</p>
                    
                    <p>These punishingly hot summer days get their name from an ancient belief about the brightest star in our night sky. Here's the story behind the dog days of summer.</p>
                    
                    <p>The term "dog days" refers to the hottest, most sultry days of summer. In the Northern Hemisphere, they usually fall between early July and early September. In many European cultures, people believed this period brought bad luck.</p>
                    
                    <p>The ancient Greeks and Romans noticed that the brightest star in the night sky, Sirius, would rise just before the sun during the hottest part of summer. Sirius is part of the constellation Canis Major (the Greater Dog), which is why it's called the "Dog Star."</p>
                `,
                author: 'Dr. James Mitchell',
                date: 'July 8, 2024',
                readTime: '3 min read',
                featured: false
            },
            /*{
                id: 5,
                category: 'TRAVEL',
                title: 'Hidden waterfalls of the Pacific Northwest',
                excerpt: 'Discover the most spectacular and secluded waterfalls tucked away in the forests of Oregon and Washington.',
                image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800',
                content: `
                    <p>The Pacific Northwest is home to some of the most breathtaking waterfalls in North America, many hidden deep within old-growth forests and accessible only to those willing to venture off the beaten path.</p>
                    
                    <p>From the thundering cascades of Multnomah Falls to the delicate veils of Proxy Falls, each waterfall tells a unique geological story spanning millions of years.</p>
                    
                    <p>This guide reveals the locations and hiking routes to reach these natural wonders, along with the best times to visit for optimal photography conditions.</p>
                `,
                author: 'Emily Rodriguez',
                date: 'July 5, 2024',
                readTime: '7 min read',
                featured: false
            }*/
        ];

        this.init();
    }

    init() {
        this.renderStoriesPage();
        this.bindEvents();
    }

    renderStoriesPage() {
        this.renderSidebar();
        this.renderFeaturedStory();
        this.renderStoriesGrid();
    }

    renderSidebar() {
        const sidebarStories = document.getElementById('sidebarStories');
        const sidebarItems = this.stories.slice(1, 4); // Get 3 stories for sidebar

        sidebarStories.innerHTML = sidebarItems.map(story => `
            <div class="sidebar-story" data-story-id="${story.id}">
                <img src="${story.image}" alt="${story.title}" class="sidebar-story-image">
                <div class="sidebar-story-content">
                    <div class="sidebar-story-category">
                        <span class="category-icon">🔒</span>
                        ${story.category}
                    </div>
                    <h4 class="sidebar-story-title">${story.title}</h4>
                </div>
            </div>
        `).join('');
    }

    renderFeaturedStory() {
        const featuredStory = document.getElementById('featuredStory');
        const featured = this.stories.find(story => story.featured) || this.stories[0];

        featuredStory.innerHTML = `
            <div class="featured-story-image-container" data-story-id="${featured.id}">
                <img src="${featured.image}" alt="${featured.title}" class="featured-story-image">
                <div class="featured-story-overlay">
                    <div class="featured-story-content">
                        <div class="featured-story-category">${featured.category}</div>
                        <h2 class="featured-story-title">${featured.title}</h2>
                        <button class="featured-story-read">≡ READ</button>
                    </div>
                </div>
            </div>
        `;
    }

    renderStoriesGrid() {
        const storiesGrid = document.getElementById('storiesGrid');
        
        storiesGrid.innerHTML = this.stories.map(story => `
            <article class="story-card" data-story-id="${story.id}">
                <div class="story-card-image-container">
                    <img src="${story.image}" alt="${story.title}" class="story-card-image">
                    <div class="story-card-category">${story.category}</div>
                </div>
                <div class="story-card-content">
                    <h3 class="story-card-title">${story.title}</h3>
                    <p class="story-card-excerpt">${story.excerpt}</p>
                    <div class="story-card-meta">
                        <span class="story-card-author">${story.author}</span>
                        <span class="story-card-date">${story.date}</span>
                        <span class="story-card-read-time">${story.readTime}</span>
                    </div>
                </div>
            </article>
        `).join('');
    }

    bindEvents() {
        // Story card clicks
        document.addEventListener('click', (e) => {
            const storyCard = e.target.closest('[data-story-id]');
            if (storyCard) {
                const storyId = parseInt(storyCard.dataset.storyId);
                this.openStoryModal(storyId);
            }
        });

        // Modal close events
        const modal = document.getElementById('storyModal');
        const modalClose = document.getElementById('storyModalClose');
        const modalOverlay = document.getElementById('storyModalOverlay');

        modalClose.addEventListener('click', () => this.closeStoryModal());
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                this.closeStoryModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeStoryModal();
            }
        });
    }

    openStoryModal(storyId) {
        const story = this.stories.find(s => s.id === storyId);
        if (!story) return;

        const modal = document.getElementById('storyModal');
        const modalContent = document.getElementById('storyModalContent');

        modalContent.innerHTML = `
            <article class="story-detail">
                <div class="story-detail-header">
                    <img src="${story.image}" alt="${story.title}" class="story-detail-image">
                    <div class="story-detail-caption">
                        The Common Myna often remains still during rain, puffing its feathers to stay warm.
T                       his calm posture helps conserve energy while rain slides off its semi-waterproof coat.
                        In moments like these, nature reveals survival not in movement, but in quiet endurance.
                    </div>
                    <div class="story-detail-credit">
                        PHOTOGRAPH BY JUMAN'S FILMS, 
                    </div>
                    <div class="story-detail-tags">
                        <span class="story-tag">${story.category.split(' ')[0]}</span>
                        <span class="story-tag">EXPLAINER</span>
                    </div>
                </div>
                
                <div class="story-detail-content">
                    <h1 class="story-detail-title">${story.title}</h1>
                    <div class="story-detail-meta">
                        <span class="story-detail-author">By ${story.author}</span>
                        <span class="story-detail-date">${story.date}</span>
                        <span class="story-detail-read-time">${story.readTime}</span>
                    </div>
                    <div class="story-detail-text">
                        ${story.content}
                    </div>
                </div>
            </article>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeStoryModal() {
        const modal = document.getElementById('storyModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Initialize the stories library
document.addEventListener('DOMContentLoaded', () => {
    new StoriesLibrary();
}); 
