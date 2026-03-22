/**
 * Apply saved theme before Vue mounts to reduce flash (client-only).
 */
export default defineNuxtPlugin(() => {
  if (typeof document === "undefined") return;
  try {
    const saved = localStorage.getItem("ashvar-theme");
    document.documentElement.dataset.theme =
      saved === "light" ? "light" : "dark";
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
});
