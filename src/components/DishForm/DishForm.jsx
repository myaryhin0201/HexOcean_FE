import { useState } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { dishesOperations } from '../../redux/dishes';
import PropTypes from 'prop-types';
import aaaa from './DishFormStyles';
import Pizza from '../SelectedOptions/Pizza';
import Soup from '../SelectedOptions/Soup';
import Sandwich from '../SelectedOptions/Sandwich';

const { customStyles, useStyles } = aaaa;

const initialState = {
  name: '',
  preparation_time: '',
  type: null,
  no_of_slices: '',
  spiciness_scale: '',
  diameter: '',
  slices_of_bread: '',
};

const options = [
  { value: 'Pizza', label: 'Pizza' },
  { value: 'Soup', label: 'Soup' },
  { value: 'Sandwich', label: 'Sandwich' },
];

const DishForm = ({ onSubmit }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState(initialState);
  const {
    name,
    preparation_time,
    type,
    no_of_slices,
    spiciness_scale,
    diameter,
    slices_of_bread,
  } = inputValue;

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(
      name,
      preparation_time,
      type,
      no_of_slices,
      spiciness_scale,
      diameter,
      slices_of_bread,
    );
    setInputValue(initialState);
    e.currentTarget.reset();
  };

  const changeInput = e => {
    const { name, value } = e.currentTarget;
    setInputValue({ ...inputValue, [name]: value });
  };

  const changeInputSelect = selectedOption => {
    setInputValue({ ...inputValue, type: selectedOption.value });
  };

  return (
    <form onSubmit={handleSubmit} className={classes.DishForm}>
      <label className={classes.DishInput}>
        <span>Dish Name</span>
        <input
          type="text"
          name="name"
          autoFocus
          required
          placeholder="Enter your dish name"
          onChange={changeInput}
        />
      </label>
      <label className={classes.DishInput}>
        <span>Preparation Time</span>
        <input
          name="preparation_time"
          type="time"
          step="1"
          required
          onChange={changeInput}
        />
      </label>
      <label className={classes.DishInput}>
        <span>Dish Type</span>
        <Select
          styles={customStyles}
          name="type"
          options={options}
          required
          onChange={changeInputSelect}
        />
      </label>
      {inputValue.type === 'Pizza' ? (
        <Pizza classes={classes} changeInput={changeInput} />
      ) : inputValue.type === 'Soup' ? (
        <Soup classes={classes} changeInput={changeInput} />
      ) : inputValue.type === 'Sandwich' ? (
        <Sandwich classes={classes} changeInput={changeInput} />
      ) : (
        ''
      )}
      <button type="submit">Order Dish</button>
    </form>
  );
};

DishForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (
    name,
    preparation_time,
    type,
    no_of_slices,
    spiciness_scale,
    diameter,
    slices_of_bread,
  ) => {
    dispatch(
      dishesOperations.addDish(
        name,
        preparation_time,
        type,
        no_of_slices,
        spiciness_scale,
        diameter,
        slices_of_bread,
      ),
    );
  },
});

export default connect(null, mapDispatchToProps)(DishForm);
