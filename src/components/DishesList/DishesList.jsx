import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { dishesSelectors } from '../../redux/dishes';
import PropTypes from 'prop-types';
import DishItem from '../DishItem';
import style from '../DishItem/DishItemStyles';
const useStyles = createUseStyles({
  DishesList: {
    padding: '20px',
    border: '2px solid black',
    borderRadius: '10px',
    marginBottom: '20px',
  },
});

const DishesList = ({ dishes }) => {
  const classes = useStyles();
  const styles = style();

  return (
    <ul className={classes.DishesList}>
      <li className={styles.DishItem}>
        <p className={styles.DishName}>Name</p>
        <p className={styles.DishProp}>Type</p>
        <p className={styles.DishProp}>Slices</p>
        <p className={styles.DishProp}>Spiciness</p>
        <p className={styles.DishProp}>Preparation Time</p>
        <p className={styles.DishProp}>Diameter</p>
        <p className={styles.DishProp}>Slices Of Bread</p>
      </li>
      {dishes.length !== 0 ? (
        dishes.map(
          ({
            id,
            name,
            preparation_time,
            type,
            no_of_slices,
            spiciness_scale,
            diameter,
            slices_of_bread,
          }) => (
            <DishItem
              key={id}
              id={id}
              name={name}
              preparation_time={preparation_time}
              type={type}
              no_of_slices={no_of_slices}
              spiciness_scale={spiciness_scale}
              diameter={diameter}
              slices_of_bread={slices_of_bread}
            />
          ),
        )
      ) : (
        <p>Don't have order</p>
      )}
    </ul>
  );
};

DishesList.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  dishes: dishesSelectors.getAllDishes(state),
});

export default connect(mapStateToProps)(DishesList);
