class PhotoLibrary {
    constructor() {
        this.photos = [
            {
                url: "https://i.ibb.co/XfsC9w9g/IMG-0864.jpg",
                title: "Monsoon Gaze",
                caption: "It didn’t sing. It didn’t move. Just watched — as the rain stitched stories into the silence of the world below."
            }, 
            {
                url: "https://i.ibb.co/GwXWdSh/IMG-0878.jpg",
                title: "Just People, Just Nature",
                caption: "Two souls, one rhythm — working quietly where the earth meets the sky. No rush, no noise, just life unfolding in the open."
            }, 
            {
                url: "https://i.ibb.co/1HS9157/IMG-0877.jpg",
                title: "Glow of Grace",
                caption: "Draped in white and kissed by light, the Bogoli stands like a prayer in motion. In its stillness, the earth breathes peace — a quiet guardian of the fields."
            }, 
            {
                url: "https://i.ibb.co/q3SfHKPQ/IMG-0876.jpg",
                title: "Harvested Light",
                caption: "The fields rest beneath a burning sky, where golden grains meet crimson light. As the sun bows out, the land glows with stories of the day."
            }, 
            {
                url: "https://i.ibb.co/wFr5MkHt/IMG-0875.jpg",
                title: "Green Horizon",
                caption: "He stood still, not just to see — but to feel. In the vastness of green and gold, some answers are found without a single word spoken."
            }, 
            {
                url: "https://i.ibb.co/B29p6WjF/IMG-0873.jpg",
                title: "Stillness in Blue",
                caption: "Perched with patience, cloaked in color — the kingfisher waits. In that frozen second, time bows to instinct, and the river listens."
            }, 
            {
                url: "https://i.ibb.co/xKhfYrW4/IMG-0872.jpg",
                title: "The Silent Hunter",
                caption: "Perched with patience, cloaked in color — the kingfisher waits. In that frozen second, time bows to instinct, and the river listens."
            }, 
            {
                url: "https://i.ibb.co/mr2YPhZz/IMG-0871.jpg",
                title: "Alone Above All",
                caption: "Through the thick clouds and heavy sky, it flies — not to escape, but to embrace the vast unknown. A single soul, weightless in a world full of storms."
            }, 
            {
                url: "https://i.ibb.co/1GpC8JMH/IMG-0870.jpg",
                title: "The Watchtower",
                caption: "Amid the hum of monsoon winds and ripening fields, the little cormorant stands guard — still, silent, soaked in solitude. Nature’s own lighthouse, waiting between flights."
            }, 
            {
                url: "https://i.ibb.co/v6NYCCY4/IMG-0866.jpg",
                title: "The Watchtower",
                caption: "Amid the hum of monsoon winds and ripening fields, the little cormorant stands guard — still, silent, soaked in solitude. Nature’s own lighthouse, waiting between flights."
            }, 
            {
                url: "https://i.ibb.co/4nRCn7yz/IMG-0865.jpg",
                title: "Fields of Thought",
                caption: "He stood still, not just to see — but to feel. In the vastness of green and gold, some answers are found without a single word spoken."
            }, 
            {
                url: "https://i.ibb.co/nsYypL4s/IMG-0863.jpg",
                title: "Feathered Pause",
                caption: "Cradled by leaves and hidden from the world, it rests — feathers soft, heart quiet. In a world that never stops, the bird reminds us how to."
            },  
            {
                url: "https://i.ibb.co/C5MP4t63/IMG-0862.jpg",
                title: "The Watchtower",
                caption: "Amid the hum of monsoon winds and ripening fields, the little cormorant stands guard — still, silent, soaked in solitude. Nature’s own lighthouse, waiting between flights."
            },  
            {
                url: "https://i.ibb.co/X6qThPX/IMG-0861.jpg",
                title: "Rainwatcher",
                caption: "Perched on a rain-drenched branch, the myna watches the world drip in rhythm. Not a song sung — just presence felt. A quiet ode to monsoon stillness."
            },
            {
                url: "https://i.ibb.co/4gpYy2Hg/IMG-0860.jpg",
                title: "Monsoon Miles",
                caption: "Through muddy roads and quiet rain, he pedals — not to escape the storm, but to live within it. A journey soaked in stories, carried on two wheels and decades of resilience."
            },
            {
                url: "https://i.ibb.co/KzcsWRdJ/IMG-0859.jpg",
                title: "Cows in the Rain",
                caption: "As the rain pours, the street becomes a pasture. Calm, soaked, and unbothered—nature keeps moving."
            },
            {
                url: "https://i.ibb.co/tTJS5q7Z/IMG-0855.jpg",
                title: "Monsoons effect on nature",
                caption: "It rains so well."
            },
            {
                url: "https://i.ibb.co/Z31y4pK/IMG-0857.jpg",
                title: "Monsoons effect on nature",
                caption: "Raindrops kiss the leaves, breathing life into every vein. The monsoon doesn’t just fall—it heals."
            },
            {
                url: "https://i.ibb.co/h1Whb6tt/IMG-0840.jpg",
                title: "My Life is a Christopher Nolan movie",
                caption: "Caught between timelines, thoughts spinning like reels—my life moves in reverse, forward, and somewhere in between. Just like a Nolan film."
            },
            {
                url: "https://i.ibb.co/twxbGDqW/IMG-0838.jpg",
                title: "My life with Diet Coke",
                caption: "A quiet night, some food, a can of Diet Coke, and the glow of the screen. Just another day chasing dreams."
            },
            {
                url: "https://i.ibb.co/1Jv4LwFJ/IMG-0826.jpg",
                title: "The Backbone of the Harvest",
                caption: "Bent over fields under the open sky, these women carry generations of strength in their hands. Their labor, often unseen, is what turns seeds into sustenance."
            },
            {
                url: "https://i.ibb.co/Xfzdp214/IMG-0827.jpg",
                title: "Laughter in Its Purest Form",
                caption: "A burst of joy with no reason, no restraint — just the kind of laughter that reminds the world what happiness truly looks like."
            },
            {
                url: "https://i.ibb.co/DPD6jPyx/IMG-0825.jpg",
                title: "Where the Earth Breathes Wide",
                caption: "A stretch of green that meets the horizon — endless, open, and alive. The wide-angle whispers of the land remind us how small we are, yet how connected."
            },
            {
                url: "https://i.ibb.co/1tK27HML/IMG-0823.jpg",
                title: "Fields of Her Strength",
                caption: "With hands deep in the earth and sun on their backs, these women shape the harvest with grace and grit. Every grain owes its life to their tireless rhythm."
            },
            {
                url: "https://i.ibb.co/H0F1k58/IMG-0822.jpg",
                title: "Time Rests with Him",
                caption: "In the vast stillness of the field, he sits — not just to rest, but to remember. A lifetime spent with the land, now watching it breathe, season after season."
            },
            {
                url: "https://i.ibb.co/nqsycyKq/IMG-0817.jpg",
                title: "Wings over the feilds",
                caption: "In the middle of the golden green, where crops sway and silence hums, the birds gather — gentle, free, and part of the rhythm of the land."
            },
            {
                url: "https://i.ibb.co/xPp42Gk/IMG-0816.jpg",
                title: "Wings over the feilds",
                caption: "In the middle of the golden green, where crops sway and silence hums, the birds gather — gentle, free, and part of the rhythm of the land."
            },
            {
                url: "https://i.ibb.co/5h14dKTg/IMG-0811.jpg",
                title: "The Backbone of the Harvest",
                caption: "Bent over fields under the open sky, these women carry generations of strength in their hands. Their labor, often unseen, is what turns seeds into sustenance."
            },
            {
                url: "https://i.ibb.co/JW5d93Sh/IMG-0810.jpg",
                title: "The Backbone of the Harvest",
                caption: "Bent over fields under the open sky, these women carry generations of strength in their hands. Their labor, often unseen, is what turns seeds into sustenance."
            },
            {
                url: "https://i.ibb.co/ZpFLr8GN/IMG-0798.jpg",
                title: "Grace in Descent",
                caption: "Wings slow, wind shifts — and nature pauses as the bird returns home. A quiet landing written in instinct and light."
            },
            {
                url: "https://i.ibb.co/8gL6ZCzV/IMG-0800.jpg",
                title: "Idle Wheels, Scrolling Minds",
                caption: "Parked between journeys, the rickshaw rests — while the driver drifts through a different world, one swipe at a time. Where tradition meets technology on dusty roads."
            },
            {
                url: "https://i.ibb.co/GQhK54MG/IMG-0796.jpg",
                title: "Hands That Grow the Earth",
                caption: "Amidst the stillness of green fields, one figure bends with purpose — sowing life, one grain at a time. A quiet tribute to those who feed us from the roots."
            },
            {
                url: "https://i.ibb.co/60gs0kzV/IMG-0793.jpg",
                title: "Evening Strolls and Silent Bonds",
                caption: "In the heart of the countryside, where words aren’t needed — just footsteps, fresh air, and a loyal friend by your side."
            },
            {
                url: "https://i.ibb.co/svKt2qXJ/IMG-0815.jpg",
                title: "Golden Paddy Fields",
                caption: "Early morning light casting a warm glow over ripe paddy fields in the countryside"
            },

            {
                url: "https://i.ibb.co/ZR53jcWr/IMG-0794.jpg",
                title: "A Pause in the Green",
                caption: "Amidst endless shades of green, a lone bird finds its moment — still, alert, and free. Nature’s smallest visitor, resting where life grows quietly."
            },
            // Add more photos as needed
            {
                url: "https://i.ibb.co/ymkTmPvk/IMG-0813.jpg",
                title: "Hands That Grow the Earth",
                caption: "Majestic mountain range at sunset"
            }
        ];
        this.currentFeaturedIndex = 0;
        this.init();
    }

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.updateFeaturedPhoto();
        this.renderGallery();
    }

    cacheDOM() {
        this.fullscreenClose = document.getElementById('fullscreenClose');
        this.fullscreenOverlay = document.getElementById('fullscreenOverlay');
        this.featuredImage = document.getElementById('featuredImage');
        this.galleryGrid = document.getElementById('galleryGrid');
    }

    bindEvents() {
        if (this.fullscreenClose) {
            this.fullscreenClose.addEventListener('click', () => this.closeFullscreen());
        }

        if (this.fullscreenOverlay) {
            this.fullscreenOverlay.addEventListener('click', (e) => {
                if (e.target === this.fullscreenOverlay) {
                    this.closeFullscreen();
                }
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeFullscreen();
            }
        });

        if (this.featuredImage) {
            this.featuredImage.addEventListener('click', () => {
                if (this.photos.length > 0) {
                    this.openFullscreen(this.photos[this.currentFeaturedIndex]);
                }
            });
        }
    }

    updateFeaturedPhoto() {
        if (this.photos.length === 0) return;

        const featuredPhoto = this.photos[this.currentFeaturedIndex];
        const featuredTitle = document.getElementById('featuredTitle');
        const featuredCaption = document.getElementById('featuredCaption');

        this.featuredImage.classList.add('loading');
        this.featuredImage.src = featuredPhoto.url;
        featuredTitle.textContent = featuredPhoto.title;
        featuredCaption.textContent = featuredPhoto.caption;

        this.featuredImage.onload = () => {
            this.featuredImage.classList.remove('loading');
        };
    }

    renderGallery() {
        if (!this.galleryGrid) return;
        
        if (this.photos.length === 0) {
            this.galleryGrid.innerHTML = `
                <div class="empty-state">
                    <h3>NO PHOTOS YET</h3>
                    <p>Add photos to the photos array in script.js to build your collection</p>
                </div>
            `;
            return;
        }

        this.galleryGrid.innerHTML = '';
        
        this.photos.forEach((photo, index) => {
            const galleryItem = this.createGalleryItem(photo, index);
            this.galleryGrid.appendChild(galleryItem);
        });
    }

    createGalleryItem(photo, index) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.animationDelay = `${index * 0.1}s`;
        
        item.innerHTML = `
            <img src="${photo.url}" alt="${photo.title}" loading="lazy">
            <div class="gallery-item-info">
                <h4 class="gallery-item-title">${photo.title}</h4>
                <p class="gallery-item-caption">${photo.caption}</p>
            </div>
        `;

        item.addEventListener('click', () => this.openFullscreen(photo));
        
        return item;
    }

    openFullscreen(photo) {
        const modal = document.getElementById('fullscreenModal');
        const image = document.getElementById('fullscreenImage');
        const title = document.getElementById('fullscreenTitle');
        const caption = document.getElementById('fullscreenCaption');

        if (modal && image && title && caption) {
            image.src = photo.url;
            image.alt = photo.title;
            title.textContent = photo.title;
            caption.textContent = photo.caption;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    closeFullscreen() {
        const modal = document.getElementById('fullscreenModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

// Smooth Scrolling and Header Effects
class UIEffects {
    constructor() {
        this.header = document.querySelector('.header');
        this.lastScrollY = 0;
        this.init();
    }

    init() {
        this.bindScrollEvents();
        this.addImageLoadEffects();
    }

    bindScrollEvents() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    handleScroll() {
        const currentScrollY = window.scrollY;
        
        if (this.header) {
            const opacity = Math.min(currentScrollY / 100, 0.95);
            this.header.style.background = `rgba(0, 0, 0, ${opacity})`;
        }
        
        this.lastScrollY = currentScrollY;
    }

    addImageLoadEffects() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        const observeGalleryItems = () => {
            document.querySelectorAll('.gallery-item').forEach(item => {
                observer.observe(item);
            });
        };

        setTimeout(observeGalleryItems, 100);
        
        // Patch renderGallery to observe new items
        const originalRenderGallery = PhotoLibrary.prototype.renderGallery;
        PhotoLibrary.prototype.renderGallery = function() {
            originalRenderGallery.call(this);
            setTimeout(observeGalleryItems, 100);
        };
    }
}

// Keyboard Shortcuts
class KeyboardShortcuts {
    constructor(photoLibrary) {
        this.photoLibrary = photoLibrary;
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

            switch (e.key.toLowerCase()) {
                case 'f':
                    if (this.photoLibrary.photos.length > 0) {
                        e.preventDefault();
                        this.photoLibrary.openFullscreen(
                            this.photoLibrary.photos[this.photoLibrary.currentFeaturedIndex]
                        );
                    }
                    break;
            }
        });
    }
}

// Image Preloader
class ImagePreloader {
    constructor() {
        this.cache = new Map();
    }

    preload(urls) {
        urls.forEach(url => {
            if (!this.cache.has(url)) {
                const img = new Image();
                img.src = url;
                this.cache.set(url, img);
            }
        });
    }

    preloadNext(photos, currentIndex) {
        const nextIndexes = [
            currentIndex + 1, 
            currentIndex - 1
        ].filter(i => i >= 0 && i < photos.length);
        
        const urls = nextIndexes.map(i => photos[i].url);
        this.preload(urls);
    }
}

// Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        this.observeImageLoading();
    }

    observeImageLoading() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.complete) {
                const startTime = performance.now();
                img.addEventListener('load', () => {
                    const loadTime = performance.now() - startTime;
                    if (loadTime > 2000) {
                        console.warn(`Slow image load: ${img.src} took ${loadTime.toFixed(2)}ms`);
                    }
                });
            }
        });
    }
}

// Touch Gestures for Mobile
class TouchGestures {
    constructor(photoLibrary) {
        this.photoLibrary = photoLibrary;
        this.startX = 0;
        this.startY = 0;
        this.init();
    }

    init() {
        this.bindTouchEvents();
    }

    bindTouchEvents() {
        const fullscreenModal = document.getElementById('fullscreenModal');
        if (!fullscreenModal) return;
        
        fullscreenModal.addEventListener('touchstart', (e) => {
            this.startX = e.touches[0].clientX;
            this.startY = e.touches[0].clientY;
        });

        fullscreenModal.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            
            const deltaX = endX - this.startX;
            const deltaY = endY - this.startY;
            
            if (deltaY > 100 && Math.abs(deltaX) < 100) {
                this.photoLibrary.closeFullscreen();
            }
        });
    }
}

// Application Initialization
document.addEventListener('DOMContentLoaded', () => {
    const photoLibrary = new PhotoLibrary();
    const uiEffects = new UIEffects();
    const keyboardShortcuts = new KeyboardShortcuts(photoLibrary);
    const imagePreloader = new ImagePreloader();
    const performanceMonitor = new PerformanceMonitor();
    const touchGestures = new TouchGestures(photoLibrary);

    setTimeout(() => {
        if (photoLibrary.photos.length > 0) {
            const urls = photoLibrary.photos.map(photo => photo.url);
            imagePreloader.preload(urls);
        }
    }, 1000);

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Error Handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('SW registered:', registration);
            })
            .catch(error => {
                console.log('SW registration failed:', error);
            });
    });
}
