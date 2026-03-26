<template>
  <div class="showcase" aria-hidden="true">
    <figure class="showcase__cell showcase__cell--hero">
      <img
        src="/images/products/15.jpeg"
        width="640"
        height="480"
        alt=""
        loading="eager"
        decoding="async"
      />
    </figure>
    <figure class="showcase__cell showcase__cell--top">
      <img
        src="/images/products/16.jpeg"
        width="400"
        height="250"
        alt=""
        loading="eager"
        decoding="async"
      />
    </figure>
    <figure class="showcase__cell showcase__cell--bottom">
      <img
        src="/images/products/17.jpeg"
        width="400"
        height="250"
        alt=""
        loading="eager"
        decoding="async"
      />
    </figure>
  </div>
</template>

<style scoped lang="scss">
/* Editorial “bento”: one large tile + two stacked — no overlap */
.showcase {
  display: grid;
  gap: 0.65rem;
  width: 100%;
  max-width: 38rem;
  margin-left: auto;
  margin-right: auto;
  min-height: 260px;
}

@media (min-width: 640px) {
  .showcase {
    max-width: 44rem;
    gap: 0.75rem;
    min-height: 300px;
  }
}

@media (min-width: 1024px) {
  .showcase {
    max-width: none;
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: 1fr 1fr;
    min-height: min(42vh, 400px);
  }
}

/* Mobile: hero on top, two thumbs in one row */
@media (max-width: 1023px) {
  .showcase {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }

  .showcase__cell--hero {
    grid-column: 1 / -1;
    grid-row: 1;
    min-height: 200px;
  }

  .showcase__cell--top {
    grid-column: 1;
    grid-row: 2;
  }

  .showcase__cell--bottom {
    grid-column: 2;
    grid-row: 2;
  }
}

.showcase__cell {
  margin: 0;
  border-radius: 0.85rem;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.28);
  background: #1e293b;
  box-shadow: 0 18px 44px rgba(2, 6, 23, 0.45);
  min-height: 0;
}

@media (min-width: 1024px) {
  .showcase__cell--hero {
    grid-column: 1;
    grid-row: 1 / -1;
  }

  .showcase__cell--top {
    grid-column: 2;
    grid-row: 1;
  }

  .showcase__cell--bottom {
    grid-column: 2;
    grid-row: 2;
  }
}

.showcase__cell--hero {
  aspect-ratio: 4 / 3;
}

@media (min-width: 1024px) {
  .showcase__cell--hero {
    aspect-ratio: auto;
    height: 100%;
    align-self: stretch;
  }
}

.showcase__cell--top,
.showcase__cell--bottom {
  aspect-ratio: 16 / 10;
}

@media (min-width: 1024px) {
  .showcase__cell--top,
  .showcase__cell--bottom {
    aspect-ratio: auto;
    height: 100%;
  }
}

.showcase__cell img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
</style>
