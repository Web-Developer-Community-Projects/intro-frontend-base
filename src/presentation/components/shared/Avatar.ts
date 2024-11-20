interface AvatarProps { 
  imgUrl: string;
  fallback?: string;
}


export function Avatar({imgUrl,fallback = "Avatar Perfil"}: AvatarProps) {
  const $avatar = document.createElement('img');
  $avatar.src = imgUrl;
  $avatar.alt = fallback;


  // TODO: Crear funcionalidad de aparecer iniciales de fallback en caso de no tener imagen
  $avatar.onerror = () => {
    const initials = fallback
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();

    const $textFallback = document.createElement('div');
    $textFallback.textContent = initials;
    $textFallback.setAttribute('role', 'img'); 
    $textFallback.setAttribute('aria-label', fallback);

    $avatar.replaceWith($textFallback);
  };
  
  return $avatar;
}