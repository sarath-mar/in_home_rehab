<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__inner container">
      <div class="footer__top">
        <div class="footer__brand">
          <img
            class="footer__logo-img"
            src="/images/logo.png"
            alt=""
            width="200"
            height="52"
            decoding="async"
          />
          <div>
            <p class="footer__name">Ashvar</p>
            <p class="footer__tagline">
              Global export-import partner for industrial solutions.
            </p>
          </div>
        </div>
        <nav class="footer__nav" aria-label="Footer">
          <p class="footer__heading">Quick links</p>
          <ul class="footer__list">
            <li v-for="link in links" :key="link.to">
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="footer__contact">
          <p class="footer__heading">Contact</p>
          <p>
            <a :href="`mailto:${SITE_EMAIL}`">{{ SITE_EMAIL }}</a>
          </p>
          <p>
            <a :href="`tel:${SITE_PHONE_TEL}`">{{ SITE_PHONE_LABEL }}</a>
          </p>
          <p class="footer__loc">India</p>
        </div>
      </div>
      <div class="footer__bottom">
        <p>
          © {{ year }} Ashvar Import and Export. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { SITE_EMAIL, SITE_PHONE_LABEL, SITE_PHONE_TEL } from "~/utils/contact.js";

const year = new Date().getFullYear();

const links = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/contact", label: "Contact" },
];
</script>

<style scoped lang="scss">
.footer {
  margin-top: auto;
  border-top: 1px solid var(--color-border);
  background: linear-gradient(180deg, #020617 0%, #030712 100%);
  padding: 3rem 0 1.5rem;
}

.footer__top {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .footer__top {
    grid-template-columns: 1.4fr 1fr 1fr;
    align-items: start;
  }
}

.footer__brand {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
}

.footer__logo-img {
  display: block;
  width: 130px;
  height: 100%;
  max-width: 13rem;
  flex-shrink: 0;
  object-fit: contain;
}

.footer__name {
  margin: 0 0 0.35rem;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--color-text);
}

.footer__tagline {
  margin: 0;
  max-width: 28ch;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

.footer__heading {
  margin: 0 0 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.footer__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer__list li + li {
  margin-top: 0.45rem;
}

.footer__list a {
  color: #cbd5e1;
  font-size: 0.95rem;
}

.footer__list a:hover {
  color: var(--color-accent);
}

.footer__contact p {
  margin: 0 0 0.4rem;
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

.footer__contact a {
  color: #e2e8f0;
}

.footer__loc {
  margin-top: 0.5rem !important;
}

.footer__bottom {
  margin-top: 2.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(148, 163, 184, 0.12);
  text-align: center;
}

.footer__bottom p {
  margin: 0;
  font-size: 0.8rem;
  color: #64748b;
}
</style>
