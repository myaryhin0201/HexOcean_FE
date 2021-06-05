import PropTypes from 'prop-types';
import useStyles from './DishItemStyles';
const DishItem = ({
  name,
  preparation_time,
  type,
  no_of_slices,
  spiciness_scale,
  diameter,
  slices_of_bread,
}) => {
  const classes = useStyles();
  return (
    <li className={classes.DishItem}>
      <p className={classes.DishName}>{name}</p>
      <p className={classes.DishProp}>{preparation_time}</p>
      <p className={classes.DishProp}>{type}</p>
      <p className={classes.DishProp}>{no_of_slices}</p>
      <p className={classes.DishProp}>{spiciness_scale}</p>
      <p className={classes.DishProp}>{diameter}</p>
      <p className={classes.DishProp}>{slices_of_bread}</p>
    </li>
  );
};
DishItem.propTypes = {
  name: PropTypes.string.isRequired,
  preparation_time: PropTypes.string,
  type: PropTypes.string,
  no_of_slices: PropTypes.string,
  spiciness_scale: PropTypes.string,
  diameter: PropTypes.string,
  slices_of_bread: PropTypes.string,
};
export default DishItem;
