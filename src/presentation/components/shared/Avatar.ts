interface AvatarProps { 
  imgUrl: string;
  fallback?: string;
}


export function Avatar({imgUrl,fallback = "Avatar Perfil"}: AvatarProps) {
  const $avatar = document.createElement('img');
  $avatar.src = imgUrl;
  $avatar.alt = fallback;


  // TODO: Crear funcionalidad de aparecer iniciales de fallback en caso de que la url de imagen esté mal refenciada

  return $avatar;
}