const Soup = ({ classes, changeInput }) => {
  return (
    <>
      <label className={classes.DishInput}>
        <span>Spiciness Scale </span>
        <input
          type="number"
          name="spiciness_scale"
          min="1"
          max="10"
          required
          onChange={changeInput}
        ></input>
      </label>
    </>
  );
};

export default Soup;
