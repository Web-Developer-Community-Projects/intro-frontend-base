interface AvatarProps { 
  imgUrl: string;
  fallback?: string;
}

export function Avatar({ imgUrl, fallback = "Avatar Perfil" }: AvatarProps) {
  const $container = document.createElement('div');
  $container.style.width = '50px';
  $container.style.height = '50px';
  $container.style.borderRadius = '50%';
  $container.style.overflow = 'hidden'; // Oculta cualquier contenido que sobresalga
  $container.style.display = 'flex';
  $container.style.alignItems = 'center';
  $container.style.justifyContent = 'center';
  $container.style.backgroundColor = '#e0e0e0';

  const $avatar = document.createElement('img');
  $avatar.src = imgUrl;
  $avatar.alt = fallback;
  $avatar.style.width = '100%';
  $avatar.style.height = '100%';

  $avatar.onerror = () => {
    const initials = getInitials(fallback);
    $container.textContent = initials; // Muestra las iniciales en lugar de la imagen
    $container.style.color = '#555';
    $container.style.fontSize = '18px';
    $container.style.fontWeight = 'bold';
    $container.style.fontFamily = 'Arial, sans-serif';
    $container.style.backgroundColor = '#e0e0e0';
  };

  // TODO: Crear funcionalidad de aparecer iniciales de fallback en caso de no tener imagen

  $container.appendChild($avatar);
  return $container;

  function getInitials(name: string): string {
    const words = name.trim().split(/\s+/); // Divide por espacios
    const initials = words.slice(0, 2).map(word => word.charAt(0).toUpperCase());
    return initials.join('');
  }
}
