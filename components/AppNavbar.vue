<template>
  <header class="navbar" :class="{ 'is-open': menuOpen }">
    <div class="navbar__inner container">
      <NuxtLink to="/" class="navbar__brand" @click="closeMenu">
        <img
          class="navbar__logo-img"
          src="/images/logo.png"
          alt="Ashvar"
          width="220"
          height="56"
          decoding="async"
        />
      </NuxtLink>

      <nav id="primary-nav" class="navbar__nav" aria-label="Primary">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="navbar__link"
          active-class="is-active"
          @click="closeMenu"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="navbar__triggers">
        <button
          type="button"
          class="navbar__theme"
          :aria-pressed="isLight"
          :aria-label="
            isLight ? 'Switch to dark theme' : 'Switch to light theme'
          "
          @click="toggleTheme"
        >
          <span class="navbar__theme-icon" aria-hidden="true">{{
            isLight ? "🌙" : "☀️"
          }}</span>
        </button>
        <button
          type="button"
          class="navbar__toggle"
          :aria-expanded="menuOpen"
          aria-controls="primary-nav"
          @click="menuOpen = !menuOpen"
        >
          <span class="sr-only">{{
            menuOpen ? "Close menu" : "Open menu"
          }}</span>
          <span class="navbar__burger" aria-hidden="true" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
const { isLight, toggleTheme } = useSiteTheme();

const menuOpen = ref(false);

const links = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/contact", label: "Contact" },
];

function closeMenu() {
  menuOpen.value = false;
}

const route = useRoute();
watch(
  () => route.path,
  () => {
    menuOpen.value = false;
  }
);
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  border-bottom: 1px solid var(--color-border);
  background: rgba(3, 7, 18, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.navbar__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
}
.navbar__brand img {
  width: 130px;
  height: 100%;
  object-fit: contain;
}

.navbar__triggers {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  flex-shrink: 0;
}

.navbar__brand {
  display: inline-flex;
  align-items: center;
  color: var(--color-text);
  text-decoration: none;
}

.navbar__brand:hover {
  opacity: 0.92;
}

.navbar__logo-img {
  display: block;
  height: 2.85rem;
  width: auto;
  max-width: 14rem;
  object-fit: contain;
}

.navbar__theme {
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  background: var(--color-surface);
  cursor: pointer;
  flex-shrink: 0;
}

.navbar__theme:hover {
  border-color: var(--color-border-strong);
}

.navbar__theme-icon {
  font-size: 1.15rem;
  line-height: 1;
}

.navbar__toggle {
  display: none;
  position: relative;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  background: var(--color-surface);
  cursor: pointer;
  flex-shrink: 0;
}

.navbar__burger,
.navbar__burger::before,
.navbar__burger::after {
  display: block;
  width: 1.1rem;
  height: 2px;
  background: var(--color-text);
  border-radius: 1px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.navbar__burger {
  top: 50%;
  margin-top: -1px;
}

.navbar__burger::before,
.navbar__burger::after {
  content: "";
  left: 0;
  transform: none;
}

.navbar__burger::before {
  top: -6px;
}

.navbar__burger::after {
  top: 6px;
}

.navbar.is-open .navbar__burger {
  background: transparent;
}

.navbar.is-open .navbar__burger::before {
  top: 0;
  transform: rotate(45deg);
}

.navbar.is-open .navbar__burger::after {
  top: 0;
  transform: rotate(-45deg);
}

.navbar__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex: 1;
  min-width: 0;
}

.navbar__link {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: var(--color-text-muted);
  font-size: 0.9375rem;
  font-weight: 500;
}

.navbar__link:hover {
  color: var(--color-text);
  background: rgba(148, 163, 184, 0.08);
}

.navbar__link.is-active {
  color: var(--color-accent);
  background: rgba(56, 189, 248, 0.1);
}

@media (max-width: 767px) {
  .navbar__toggle {
    display: grid;
    place-items: center;
  }

  .navbar__nav {
    position: absolute;
    top: var(--nav-height);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    padding: 0.75rem 1.25rem 1.25rem;
    border-bottom: 1px solid var(--color-border);
    background: rgba(3, 7, 18, 0.96);
    backdrop-filter: blur(14px);
    transform-origin: top;
    transform: scaleY(0.96);
    opacity: 0;
    pointer-events: none;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
  }

  .navbar.is-open .navbar__nav {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: auto;
  }

  .navbar__link {
    padding: 0.85rem 1rem;
  }
}
</style>
