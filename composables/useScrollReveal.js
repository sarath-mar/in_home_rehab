const defaultRevealOptions = {
  root: null,
  rootMargin: "0px 0px -8% 0px",
  threshold: 0.12,
};

/** Attaches IntersectionObserver to reveal elements on scroll. */
export function useScrollReveal(target, options = defaultRevealOptions) {
  const isVisible = ref(false);
  let observer = null;

  onMounted(() => {
    const el = target.value;
    if (!el) return;

    const reduceMotion = globalThis
      .matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    if (reduceMotion) {
      isVisible.value = true;
      return;
    }

    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer?.unobserve(entry.target);
        }
      }
    }, options);

    observer.observe(el);
  });

  onUnmounted(() => {
    observer?.disconnect();
    observer = null;
  });

  return { isVisible };
}
