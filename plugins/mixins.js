// plugins/myMixin.js
import { myMixin } from '~/utils/irisMixins';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.mixin(myMixin);  
  });
