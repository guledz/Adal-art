(function() {
    // ============ ARTWORK DATA WITH IMAGES ============
    const artworks = [{
        id: '001',
        number: '001',
        title: 'Walled Streets',
        collection: 'jugol',
        collectionName: 'Jugol',
        tagline: 'HARAR / JUGOL',
        description: 'A study of the narrow stone corridors within the ancient walls, where shadow and light create a rhythm older than memory.',
        medium: 'Digital Illustration',
        location: 'Jugol, Harar, Ethiopia',
        img: 'images/001.webp',
        story: {
            art: 'Layered digital brushwork builds the texture of Harar\'s stone walls — rough, warm, and lived-in. The palette draws from the city\'s earthen tones.',
            place: 'The alleys of Jugol are among the most photographed yet least understood spaces in Ethiopia. They are not simply passageways but arteries of a living city.',
            story: 'For centuries, these streets have hosted traders, pilgrims, and residents. The walls themselves hold the memory of countless footsteps and conversations.',
            interpretation: 'ADAL abstracts the street into a composition of warm shadow and geometric structure, letting the viewer feel the enclosure without showing a single face.'
        }
    }, {
        id: '002',
        number: '002',
        title: 'Alley of Shadows',
        collection: 'jugol',
        collectionName: 'Jugol',
        tagline: 'HARAR / JUGOL',
        description: 'A meditation on the deep contrasts of Jugol\'s narrow passageways, where sunlight becomes a rare and precious visitor.',
        medium: 'Digital Illustration',
        location: 'Jugol, Harar, Ethiopia',
        img: 'images/002.webp',
        story: {
            art: 'The artwork works in near-monochrome, pushing darkness as a positive form rather than an absence. Subtle warm undertones suggest life beyond the shadow.',
            place: 'Some alleys in Jugol are so narrow that two donkeys cannot pass. The shadows they cast create an ever-shifting geometry.',
            story: 'The shadow is not empty — it shelters, conceals, and reveals. In Harari architecture, the play of light and dark is a deliberate aesthetic choice.',
            interpretation: 'ADAL treats the alley as a threshold between the seen and the hidden. The viewer stands in the dark, looking toward warmth.'
        }
    }, {
        id: '003',
        number: '003',
        title: 'Stone & Memory',
        collection: 'jugol',
        collectionName: 'Jugol',
        tagline: 'HARAR / JUGOL',
        description: 'An exploration of the material substance of Harar\'s walls — the stone that has absorbed centuries of history.',
        medium: 'Digital Illustration',
        location: 'Jugol, Harar, Ethiopia',
        img: 'images/003.webp',
        story: {
            art: 'The composition focuses on texture over form. Layers of digital grain and crack suggest the weight of time without showing a single architectural feature.',
            place: 'The walls of Jugol are built from local stone and lime, some sections dating back to the 16th century.',
            story: 'The wall is both protection and identity. It defined Harar as a city-state, a spiritual center, and a trading hub for centuries.',
            interpretation: 'ADAL sees the wall not as a barrier but as a surface of memory — each crack a story, each stone a witness.'
        }
    }, {
        id: '017',
        number: '017',
        title: 'Blue Door',
        collection: 'architecture',
        collectionName: 'Architecture',
        tagline: 'HARAR / ARCHITECTURE',
        description: 'A study of Harar\'s distinctive architectural language, where saturated blue meets the quiet geometry of traditional walls.',
        medium: 'Digital Illustration',
        location: 'Harar, Ethiopia',
        img: 'images/017.webp',
        story: {
            art: 'The artist isolates a single door against its surrounding wall, letting the blue dominate the frame. The geometry is precise, almost abstract.',
            place: 'Harari houses feature doors painted in varying shades of blue — from deep indigo to bright cobalt — each family choosing its own hue.',
            story: 'The blue door is more than decoration. In Harari tradition, the color blue is associated with protection, spiritual depth, and the city\'s distinctive identity. The tradition may have roots in the indigo trade that once flourished along these trade routes.',
            interpretation: 'ADAL transforms the door from a functional object into a composition of color and form. The door becomes a portal, not just to a house, but to an entire visual culture.'
        }
    }, {
        id: '018',
        number: '018',
        title: 'Minaret Geometry',
        collection: 'architecture',
        collectionName: 'Architecture',
        tagline: 'HARAR / ARCHITECTURE',
        description: 'An abstract study of the vertical lines and geometric precision found in Harar\'s religious architecture.',
        medium: 'Digital Illustration',
        location: 'Harar, Ethiopia',
        img: 'images/018.webp',
        story: {
            art: 'Repeating diagonal lines and layered planes create a sense of upward motion. The blue palette echoes the city\'s signature color.',
            place: 'Harar is home to over 80 mosques, many with distinctive minarets. These structures are both places of worship and architectural landmarks.',
            story: 'The minaret is a physical expression of faith — a vertical gesture toward the sky. In Harar, this verticality is echoed in the city\'s dense, layered architecture.',
            interpretation: 'ADAL abstracts the minaret into pure geometry. The viewer is invited to contemplate structure itself as a form of visual prayer.'
        }
    }, {
        id: '019',
        number: '019',
        title: 'Arched Windows',
        collection: 'architecture',
        collectionName: 'Architecture',
        tagline: 'HARAR / ARCHITECTURE',
        description: 'A study of the arched window as a motif in Harari architecture — where form follows both function and symbol.',
        medium: 'Digital Illustration',
        location: 'Harar, Ethiopia',
        img: 'images/019.webp',
        story: {
            art: 'The composition layers horizontal bands with subtle interruptions, suggesting the rhythm of windows along a Harari street facade.',
            place: 'Harari houses feature distinctive arched windows, often decorated with geometric patterns. These windows serve both ventilation and aesthetic purposes.',
            story: 'The arch is one of the oldest architectural forms, appearing across cultures. In Harar, it carries both Islamic and African vernacular influences.',
            interpretation: 'ADAL treats the arch as a repeated gesture — a visual refrain that gives the city its distinctive architectural character.'
        }
    }, {
        id: '020',
        number: '020',
        title: 'Doorway to Jugol',
        collection: 'gates',
        collectionName: 'Gates',
        tagline: 'HARAR / GATES',
        description: 'A study of a single archway as a passage between two worlds — the busy outer city and the sacred interior.',
        medium: 'Digital Illustration',
        location: 'Harar, Ethiopia',
        img: 'images/020.webp',
        story: {
            art: 'The arch fills the composition, with warm light spilling from within. The contrast between the dark frame and the glowing interior creates dramatic tension.',
            place: 'Jugol has five historic gates, each with its own name and history. They are not merely entrances but markers of identity and protection.',
            story: 'Historically, these gates were closed at night, defining the boundary between the sacred city and the outside world. Passing through was a meaningful act.',
            interpretation: 'ADAL sees the gate as a symbol of transition — between past and present, sacred and secular, inside and outside.'
        }
    }, {
        id: '021',
        number: '021',
        title: 'Gate of Peace',
        collection: 'gates',
        collectionName: 'Gates',
        tagline: 'HARAR / GATES',
        description: 'An atmospheric study of one of Harar\'s historic gateways, rendered in warm earth tones with a sense of ancient quiet.',
        medium: 'Digital Illustration',
        location: 'Harar, Ethiopia',
        img: 'images/021.webp',
        story: {
            art: 'The composition uses a central circular form suggesting both the arch of a gate and the sun. Warm browns and golds create a feeling of aged stone.',
            place: 'The gates of Harar are named and significant. Bab el Salam (Gate of Peace) is one of the most important, associated with hospitality and welcome.',
            story: 'The gate is a symbol of Harar\'s role as a city of refuge and learning. Merchants, scholars, and pilgrims have passed through these gates for centuries.',
            interpretation: 'ADAL frames the gate as a portal to contemplation — a threshold that invites the viewer to cross into another time.'
        }
    }, {
        id: '022',
        number: '022',
        title: 'Market Day',
        collection: 'culture',
        collectionName: 'Culture',
        tagline: 'HARAR / CULTURE',
        description: 'A vibrant abstract composition inspired by the energy, color, and texture of Harar\'s bustling markets.',
        medium: 'Digital Illustration',
        location: 'Harar, Ethiopia',
        img: 'images/022.webp',
        story: {
            art: 'Repeating bands of warm color suggest textiles, spices, and woven baskets. The composition hums with the rhythm of commerce and exchange.',
            place: 'Harar\'s markets are sensory explosions — the colors of spices, the textures of handmade goods, the sounds of bargaining and greeting.',
            story: 'The market is the beating heart of Harari social life. It is where news is exchanged, relationships are formed, and culture is transmitted.',
            interpretation: 'ADAL translates the market into a visual rhythm — not a snapshot, but a feeling. The viewer experiences the energy of exchange without seeing a single face.'
        }
    }, {
        id: '023',
        number: '023',
        title: 'Harari Dress',
        collection: 'culture',
        collectionName: 'Culture',
        tagline: 'HARAR / CULTURE',
        description: 'A study of traditional Harari textile patterns and the role of dress in expressing cultural identity.',
        medium: 'Digital Illustration',
        location: 'Harar, Ethiopia',
        img: 'images/023.webp',
        story: {
            art: 'The artwork layers horizontal bands in warm golden and earth tones, suggesting the folded fabrics and woven textures of traditional Harari clothing.',
            place: 'Harari dress is distinctive — often featuring bold colors and geometric patterns that identify the wearer\'s community and status.',
            story: 'Clothing in Harar is not just functional. It is a language of identity, tradition, and belonging. Specific patterns and colors carry meaning.',
            interpretation: 'ADAL honors the textile tradition through abstraction — capturing the visual spirit of Harari dress without reproducing specific patterns.'
        }
    }, {
        id: '024',
        number: '024',
        title: 'Indigo Study I',
        collection: 'harar-blue',
        collectionName: 'Harar Blue',
        tagline: 'HARAR / HARAR BLUE',
        description: 'The first in a dedicated visual exploration of Harar\'s blue identity — pure, saturated, and transcendent.',
        medium: 'Digital Illustration',
        location: 'Harar, Ethiopia',
        img: 'images/024.webp',
        story: {
            art: 'The composition is almost entirely blue — a deep, layered indigo that shifts from nearly black to bright cobalt. A single radial form suggests depth and focus.',
            place: 'The blue of Harar appears on walls, doors, textiles, and even the city\'s identity itself. It is not a single shade but a family of blues.',
            story: 'The blue tradition in Harar may be linked to indigo dyeing, which was a significant trade good in the region. The color has become synonymous with the city\'s identity.',
            interpretation: 'ADAL dedicates an entire collection to this blue. It is not just a color but a cultural signifier — a way of seeing the city.'
        }
    }, {
        id: '025',
        number: '025',
        title: 'Blue Walls',
        collection: 'harar-blue',
        collectionName: 'Harar Blue',
        tagline: 'HARAR / HARAR BLUE',
        description: 'A study of the blue-painted walls of Harar — where architecture and color merge into a single visual statement.',
        medium: 'Digital Illustration',
        location: 'Harar, Ethiopia',
        img: 'images/025.webp',
        story: {
            art: 'Horizontal blue bands create a sense of architectural rhythm. The varying tones suggest different walls, different houses, different lives.',
            place: 'Many Harari houses feature blue-painted walls, often with geometric patterns. The blue is applied by hand, creating subtle variations in tone.',
            story: 'The blue wall is both decorative and symbolic. It marks the house as part of the Harari community, yet each wall is slightly different.',
            interpretation: 'ADAL sees the blue wall as a canvas — a place where the individual and the communal meet in pigment and stone.'
        }
    }, {
        id: '026',
        number: '026',
        title: 'Cobalt Street',
        collection: 'harar-blue',
        collectionName: 'Harar Blue',
        tagline: 'HARAR / HARAR BLUE',
        description: 'A panoramic abstraction of a Harar street painted in layers of cobalt, indigo, and deep azure.',
        medium: 'Digital Illustration',
        location: 'Harar, Ethiopia',
        img: 'images/026.webp',
        story: {
            art: 'The composition uses a radial gradient to suggest a street receding into depth, with blue tones creating both perspective and atmosphere.',
            place: 'Some streets in Harar seem almost entirely blue — walls, doors, and shadows all merging into a single chromatic experience.',
            story: 'Walking through these blue streets is a sensory experience that defies photography. The color seems to exist in the air itself.',
            interpretation: 'ADAL attempts to capture what a photograph cannot — the feeling of being surrounded by a single color that carries centuries of meaning.'
        }
    }, {
        id: '027',
        number: '027',
        title: 'Coffee Ceremony',
        collection: 'icons',
        collectionName: 'Icons',
        tagline: 'HARAR / ICONS',
        description: 'A warm, circular composition inspired by the Harari coffee ceremony — where tradition becomes a daily ritual of connection.',
        medium: 'Digital Illustration',
        location: 'Harar, Ethiopia',
        img: 'images/027.webp',
        story: {
            art: 'Concentric circles and warm earth tones suggest the coffee pot, the cups, and the gathering of people around the ceremony.',
            place: 'The coffee ceremony is central to Harari and Ethiopian culture. It is a ritual of hospitality, conversation, and community.',
            story: 'Coffee originated in Ethiopia, and Harar is one of the most historically significant coffee regions. The ceremony transforms a simple beverage into a social institution.',
            interpretation: 'ADAL uses the circle as a symbol of gathering — the coffee ceremony as a point of connection between individuals, community, and tradition.'
        }
    }, {
        id: '028',
        number: '028',
        title: 'Basket Weave',
        collection: 'icons',
        collectionName: 'Icons',
        tagline: 'HARAR / ICONS',
        description: 'A geometric study of the woven baskets and textiles that are among Harar\'s most recognizable traditional crafts.',
        medium: 'Digital Illustration',
        location: 'Harar, Ethiopia',
        img: 'images/028.webp',
        story: {
            art: 'A repeating diagonal pattern creates a woven texture, with warm earth tones suggesting natural fibers and handcrafted precision.',
            place: 'Harari basketry is renowned for its intricate patterns and durability. The baskets serve both practical and decorative purposes.',
            story: 'Weaving is a skill passed down through generations. Each basket carries the knowledge of its maker and the aesthetics of the community.',
            interpretation: 'ADAL treats the weave as a visual language — a pattern that speaks of patience, skill, and cultural continuity.'
        }
    }];

    // ============ DOM REFERENCES ============
    const entryOverlay = document.getElementById('entry-overlay');
    const entryBtn = document.getElementById('entry-btn');
    const mainNav = document.getElementById('main-nav');
    const navBurger = document.getElementById('nav-burger');
    const mobileMenu = document.getElementById('mobile-menu');
    const artworksGrid = document.getElementById('artworks-grid');
    const artworkOverlay = document.getElementById('artwork-overlay');
    const artworkDetail = document.getElementById('artwork-detail');
    const overlayClose = document.getElementById('overlay-close');
    const galleryFilters = document.querySelectorAll('.filter-btn');
    const collectionCards = document.querySelectorAll('.collection-card');
    const navLinks = document.querySelectorAll('[data-nav]');

    let currentFilter = 'all';
    let scrollPosition = 0;

    // ============ ENTRY OVERLAY ============
    function dismissEntry() {
        entryOverlay.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => {
                if (isInViewport(el)) el.classList.add('visible');
            });
        }, 100);
    }

    entryBtn.addEventListener('click', dismissEntry);
    entryOverlay.addEventListener('click', (e) => {
        if (e.target === entryOverlay) dismissEntry();
    });

    if (sessionStorage.getItem('adal-entered') === 'true') {
        entryOverlay.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    } else {
        document.body.classList.add('no-scroll');
        sessionStorage.setItem('adal-entered', 'true');
    }

    // ============ NAVIGATION ============
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
            closeMobileMenu();
        });
    });

    // ============ MOBILE MENU ============
    navBurger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('open');
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    function openMobileMenu() {
        mobileMenu.classList.add('open');
        navBurger.classList.add('active');
        navBurger.setAttribute('aria-expanded', 'true');
        document.body.classList.add('no-scroll');
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('open');
        navBurger.classList.remove('active');
        navBurger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
    }

    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) closeMobileMenu();
    });

    // ============ SCROLL REVEAL ============
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    }

    function checkReveals() {
        document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
            if (isInViewport(el)) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkReveals, { passive: true });
    window.addEventListener('resize', checkReveals, { passive: true });
    setTimeout(checkReveals, 500);

    // ============ RENDER ARTWORKS ============
    function renderArtworks(filter) {
        const filtered = filter === 'all' ? artworks : artworks.filter(a => a.collection === filter);
        let html = '';
        filtered.forEach(art => {
            html += `
            <div class="artwork-card" data-artwork-id="${art.id}" role="button" tabindex="0" aria-label="View artwork: ${art.title}">
                <div class="artwork-card-visual">
                    <img src="${art.img}" alt="${art.title}" loading="lazy">
                    <div class="artwork-card-overlay">
                        <span>View Artwork →</span>
                    </div>
                </div>
                <div class="artwork-card-info">
                    <span class="artwork-card-number">${art.number}</span>
                    <h4 class="artwork-card-title">${art.title}</h4>
                    <span class="artwork-card-collection">${art.collectionName}</span>
                </div>
            </div>
        `;
        });
        artworksGrid.innerHTML = html;

        document.querySelectorAll('.artwork-card').forEach(card => {
            card.addEventListener('click', () => openArtwork(card.dataset.artworkId));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openArtwork(card.dataset.artworkId);
                }
            });
        });
    }

    // ============ FILTER HANDLING ============
    galleryFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            galleryFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderArtworks(currentFilter);
        });
    });

    collectionCards.forEach(card => {
        card.addEventListener('click', () => {
            const filter = card.dataset.filter;
            galleryFilters.forEach(b => {
                b.classList.remove('active');
                if (b.dataset.filter === filter) b.classList.add('active');
            });
            currentFilter = filter;
            renderArtworks(filter);
            const gallerySection = document.querySelector('.gallery-section');
            if (gallerySection) {
                gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ============ ARTWORK OVERLAY ============
    function openArtwork(id) {
        const art = artworks.find(a => a.id === id);
        if (!art) return;

        scrollPosition = window.scrollY;
        document.body.classList.add('no-scroll');

        const storyHTML = `
            <div class="story-section">
                <span class="section-label">EXPLORE THE STORY</span>
                <h3 style="font-family:var(--font-display); font-size:2rem; font-weight:600; color:var(--text-primary); margin:1rem 0 0.5rem;">${art.title}</h3>
                <div class="story-grid">
                    <div class="story-block">
                        <span class="story-block-label">THE ART</span>
                        <h4>What the artist created</h4>
                        <p>${art.story.art}</p>
                    </div>
                    <div class="story-block">
                        <span class="story-block-label">THE PLACE</span>
                        <h4>Where the inspiration comes from</h4>
                        <p>${art.story.place}</p>
                    </div>
                    <div class="story-block">
                        <span class="story-block-label">THE STORY</span>
                        <h4>Why this matters</h4>
                        <p>${art.story.story}</p>
                    </div>
                    <div class="story-block">
                        <span class="story-block-label">THE INTERPRETATION</span>
                        <h4>How ADAL transforms the subject</h4>
                        <p>${art.story.interpretation}</p>
                    </div>
                </div>
            </div>
        `;

        artworkDetail.innerHTML = `
            <div class="artwork-detail-visual">
                <img src="${art.img}" alt="${art.title}">
            </div>
            <div class="artwork-detail-meta">
                <div class="artwork-detail-meta-item">
                    <span class="artwork-detail-meta-label">Medium</span>
                    <span class="artwork-detail-meta-value">${art.medium}</span>
                </div>
                <div class="artwork-detail-meta-item">
                    <span class="artwork-detail-meta-label">Location</span>
                    <span class="artwork-detail-meta-value">${art.location}</span>
                </div>
                <div class="artwork-detail-meta-item">
                    <span class="artwork-detail-meta-label">Collection</span>
                    <span class="artwork-detail-meta-value">${art.collectionName}</span>
                </div>
            </div>
            <div class="artwork-detail-number">${art.number}</div>
            <h2 class="artwork-detail-title">${art.title}</h2>
            <p class="artwork-detail-tagline">${art.tagline}</p>
            <p class="artwork-detail-desc">${art.description}</p>
            <button class="story-cta-btn" id="story-cta-btn" aria-label="Explore the story">Explore the Story&nbsp;&nbsp;↓</button>
            ${storyHTML}
        `;

        artworkOverlay.classList.add('open');
        artworkOverlay.scrollTop = 0;

        const storyCta = document.getElementById('story-cta-btn');
        if (storyCta) {
            storyCta.addEventListener('click', () => {
                const storySection = artworkDetail.querySelector('.story-section');
                if (storySection) {
                    storySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }
    }

    function closeArtwork() {
        artworkOverlay.classList.remove('open');
        document.body.classList.remove('no-scroll');
        window.scrollTo({ top: scrollPosition, behavior: 'instant' });
    }

    overlayClose.addEventListener('click', closeArtwork);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (artworkOverlay.classList.contains('open')) {
                closeArtwork();
            }
            if (mobileMenu.classList.contains('open')) {
                closeMobileMenu();
            }
            if (!entryOverlay.classList.contains('hidden')) {
                dismissEntry();
            }
        }
    });

    // ============ INITIAL RENDER ============
    renderArtworks('all');
    checkReveals();

    if (sessionStorage.getItem('adal-entered') === 'true') {
        document.body.classList.remove('no-scroll');
        entryOverlay.classList.add('hidden');
        setTimeout(checkReveals, 300);
    } else {
        document.body.classList.add('no-scroll');
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('open')) {
            closeMobileMenu();
        }
    });

    console.log('ADAL — Harar Digital Art Gallery');
    console.log('A contemporary interpretation of Harar\'s visual heritage.');
    console.log('Artworks in collection:', artworks.length);
})();