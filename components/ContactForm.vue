<template>
  <form class="contact-form" novalidate @submit.prevent="onSubmit">
    <div class="contact-form__row">
      <label class="contact-form__label" for="contact-name">Name</label>
      <input
        id="contact-name"
        v-model="form.name"
        type="text"
        name="name"
        class="contact-form__input"
        required
        autocomplete="name"
        placeholder="Your name"
      />
    </div>
    <div class="contact-form__row">
      <label class="contact-form__label" for="contact-email">Email</label>
      <input
        id="contact-email"
        v-model="form.email"
        type="email"
        name="email"
        class="contact-form__input"
        required
        autocomplete="email"
        placeholder="you@company.com"
      />
    </div>
    <div class="contact-form__row">
      <label class="contact-form__label" for="contact-phone">Phone</label>
      <input
        id="contact-phone"
        v-model="form.phone"
        type="tel"
        name="phone"
        class="contact-form__input"
        autocomplete="tel"
        placeholder="+91 …"
      />
    </div>
    <div class="contact-form__row">
      <label class="contact-form__label" for="contact-message">Message</label>
      <textarea
        id="contact-message"
        v-model="form.message"
        name="message"
        class="contact-form__textarea"
        rows="5"
        required
        placeholder="Tell us about your requirements"
      />
    </div>
    <button type="submit" class="contact-form__submit" :disabled="sent">
      {{ sent ? "Message sent" : "Send message" }}
    </button>
    <p v-if="sent" class="contact-form__thanks" role="status">
      Your email app should open with a message to {{ contactEmail }}. Send it
      to complete your inquiry.
    </p>
  </form>
</template>

<script setup>
import { SITE_EMAIL } from "~/utils/contact.js";

const contactEmail = SITE_EMAIL;

const form = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const sent = ref(false);

function onSubmit() {
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    return;
  }
  const subject = encodeURIComponent(
    `Website inquiry from ${form.name.trim()}`
  );
  const body = encodeURIComponent(
    [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim() || "—"}`,
      "",
      "Message:",
      form.message.trim(),
    ].join("\n")
  );
  window.location.href = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;
  sent.value = true;
}
</script>

<style scoped lang="scss">
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.contact-form__row {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.contact-form__label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.contact-form__input,
.contact-form__textarea {
  width: 100%;
  padding: 0.75rem 0.9rem;
  border-radius: 0.55rem;
  border: 1px solid rgba(148, 163, 184, 0.45);
  background: #1e293b;
  font: inherit;
  font-size: 0.95rem;
  color: #f8fafc;
  caret-color: #f8fafc;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.contact-form__input::placeholder,
.contact-form__textarea::placeholder {
  color: #94a3b8;
}

.contact-form__input:focus,
.contact-form__textarea:focus {
  outline: none;
  border-color: rgba(14, 165, 233, 0.65);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.2);
}

.contact-form__textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form__submit {
  align-self: flex-start;
  margin-top: 0.25rem;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 999px;
  font: inherit;
  font-weight: 600;
  font-size: 0.95rem;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(135deg, #0284c7, #1d4ed8);
  box-shadow: 0 10px 28px rgba(14, 165, 233, 0.35);
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.contact-form__submit:hover:not(:disabled) {
  transform: translateY(-2px);
}

.contact-form__submit:disabled {
  opacity: 0.85;
  cursor: default;
}

.contact-form__thanks {
  margin: 0;
  font-size: 0.92rem;
  color: #6ee7b7;
}
</style>
