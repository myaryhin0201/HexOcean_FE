const Pizza = ({ classes, changeInput }) => {
  return (
    <>
      <label className={classes.DishInput}>
        <span>Number Of Slices</span>
        <input
          type="number"
          name="no_of_slices"
          min="1"
          max="8"
          required
          onChange={changeInput}
        ></input>
      </label>
      <label className={classes.DishInput}>
        <span>Diameter</span>
        <input
          type="number"
          name="diameter"
          step="0.1"
          required
          onChange={changeInput}
        ></input>
      </label>
    </>
  );
};

export default Pizza;
