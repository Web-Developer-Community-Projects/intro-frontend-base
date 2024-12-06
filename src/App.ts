
import { Header, Main } from "./presentation/components/shared";
import { Router } from "./presentation/router/router";

export function App(){
  const $app = document.querySelector<HTMLDivElement>("#app")!;
  

  $app.innerHTML = "";
  
  $app.appendChild(Header());
  $app.appendChild(Main());
  

  Router();


  
}