const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const testimonials = [
  {
    text: 'The music was flawless, the energy was incredible, and every single guest stayed on the dance floor. DJ VOKA completely owned the night.',
    name: 'Aisosa O.',
    role: 'Wedding Client, Benin City',
  },
  {
    text: 'Our celebration felt premium and energetic from the first track to the final mix. Guests kept asking for the DJ name all night.',
    name: 'Osaro E.',
    role: 'Event Host, Edo State',
  },
  {
    text: 'The vibe was unreal. DJ VOKA read the room perfectly and created an atmosphere that made the whole party feel alive.',
    name: 'Efe R.',
    role: 'Private Party Host, Benin City',
  },
];

const testimonialText = document.getElementById('testimonial-text');
const testimonialName = document.getElementById('testimonial-name');
const testimonialRole = document.getElementById('testimonial-role');
const sliderButtons = document.querySelectorAll('.slider-btn');

let currentTestimonialIndex = 0;

function renderTestimonial(index) {
  const item = testimonials[index];
  if (!item || !testimonialText || !testimonialName || !testimonialRole) return;

  testimonialText.textContent = item.text;
  testimonialName.textContent = item.name;
  testimonialRole.textContent = item.role;
}

sliderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const direction = button.dataset.direction === 'next' ? 1 : -1;
    currentTestimonialIndex = (currentTestimonialIndex + direction + testimonials.length) % testimonials.length;
    renderTestimonial(currentTestimonialIndex);
  });
});

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const form = document.getElementById('booking-form');
const formStatus = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');

    if (formStatus) {
      formStatus.textContent = `Thanks, ${name}! Your booking request has been received. DJ VOKA will reach out soon.`;
    }

    form.reset();
  });
}

renderTestimonial(currentTestimonialIndex);
