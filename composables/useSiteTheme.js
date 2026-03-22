const STORAGE_KEY = "ashvar-theme";

export function useSiteTheme() {
  const isLight = ref(false);

  function applyTheme(mode) {
    if (typeof document === "undefined") return;
    document.documentElement.dataset.theme = mode;
    isLight.value = mode === "light";
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute(
        "content",
        mode === "light" ? "#f8fafc" : "#0b1220"
      );
    }
  }

  function toggleTheme() {
    applyTheme(isLight.value ? "dark" : "light");
  }

  onMounted(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      applyTheme(saved === "dark" ? "dark" : "light");
    } catch {
      applyTheme("light");
    }
  });

  return { isLight, toggleTheme, applyTheme };
}
