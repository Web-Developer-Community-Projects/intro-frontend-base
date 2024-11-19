import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";

export function Header() {
  const $styles = document.querySelector<HTMLStyleElement>('#dynamic-styles')!;
  $styles.innerHTML += /*css*/ `
    .header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: var(--second-color);
    }
  `;

  const $header = document.createElement('header'); // <header>
  $header.classList.add('header');

  $header.appendChild(Logo());
  $header.appendChild(NavMenu());



  return $header;
}