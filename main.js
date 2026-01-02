const initScrollAnimations = () => {
  const sections = document.querySelectorAll('.section');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
};

const initAboutImageAnimation = () => {
  const aboutImage = document.querySelector('.about-intro-image img');
  if (!aboutImage) return;

  let ticking = false;

  const updateImagePosition = () => {
    const scrolled = window.pageYOffset;
    const imageContainer = document.querySelector('.about-intro-image');
    if (imageContainer) {
      const rect = imageContainer.getBoundingClientRect();
      const containerTop = rect.top + scrolled;
      const scrollPercent = (scrolled - containerTop + window.innerHeight) / (window.innerHeight + rect.height);

      if (scrollPercent >= 0 && scrollPercent <= 1) {
        const movement = (scrollPercent - 0.5) * 40;
        aboutImage.style.transform = `translateY(${movement}px)`;
      }
    }
    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateImagePosition);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
  updateImagePosition();
};

const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

const initMobileMenu = () => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileCloseBtn = document.querySelector('.mobile-close-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuToggle) {
    let overlay = document.querySelector('.mobile-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'mobile-overlay';
      overlay.setAttribute('aria-hidden', 'true');
      document.body.appendChild(overlay);
    }

    const closeMenu = () => {
      navLinks.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('menu-open');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
    };

    const openMenu = () => {
      navLinks.classList.add('active');
      overlay.classList.add('active');
      document.body.classList.add('menu-open');
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
    };

    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('active');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (mobileCloseBtn) {
      mobileCloseBtn.addEventListener('click', closeMenu);
    }

    overlay.addEventListener('click', closeMenu);

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenu();
        mobileMenuToggle.focus();
      }
    });
  }
};

const setActiveNavLink = () => {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPage || (currentPage === '/' && linkPath === '/index.html')) {
      link.classList.add('active');
    }
  });
};

const initFAQ = () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const isActive = faqItem.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      if (!isActive) {
        faqItem.classList.add('active');
      }
    });
  });
};

const initRecipeShareButtons = () => {
  const recipeActionButtons = document.querySelectorAll('.recipe-action-btn');

  recipeActionButtons.forEach(button => {
    const buttonText = button.textContent.trim().toLowerCase();

    if (buttonText.includes('pin')) {
      button.addEventListener('click', () => {
        const pageUrl = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.querySelector('.recipe-title')?.textContent || 'Check out this recipe!');
        const image = encodeURIComponent(document.querySelector('.recipe-intro-image img')?.src || '');
        const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${pageUrl}&media=${image}&description=${title}`;
        window.open(pinterestUrl, '_blank', 'width=750,height=600');
      });
    }

    if (buttonText.includes('share')) {
      button.addEventListener('click', () => {
        const pageUrl = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.querySelector('.recipe-title')?.textContent || 'Check out this recipe!');
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}&quote=${title}`;
        window.open(facebookUrl, '_blank', 'width=600,height=400');
      });
    }

    if (buttonText.includes('send')) {
      button.addEventListener('click', () => {
        const title = document.querySelector('.recipe-title')?.textContent || 'Check out this recipe!';
        const pageUrl = window.location.href;
        const mailtoLink = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent('I thought you might like this recipe: ' + pageUrl)}`;
        window.location.href = mailtoLink;
      });
    }

    if (buttonText.includes('print')) {
      button.addEventListener('click', () => {
        window.print();
      });
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initSmoothScroll();
  initMobileMenu();
  setActiveNavLink();
  initFAQ();
  initAboutImageAnimation();
  initRecipeShareButtons();
});
