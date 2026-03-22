<template>
  <div class="page-contact">
    <header class="page-head">
      <div class="container">
        <ScrollReveal>
          <p class="page-head__eyebrow">Contact</p>
          <h1 class="page-head__title">Let’s scope your supply</h1>
          <p class="page-head__lead">
            Share your requirement and we will respond with next steps and
            timelines.
          </p>
        </ScrollReveal>
      </div>
    </header>

    <div class="split">
      <section
        id="get-quote"
        class="split__form"
        aria-labelledby="form-heading"
      >
        <div class="container container--form">
          <ScrollReveal>
            <h2 id="form-heading" class="split__h2">Send a message</h2>
            <p class="split__hint">
              Fields marked by the form are used only to respond to your
              inquiry.
            </p>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      <aside class="split__aside" aria-label="Company details">
        <div class="container container--aside">
          <ScrollReveal>
            <h2 class="split__h2">Company details</h2>
            <ul class="details">
              <li class="details__row">
                <span class="details__icon" aria-hidden="true">
                  <IconMail />
                </span>
                <div>
                  <p class="details__label">Email</p>
                  <a :href="`mailto:${SITE_EMAIL}`">{{ SITE_EMAIL }}</a>
                </div>
              </li>
              <li class="details__row">
                <span class="details__icon" aria-hidden="true">
                  <IconPhone />
                </span>
                <div>
                  <p class="details__label">Phone</p>
                  <a :href="`tel:${SITE_PHONE_TEL}`">{{ SITE_PHONE_LABEL }}</a>
                </div>
              </li>
              <li class="details__row">
                <span class="details__icon" aria-hidden="true">
                  <IconMap />
                </span>
                <div>
                  <p class="details__label">Location</p>
                  <p class="details__value">India</p>
                </div>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <div class="career">
              <h3 class="career__title">Careers</h3>
              <p class="career__text">
                Send your resume to
                <a :href="`mailto:${CAREERS_EMAIL}`">{{ CAREERS_EMAIL }}</a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </aside>
    </div>

    <section class="map-section" aria-label="Map">
      <div class="map-wrap">
        <iframe
          title="Ashvar location — India"
          class="map-frame"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15248925.9794674!2d72.8776559!3d20.593684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff26b29279f%3A0xdbc93861e0f88e96!2sIndia!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          allowfullscreen
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  SITE_EMAIL,
  SITE_PHONE_LABEL,
  SITE_PHONE_TEL,
  CAREERS_EMAIL,
} from "~/utils/contact.js";
import IconMail from "~/components/icons/IconMail.vue";
import IconPhone from "~/components/icons/IconPhone.vue";
import IconMap from "~/components/icons/IconMap.vue";

useSeoMeta({
  title: "Contact | Ashvar — Industrial Export & Import",
  description:
    "Contact Ashvar for quotes and industrial supply inquiries. Email, phone, India.",
  ogTitle: "Contact Ashvar",
  ogDescription:
    "Reach Ashvar for industrial spare parts and power solutions.",
  ogUrl: "https://ashvarimportexport.com/contact",
  twitterCard: "summary_large_image",
});

useHead({
  link: [
    { rel: "canonical", href: "https://ashvarimportexport.com/contact" },
  ],
});
</script>

<style scoped lang="scss">
.page-contact {
  background: var(--color-bg-deep);
}

.page-head {
  padding: 3.25rem 0 2rem;
  border-bottom: 1px solid var(--color-border);
  background:
    radial-gradient(700px 280px at 80% 0%, rgba(37, 99, 235, 0.12), transparent),
    var(--color-bg-dark);
}

.page-head__eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.page-head__title {
  margin: 0 0 0.65rem;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: #f8fafc;
}

.page-head__lead {
  margin: 0;
  max-width: 52ch;
  color: var(--color-text-muted);
  line-height: 1.65;
}

.split {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 960px) {
  .split {
    grid-template-columns: 1.1fr 0.9fr;
    min-height: 420px;
  }
}

.split__form {
  padding: 2.5rem 0 3rem;
  background: var(--color-bg-dark);
  color: var(--color-text);
}

.split__aside {
  padding: 2.5rem 0 3rem;
  background: var(--color-bg-dark);
  border-top: 1px solid var(--color-border);
}

@media (min-width: 960px) {
  .split__aside {
    border-top: none;
    border-left: 1px solid var(--color-border);
  }
}

.container--form {
  max-width: 32rem;
}

.container--aside {
  max-width: 28rem;
}

.split__h2 {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  color: inherit;
}

.split__form .split__h2 {
  color: var(--color-text);
}

.split__aside .split__h2 {
  color: var(--color-text);
}

.split__hint {
  margin: 0 0 1.25rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.details {
  margin: 0;
  padding: 0;
  list-style: none;
}

.details__row {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
}

.details__row + .details__row {
  margin-top: 1.25rem;
}

.details__icon {
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 0.55rem;
  background: rgba(56, 189, 248, 0.12);
  color: var(--color-accent);
}

.details__icon :deep(svg) {
  width: 1.2rem;
  height: 1.2rem;
}

.details__label {
  margin: 0 0 0.2rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.details__value {
  margin: 0;
  color: var(--color-text);
}

.career {
  margin-top: 2rem;
  padding: 1.25rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}

.career__title {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: var(--color-text);
}

.career__text {
  margin: 0;
  font-size: 0.92rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

.map-section {
  border-top: 1px solid var(--color-border);
}

.map-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 21 / 9;
  min-height: 280px;
  background: var(--color-bg-elevated);
}

.map-frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  filter: grayscale(0.2) contrast(1.05);
}

@media (max-width: 767px) {
  .map-wrap {
    aspect-ratio: 4 / 3;
  }
}
</style>
