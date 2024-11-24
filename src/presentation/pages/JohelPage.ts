import { Avatar } from "../components/shared";

export function JohelPage(){
    const $containerJohel = document.createElement("section");
  
    $containerJohel.innerHTML = /*html*/`
      <h1>Johel</h1>
    `;
    const avatar =Avatar({
      imgUrl:"/public/avatar.png",
      fallback:"Johel"
    });
    $containerJohel.appendChild(avatar);

    return $containerJohel;
  }