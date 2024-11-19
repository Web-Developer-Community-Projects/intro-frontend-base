export function Main() {
  const $styles = document.querySelector<HTMLStyleElement>("#dynamic-styles")!;
  $styles.innerHTML += /*css*/ `
    .main{
      padding: 1rem;
    }
  `;

  const $main = document.createElement('main'); // <main>
  $main.id = 'main';
   $main.classList.add("main", "container", "full-screen");

  return $main;
}