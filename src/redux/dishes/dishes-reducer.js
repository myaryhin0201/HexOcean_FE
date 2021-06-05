import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './dishes-actions';

const {
  fetchDishRequest,
  fetchDishSuccess,
  fetchDishError,
  addDishRequest,
  addDishSuccess,
  addDishError,
  changeFilter,
} = actions;

const items = createReducer([], {
  [fetchDishSuccess]: (_, { payload }) => payload,
  [addDishSuccess]: (state, { payload }) => [...state, payload],
});
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addDishRequest]: () => true,
  [addDishSuccess]: () => false,
  [addDishError]: () => false,
  [fetchDishRequest]: () => true,
  [fetchDishSuccess]: () => false,
  [fetchDishError]: () => false,
});

const error = createReducer(false, {
  [addDishRequest]: () => false,
  [addDishSuccess]: () => false,
  [addDishError]: () => true,
  [fetchDishRequest]: () => false,
  [fetchDishSuccess]: () => false,
  [fetchDishError]: () => true,
});

export default combineReducers({ items, filter, loading, error });
