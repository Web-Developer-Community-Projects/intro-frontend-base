interface AvatarProps { 
  imgUrl: string;
  fallback?: string;
}


export function Avatar({imgUrl,fallback = "Avatar Perfil"}: AvatarProps) {
  const $avatar = document.createElement('img');
  $avatar.src = imgUrl;
  $avatar.alt = fallback;
  
//crear div, condicion 
  $avatar.onerror = () => {
    const initials = getInitials(fallback);
    $avatar.textContent = initials;
    $avatar.style.color = '#555'; // Color del texto
    $avatar.style.fontSize = '18px';
    $avatar.style.fontWeight = 'bold';
    $avatar.style.fontFamily = 'Arial, sans-serif';
  };

  // TODO: Crear funcionalidad de aparecer iniciales de fallback en caso de no tener imagen

  return $avatar;
  
  function getInitials(name: string): string {
    const words = name.trim().split(/\s+/); // Divide por espacios
    const initials = words.slice(0, 2).map(word => word.charAt(0).toUpperCase());
    return initials.join('');
  }
}