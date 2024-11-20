import { Avatar } from "../components/shared";

export function JonatanPage(){
  const $containerJonatan = document.createElement("section");

  $containerJonatan.innerHTML = /*html*/`
    <h1>Jonatan</h1>
  `;

  $containerJonatan.appendChild(Avatar({
    imgUrl: "/avatar.png",
    fallback: "Jonatan Laureano"
  }));

  return $containerJonatan;
}