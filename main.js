// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const searchBtn = document.getElementById('search-btn');
const searchOverlay = document.getElementById('search-overlay');
const searchClose = document.getElementById('search-close');
const searchInput = document.getElementById('search-input');
const backToTop = document.getElementById('back-to-top');
const progressBar = document.getElementById('progress-bar');
const newsletterForm = document.getElementById('newsletter-form');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Search Overlay
searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    searchInput.focus();
});

searchClose.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
});

// Close search overlay with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
    }
});

// Close search overlay when clicking outside
searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
    }
});
let lastScrollY = window.scrollY;
let ticking = false;

function updateNavbar() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    
    lastScrollY = currentScrollY;
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
}

window.addEventListener('scroll', updateProgressBar);

function updateBackToTop() {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

window.addEventListener('scroll', updateBackToTop);

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000);

const filterBtns = document.querySelectorAll('.filter-btn');
const recipeCards = document.querySelectorAll('.recipe-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        recipeCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.classList.add('visible');
                }, 100);
            } else {
                card.classList.remove('visible');
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

document.querySelectorAll('.favorite-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const icon = btn.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            btn.style.color = '#ff6b6b';

            showNotification('Added to favorites!', 'success');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            btn.style.color = '';
            
            showNotification('Removed from favorites!', 'info');
        }
    });
});

document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.recipe-card');
        const title = card.querySelector('.card-title').textContent;
        
        if (navigator.share) {
            navigator.share({
                title: title,
                text: `Check out this amazing recipe: ${title}`,
                url: window.location.href
            });
        } else {
            const url = window.location.href;
            navigator.clipboard.writeText(`Check out this amazing recipe: ${title} - ${url}`)
                .then(() => {
                    showNotification('Recipe link copied to clipboard!', 'success');
                })
                .catch(() => {
                    showNotification('Failed to copy link', 'error');
                });
        }
    });
});

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('.newsletter-input').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email)) {
        showNotification('Thank you for subscribing!', 'success');
        newsletterForm.querySelector('.newsletter-input').value = '';
    } else {
        showNotification('Please enter a valid email address', 'error');
    }
});

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeOut);
        
        if (target === 4.9) {
            element.textContent = (start + (target - start) * easeOut).toFixed(1);
        } else {
            element.textContent = current.toLocaleString();
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
  
            if (entry.target.classList.contains('hero-stats')) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseFloat(stat.getAttribute('data-target'));
                    animateCounter(stat, target);
                });
            }
            
            if (entry.target.classList.contains('recipe-card')) {
                const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-animation, .slide-in-left, .slide-in-right, .recipe-card, .hero-stats').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
   
    switch (type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #dc3545, #fd7e14)';
            break;
        case 'info':
            notification.style.background = 'linear-gradient(135deg, #17a2b8, #007bff)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #6c757d, #495057)';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'info': return 'fa-info-circle';
        default: return 'fa-bell';
    }
}

function performSearch(query) {
    const searchResults = [];
    const cards = document.querySelectorAll('.recipe-card');
    
    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const description = card.querySelector('.card-description').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
        
        if (title.includes(query.toLowerCase()) || 
            description.includes(query.toLowerCase()) ||
            tags.some(tag => tag.includes(query.toLowerCase()))) {
            searchResults.push(card);
        }
    });
    
    return searchResults;
}

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    
    if (query.length > 2) {
        const results = performSearch(query);
        console.log(`Found ${results.length} results for "${query}"`);
    }
});

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
            searchInput.value = '';
        }

        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');

    recipeCards.forEach(card => {
        card.classList.add('visible');
    });

    updateProgressBar();
    updateBackToTop();
    
    console.log('Golden Spoon Kitchen loaded successfully! 🍳✨');
});

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('scroll', debounce(() => {
    updateProgressBar();
    updateBackToTop();
}, 10));

window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});