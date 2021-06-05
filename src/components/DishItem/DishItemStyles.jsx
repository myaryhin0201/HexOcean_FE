import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  DishItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    '&:not(:last-child)': {
      marginBottom: '10px',
    },
  },
  DishName: {
    minWidth: '150px',
  },
  DishProp: {
    width: '125px',
  },
  DishButton: {
    border: ' 2px solid rgba(255,255,255,0.27)',
    borderRadius: '0px 10px 0px 10px',
    backgroundColor: 'purple',
    color: 'white',
    '&:hover, &:focus': {
      '.ContactItem': {
        backgroundColor: 'black',
      },
      backgroundColor: 'black',
    },
  },
});
export default useStyles;
