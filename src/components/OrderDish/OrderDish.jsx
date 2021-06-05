import DishesList from '../DishesList';
import DishForm from '../DishForm';
import Spinner from '../Loader';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { dishesOperations, dishesSelectors } from '../../redux/dishes';

const Phonebook = ({ isLoading, isError, fetchDishes }) => {
  // eslint-disable-next-line
  useEffect(() => fetchDishes(), []);

  return (
    <>
      <h2>Order dish</h2>
      <DishForm />
      <h2>Dishes</h2>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <p>Oops, we have some loading error! :(</p>
      ) : (
        <DishesList />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  isLoading: dishesSelectors.getLoading(state),
  isError: dishesSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(dishesOperations.fetchDishes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
