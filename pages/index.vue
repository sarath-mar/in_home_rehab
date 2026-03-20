<template>
  <main class="coming-soon">
    <div class="ambient ambient-a" aria-hidden="true"></div>
    <div class="ambient ambient-b" aria-hidden="true"></div>
    <div class="ambient ambient-c" aria-hidden="true"></div>

    <section class="card" aria-label="Coming soon information">
      <p class="eyebrow">Ashvar Import and Export</p>
      <h1>
        Global Trade Excellence,
        <span>Arriving Soon</span>
      </h1>
      <p class="description">
        We are crafting a refined digital experience for import and export
        services with dependable execution and international reach.
      </p>

      <div class="metrics">
        <p>Trusted Sourcing</p>
        <p>Smart Logistics</p>
        <p>Quality Assured</p>
      </div>

      <p class="status">Launching Soon</p>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Ashvar Import and Export | Coming Soon",
  description:
    "Ashvar Import and Export is launching soon. We provide trusted global import and export services.",
  ogTitle: "Ashvar Import and Export | Coming Soon",
  ogDescription:
    "Ashvar Import and Export is launching soon. We provide trusted global import and export services.",
  ogType: "website",
  ogUrl: "https://ashvarimportexport.com",
  twitterCard: "summary_large_image",
  twitterTitle: "Ashvar Import and Export | Coming Soon",
  twitterDescription:
    "Ashvar Import and Export is launching soon. We provide trusted global import and export services.",
});
</script>

<style scoped>
:global(body) {
  margin: 0;
  padding: 0;
}
.coming-soon {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(1200px 600px at 10% 10%, rgba(59, 130, 246, 0.12), transparent),
    radial-gradient(1000px 500px at 90% 90%, rgba(168, 85, 247, 0.1), transparent),
    linear-gradient(120deg, #020617 0%, #0f172a 48%, #111827 100%);
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

.ambient {
  position: absolute;
  border-radius: 999px;
  filter: blur(10px);
  opacity: 0.8;
  pointer-events: none;
}

.ambient-a {
  width: 320px;
  height: 320px;
  top: -90px;
  left: -70px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.45), rgba(56, 189, 248, 0));
  animation: drift 6s ease-in-out infinite;
}

.ambient-b {
  width: 360px;
  height: 360px;
  right: -110px;
  bottom: -120px;
  background: radial-gradient(circle, rgba(147, 51, 234, 0.35), rgba(147, 51, 234, 0));
  animation: drift 7s ease-in-out infinite reverse;
}

.ambient-c {
  width: 200px;
  height: 200px;
  right: 20%;
  top: 12%;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.2), rgba(14, 165, 233, 0));
  animation: pulse 3.5s ease-in-out infinite;
}

.card {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 820px;
  border-radius: 20px;
  padding: 52px 38px;
  text-align: center;
  border: 1px solid rgba(148, 163, 184, 0.28);
  background: linear-gradient(
    160deg,
    rgba(15, 23, 42, 0.76),
    rgba(15, 23, 42, 0.52) 35%,
    rgba(30, 41, 59, 0.66)
  );
  backdrop-filter: blur(10px);
  box-shadow:
    0 24px 60px rgba(2, 6, 23, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  animation: cardFloat 4s ease-in-out infinite;
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(
    120deg,
    rgba(56, 189, 248, 0.5),
    rgba(255, 255, 255, 0.1),
    rgba(168, 85, 247, 0.45)
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  animation: borderShift 5s linear infinite;
}

.card::after {
  content: "";
  position: absolute;
  top: -140%;
  left: -40%;
  width: 60%;
  height: 380%;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(18deg);
  animation: shimmer 4.5s ease-in-out infinite;
  pointer-events: none;
}

.eyebrow {
  margin: 0 0 12px;
  color: #cbd5e1;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  margin: 0 0 14px;
  color: #f8fafc;
  font-size: clamp(2rem, 4.6vw, 3rem);
  line-height: 1.2;
  font-weight: 700;
}

h1 span {
  background: linear-gradient(90deg, #38bdf8 0%, #818cf8 45%, #c084fc 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.description {
  margin: 0;
  max-width: 64ch;
  color: #cbd5e1;
  font-size: 1rem;
  line-height: 1.8;
}

.metrics {
  margin: 28px auto 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.metrics p {
  margin: 0;
  border: 1px solid rgba(148, 163, 184, 0.3);
  border-radius: 999px;
  padding: 8px 14px;
  color: #e2e8f0;
  font-size: 0.85rem;
  background: rgba(15, 23, 42, 0.45);
}

.status {
  margin: 28px 0 0;
  display: inline-block;
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: linear-gradient(90deg, #075985, #3730a3);
  border-radius: 999px;
  padding: 8px 14px;
  box-shadow: 0 10px 22px rgba(59, 130, 246, 0.35);
  animation: badgePulse 2.2s ease-in-out infinite;
}

@keyframes drift {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -16px);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.08);
    opacity: 1;
  }
}

@keyframes cardFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-160%) rotate(18deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  55% {
    opacity: 1;
  }
  100% {
    transform: translateX(280%) rotate(18deg);
    opacity: 0;
  }
}

@keyframes borderShift {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(35deg);
  }
}

@keyframes badgePulse {
  0%,
  100% {
    box-shadow: 0 10px 22px rgba(59, 130, 246, 0.35);
  }
  50% {
    box-shadow: 0 14px 30px rgba(99, 102, 241, 0.52);
  }
}

@media (max-width: 640px) {
  .card {
    padding: 36px 20px;
  }
}
</style>