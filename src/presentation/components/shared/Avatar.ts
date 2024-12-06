interface AvatarProps { 
  imgUrl: string;
  fallback?: string;
}


export function Avatar({ imgUrl, fallback = "Avatar Perfil" }: AvatarProps): HTMLDivElement {
  
  const $avatarContainer = document.createElement("div");
  $avatarContainer.style.position = "relative"; 
  $avatarContainer.style.display = "inline-block";
  $avatarContainer.style.width = "50px";
  $avatarContainer.style.height = "50px";
  $avatarContainer.style.borderRadius = "50%";
  $avatarContainer.style.overflow = "hidden";
  $avatarContainer.style.backgroundColor = "#ccc"; 

  // Crear el elemento <img>
  const $avatar = document.createElement("img");
  $avatar.src = imgUrl;
  $avatar.alt = fallback;
  $avatar.style.width = "100%";
  $avatar.style.height = "100%";
  $avatar.style.objectFit = "cover";

  // Agregar evento onError para manejar la imagen fallida
  $avatar.onerror = () => {
    $avatar.style.display = "none"; // Oculta la imagen si falla

    // Crear un div para las iniciales como fallback
    const $initials = document.createElement("div");
    $initials.textContent = getInitials(fallback);
    $initials.style.display = "flex";
    $initials.style.alignItems = "center";
    $initials.style.justifyContent = "center";
    $initials.style.width = "100%";
    $initials.style.height = "100%";
    $initials.style.color = "#fff";
    $initials.style.fontSize = "20px";
    $initials.style.fontWeight = "bold";
    $initials.style.backgroundColor = "#6c757d"; // Color de fondo de fallback

    $avatarContainer.appendChild($initials); // Agrega las iniciales al contenedor
  };

  // Agregar la imagen al contenedor
  $avatarContainer.appendChild($avatar);

  return $avatarContainer;
}

function getInitials(name: string): string {
  const words = name.trim().split(" ");
  return words.map((word) => word[0]).join("").toUpperCase().slice(0, 2); // Máximo 2 iniciales
}