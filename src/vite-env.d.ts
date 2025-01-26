/// <reference types="vite/client" />
import type { DefineComponent } from 'vue'
import type { I18n } from 'vue-i18n'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: (key: string) => string
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.vue' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
