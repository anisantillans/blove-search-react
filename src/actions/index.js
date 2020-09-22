export const setFavorite = (payload) => ({
  type: 'SET_FAVORITE', //es el nombre que le vamos a dar a nuestro action
  payload, //la información que estamos pasando al reducer
});

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});
