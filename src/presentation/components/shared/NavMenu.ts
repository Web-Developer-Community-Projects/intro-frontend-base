const menuOptions = [
  {
    name: "Home",
    url: "#/",
  },
  {
    name: "Bryan",
    url: "#/bryan",
  },
  {
    name: "Lautaro",
    url: "#/lautaro",
  },
  {
    name: "Justin",
    url: "#/justin",
  },
  {
    name: "Diego",
    url: "#/diego",
  },
  {
    name: "Jonatan",
    url: "#/jonatan",
  },
  {
    name: "Miguel",
    url: "#/miguel",
  },
];

export function NavMenu() {
  const $styles = document.querySelector<HTMLStyleElement>("#dynamic-styles")!;
  $styles.innerHTML += /*css*/ `
    .nav-menu {
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      background-color: var(--second-color);
    }
    .nav-menu a {
      border-bottom: 4px solid transparent;
      color: var(--white-color);
      transition: border-bottom 0.3s;
    }
    .nav-menu a:hover {
      border-bottom: 4px solid white;
    }
  `;

  const $navMenu = document.createElement("nav");
  $navMenu.id = "nav-menu";
  $navMenu.classList.add("nav-menu");

  let html = "";

  menuOptions.forEach((option) => { 
    html += /*html*/ `
      <a href=${option.url}>${option.name}</a>;
    `;
  });

  $navMenu.innerHTML = html;

  return $navMenu;
}
