/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare global {
  interface Window {
    netlifyIdentity: {
      on: (event: string, callback: (user?: any) => void) => void;
    };
  }
}