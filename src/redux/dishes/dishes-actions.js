import { createAction } from '@reduxjs/toolkit';

const fetchDishRequest = createAction('dishes/fetchDishRequest');
const fetchDishSuccess = createAction('dishes/fetchDishsuccess');
const fetchDishError = createAction('dishes/fetchDishError');

const addDishRequest = createAction('dishes/addDishRequest');
const addDishSuccess = createAction('dishes/addDishSuccess');
const addDishError = createAction('dishes/addDishError');

// eslint-disable-next-line
export default {
  fetchDishRequest,
  fetchDishSuccess,
  fetchDishError,
  addDishRequest,
  addDishSuccess,
  addDishError,
};
