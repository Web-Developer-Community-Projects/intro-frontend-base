import { Avatar } from "../components/shared";

export function HomePage(){
  const $homeContainer = document.createElement('section');

  $homeContainer.innerHTML = /*html*/`
    <h1>Home</h1>
  `;

  $homeContainer.appendChild(Avatar({
    imgUrl: "/avatar.png",
    fallback: "Moises Prado"
  }));
  

  return $homeContainer;
}