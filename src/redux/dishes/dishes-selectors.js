const getLoading = state => state.dishes.loading;
const getError = state => state.dishes.error;
const getFilter = state => state.dishes.filter;
const getAllDishes = state => state.dishes.items;

// eslint-disable-next-line
export default {
  getLoading,
  getError,
  getFilter,
  getAllDishes,
};
