import axios from 'axios';
import actions from './dishes-actions';

axios.defaults.baseURL = 'http://localhost:4040';
// frosty-wood-6558.getsandbox.com/dishes

const {
  fetchDishRequest,
  fetchDishSuccess,
  fetchDishError,
  addDishRequest,
  addDishSuccess,
  addDishError,
} = actions;

const fetchDishes = () => async dispatch => {
  dispatch(fetchDishRequest());
  try {
    const { data } = await axios.get('/dishes');
    console.log(data);
    dispatch(fetchDishSuccess(data));
  } catch (error) {
    dispatch(fetchDishError(error));
  }
};

const addDish = (
  name,
  preparation_time,
  type,
  no_of_slices,
  spiciness_scale,
  diameter,
  slices_of_bread,
) => async dispatch => {
  const dish = {
    name,
    preparation_time,
    type,
    no_of_slices,
    spiciness_scale,
    diameter,
    slices_of_bread,
  };
  dispatch(fetchDishRequest());
  try {
    dispatch(addDishRequest());
    axios
      .post('/dishes', dish)
      .then(({ data }) => dispatch(addDishSuccess(data)))
      .catch(err => dispatch(addDishError(err)));
  } catch (error) {
    dispatch(fetchDishError(error));
  }
};

// eslint-disable-next-line
export default { addDish, fetchDishes };
