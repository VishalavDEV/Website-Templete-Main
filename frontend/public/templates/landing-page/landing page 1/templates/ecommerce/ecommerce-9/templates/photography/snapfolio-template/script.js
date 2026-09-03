document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation Link Active Highlighting & Smooth Scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 2. Typewriter Effect
  const typewriterText = document.getElementById('typewriter-text');
  const words = ["Landscape Specialist", "Editorial Visionary", "Visual Storyteller"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 150;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      charIndex--;
      delay = 60;
    } else {
      charIndex++;
      delay = 120;
    }

    typewriterText.textContent = currentWord.substring(0, charIndex);

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      delay = 2000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 500; // Pause before starting next word
    }

    setTimeout(type, delay);
  }
  
  if (typewriterText) {
    type();
  }

  // 3. Gallery Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button classes
      filterBtns.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white');
        b.classList.add('bg-zinc-800', 'text-zinc-400');
      });
      btn.classList.remove('bg-zinc-800', 'text-zinc-400');
      btn.classList.add('bg-indigo-600', 'text-white');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          item.classList.remove('hidden-item');
          item.classList.add('show-item');
        } else {
          item.classList.remove('show-item');
          item.classList.add('hidden-item');
        }
      });
    });
  });

  // 4. Interactive Lightbox Modal
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  
  let activeItems = [];
  let currentIndex = 0;

  function updateActiveItems() {
    activeItems = Array.from(galleryItems).filter(item => !item.classList.contains('hidden-item'));
  }

  function showImage(index) {
    if (index < 0) index = activeItems.length - 1;
    if (index >= activeItems.length) index = 0;
    currentIndex = index;

    const img = activeItems[currentIndex].querySelector('img');
    const title = activeItems[currentIndex].querySelector('h4')?.textContent || 'Gallery Image';
    const cat = activeItems[currentIndex].getAttribute('data-category');
    
    lightboxImg.src = img.src;
    lightboxCaption.innerHTML = `<span class="text-indigo-400 font-semibold uppercase text-xs">${cat}</span> — <span class="text-zinc-200">${title}</span>`;
  }

  galleryItems.forEach(item => {
    const imgWrapper = item.querySelector('.group');
    imgWrapper.addEventListener('click', () => {
      updateActiveItems();
      const itemIndex = activeItems.indexOf(item);
      if (itemIndex !== -1) {
        showImage(itemIndex);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable background scroll
      }
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      showImage(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      showImage(currentIndex + 1);
    }
  });

  // 5. Contact Form Validation & Toast Notification
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  function showToast(message, isError = false) {
    toastMessage.textContent = message;
    if (isError) {
      toast.classList.remove('border-green-500/30', 'bg-green-500/10');
      toast.classList.add('border-red-500/30', 'bg-red-500/10');
      toast.querySelector('svg').outerHTML = `<svg class="w-5 h-5 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`;
    } else {
      toast.classList.remove('border-red-500/30', 'bg-red-500/10');
      toast.classList.add('border-green-500/30', 'bg-green-500/10');
      toast.querySelector('svg').outerHTML = `<svg class="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
    }
    
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const service = document.getElementById('form-service').value;
      const message = document.getElementById('form-message').value.trim();

      // Basic Validation
      if (!name || !email || !message) {
        showToast('Please fill out all required fields.', true);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address.', true);
        return;
      }

      // Success
      showToast(`Thank you, ${name}! Your booking inquiry has been sent.`);
      contactForm.reset();
    });
  }
});
