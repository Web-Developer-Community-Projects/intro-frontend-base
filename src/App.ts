
import { Header, Main } from "./presentation/components/shared";
import { Router } from "./presentation/router/router";

export function App(){
  const $app = document.querySelector<HTMLDivElement>("#app")!;
  console.log($app);

  $app.innerHTML = "";
  
  $app.appendChild(Header());
  $app.appendChild(Main());
  

  Router();


  console.log("Raiz de la app que ejecuta todos los componentes");
}