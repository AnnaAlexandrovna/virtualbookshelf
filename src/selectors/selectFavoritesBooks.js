export const selectFavoritesBooks = state => Object.values(state.favorites?.books ?? {});