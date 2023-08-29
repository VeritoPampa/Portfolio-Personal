function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-left'); // or 'animate-right'
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer instance
const options = {
  root: null, // Use the viewport as the root
  threshold: 0.2, // Specify the intersection threshold
};

const observer = new IntersectionObserver(handleIntersection, options);

// Observe the section containing the columns
const section = document.getElementById('seccion-1');
if (section) {
  observer.observe(section);
}