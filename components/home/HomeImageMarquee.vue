<template>
  <div class="marquee-wrap" role="presentation">
    <p class="marquee-wrap__label">Equipment &amp; supply</p>
    <div class="marquee">
      <div class="marquee__track">
        <div class="marquee__strip">
          <figure
            v-for="(src, i) in images"
            :key="`a-${i}`"
            class="marquee__fig"
          >
            <img
              :src="src"
              alt=""
              width="220"
              height="124"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
        <div class="marquee__strip" aria-hidden="true">
          <figure
            v-for="(src, i) in images"
            :key="`b-${i}`"
            class="marquee__fig"
          >
            <img
              :src="src"
              alt=""
              width="220"
              height="124"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const images = [
  "/images/products/12.jpeg",
  "/images/products/13.jpeg",
  "/images/products/14.jpeg",
  "/images/products/15.jpeg",
  "/images/products/16.jpeg",
  "/images/products/17.jpeg",
  "/images/products/edible_oil_refinery.jpeg",
  "/images/products/ept_under.jpeg",
  "/images/products/high_effect_vaccum.jpeg",
  "/images/products/refinery_oil_seperator.jpeg",
  "/images/products/product_2/1.jpeg",
];
</script>

<style scoped lang="scss">
.marquee-wrap {
  position: relative;
  padding: 1.4rem 0 1.25rem;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  background: #0a0f1a;
  overflow: hidden;
}

.marquee-wrap__label {
  position: absolute;
  left: 50%;
  top: 0.45rem;
  transform: translateX(-50%);
  margin: 0;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(148, 163, 184, 0.8);
  z-index: 1;
  pointer-events: none;
}

.marquee {
  margin-top: 1.2rem;
}

.marquee__track {
  display: flex;
  width: max-content;
  animation: marqueeMove 55s linear infinite;
}

.marquee__strip {
  display: flex;
  flex-shrink: 0;
  gap: 0.5rem;
  padding-right: 0.5rem;
}

.marquee__fig {
  flex: 0 0 auto;
  width: 176px;
  margin: 0;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.22);
  background: #1e293b;
  transition:
    transform 0.35s ease,
    border-color 0.35s ease;
}

@media (min-width: 640px) {
  .marquee__fig {
    width: 220px;
  }
}

.marquee__fig:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: rgba(56, 189, 248, 0.45);
}

.marquee__fig img {
  width: 100%;
  height: 112px;
  object-fit: cover;
  object-position: center;
  display: block;
}

@media (min-width: 640px) {
  .marquee__fig img {
    height: 124px;
  }
}

@keyframes marqueeMove {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee__track {
    animation: none;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 72rem;
    margin: 0 auto;
    padding: 0 1rem;
    gap: 0.5rem;
  }

  .marquee__strip[aria-hidden="true"] {
    display: none;
  }

  .marquee__strip {
    flex-wrap: wrap;
    justify-content: center;
    padding-right: 0;
  }
}
</style>
