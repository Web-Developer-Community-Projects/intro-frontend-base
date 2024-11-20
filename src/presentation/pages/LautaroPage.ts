import { Avatar } from "../components/shared";

export function LautaroPage(){
  const $containerLautaro = document.createElement("section");
  $containerLautaro.classList.add("estilos")
  const $estilos = document.createElement("style")
  $containerLautaro.innerHTML = /*html*/`
    <h1 >Lautaro</h1>
  `;

  $estilos.innerHTML = /*html*/ `
  .estilos{
    h1{
      cursor:pointer;
      &:hover{
        color: red;
      }
    }
  }
  `
  $containerLautaro.appendChild(Avatar({
    imgUrl: "/public/avatar.png" ,
    fallback: "Lautaro"
  }))

  $containerLautaro.append($estilos)
  return $containerLautaro;
}