export function Logo() {
  const $styles = document.querySelector<HTMLStyleElement>("#dynamic-styles")!;
  $styles.innerHTML += /*css*/ `
    .logo{
      display: flex;
      gap: 1rem;
    }

  `;

   const $logo = document.createElement("div");
   $logo.classList.add("logo");

   const $logoTS = document.createElement("img");
   $logoTS.src = "/typescript.svg";
   $logoTS.alt = "Logo de TypeScript";

   const $logVite = document.createElement("img");
   $logVite.src = "/vite.svg";
   $logVite.alt = "Logo de Vite";

   $logo.appendChild($logoTS);
  $logo.appendChild($logVite);
  
  return $logo;
}