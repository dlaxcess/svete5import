import { dev } from "$app/environment";

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

// Nous avons besoin de JavaScript pour les web components
// export const csr = true;

// Désactivons le prerendering car nous avons besoin de JavaScript
// export const prerender = false;

// Désactivons le SSR pour éviter les erreurs avec customElements
// export const ssr = false;
