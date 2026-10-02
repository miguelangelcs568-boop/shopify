(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isEditorPreview = window.Shopify && window.Shopify.designMode;

  const initSection = (root) => {
    const items = root.querySelectorAll('.nv-reveal');
    if (!items.length) return;

    if (prefersReduced || isEditorPreview || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    items.forEach((el) => io.observe(el));
  };

  document.querySelectorAll('.nv-home').forEach(initSection);
})();
