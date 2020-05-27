import App from './App.svelte';

export default function () {
  if (!('scrollBehavior' in document.documentElement.style)) {
    import('scroll-behavior-polyfill').then();
  }

  new App({
    target: document.body,
  });
}
