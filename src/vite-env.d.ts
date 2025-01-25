/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'virtual:node-i18n' {
  const messages: {
    [region: string]: {
      [key: string]: string;
    };
  };

  export const messages;
}
