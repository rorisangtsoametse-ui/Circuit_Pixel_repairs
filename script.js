

// Navigation redirects with smooth transitions
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            // Internal page anchor
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else if (href.endsWith('.html')) {
            // Page redirect with loading effect
            e.preventDefault();
            // Add loading class to body
            document.body.classList.add('page-loading');
            // Redirect after short delay for visual effect
            setTimeout(() => {
                window.location.href = href;
            }, 200);
        }
        // External links (WhatsApp, Facebook, etc.) work normally
    });
});

// Mobile menu toggle functionality
const mobileMenuToggle = document.getElementById('mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
}

// Add hover animations to service cards
document.querySelectorAll('.service-card, .gallery-item').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Pulsing animation for WhatsApp buttons
document.querySelectorAll('.whatsapp-btn').forEach(btn => {
    setInterval(() => {
        btn.style.boxShadow = '0 0 20px rgba(37, 211, 102, 0.8)';
        setTimeout(() => {
            btn.style.boxShadow = '';
        }, 1000);
    }, 3000);
});

// Load images from work folder
function loadWorkGallery() {
    const galleryGrid = document.getElementById('work-gallery');
    if (!galleryGrid) return;

    // Load actual images from work folder
    const workImages = [
        'work/1.jpeg',
        'work/2.jpeg',
        'work/3.jpeg',
        'work/4.jpeg',
        'work/5.jpeg'
    ];

    workImages.forEach((src, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${src}" alt="Repair Work ${index + 1}" loading="lazy">
            <p>Our repair work - <a href="https://wa.me/26669473506" class="btn whatsapp-btn">Need Similar Service?</a></p>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

loadWorkGallery();

// Floating WhatsApp button animation
const whatsappFloat = document.getElementById('whatsapp-float');
if (whatsappFloat) {
    setInterval(() => {
        whatsappFloat.style.transform = 'scale(1.1)';
        setTimeout(() => {
            whatsappFloat.style.transform = 'scale(1)';
        }, 500);
    }, 3000);
}

// Circuit pattern animation (subtle)
function createCircuitPattern() {
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 1;

    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    // Draw some random circuit lines
    for (let i = 0; i < 20; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = Math.random() * canvas.width;
        const y2 = Math.random() * canvas.height;
        drawLine(x1, y1, x2, y2);
    }
}

createCircuitPattern();
