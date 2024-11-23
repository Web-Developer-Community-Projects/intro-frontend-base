import { Avatar } from "../components/shared";

export function JovanyPage(){
    const $containerJovany = document.createElement("section");
  
    $containerJovany.innerHTML = /*html*/`
      <h1>Jovany</h1>
    `;
  
    const avatar = Avatar({
        imgUrl: "/avatarcr7.png",
        fallback: "Jovany fuasdt" 
      });
      $containerJovany.appendChild(avatar);
  
    return $containerJovany;
  }