const Sandwich = ({ classes, changeInput }) => {
  return (
    <>
      <label className={classes.DishInput}>
        <span>Slices Of Bread</span>
        <input
          type="number"
          name="slices_of_bread"
          required
          onChange={changeInput}
        ></input>
      </label>
    </>
  );
};

export default Sandwich;
