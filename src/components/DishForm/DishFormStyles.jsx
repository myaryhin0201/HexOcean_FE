import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  DishForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '450px',
    borderRadius: '10px',
    '& button': {
      borderRadius: '20px',
      backgroundColor: '#ffc312',
      fontSize: '20px',
      padding: '5px 30px',
      transition: 'all 200ms ease-in-out',
      '&:hover, &:focus': {
        backgroundColor: 'white',
        color: 'black',
        outline: 'none ',
      },
    },
  },
  DishSelect: {
    option: provided => ({
      ...provided,
      borderBottom: '2px dotted green',
      color: 'yellow',
      backgroundColor: 'green',
    }),
    control: provided => ({
      ...provided,
      marginTop: '100px',
    }),
  },
  DishInput: {
    display: 'flex',
    width: '215px',
    flexDirection: 'column',
    marginBottom: '20px',
    '& span': {
      marginBottom: '10px',
      fontSize: '20px',
    },
    '& input': {
      minWidth: '225px',
      border: 'none',
      borderRadius: '10px',
      padding: '5px 15px',
      fontSize: '15px',
      '&:hover, &:focus': {
        outline: 'none',
      },
    },
  },
});

const customStyles = {
  option: provided => ({
    ...provided,
    '&:hover': {
      backgroundColor: '#ffc312',
    },
    '&:visited': {
      backgroundColor: 'black',
    },
  }),
  menu: provided => ({
    ...provided,
    fontSize: '25px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: 'black',
  }),
  placeholder: provided => ({
    ...provided,
    marginLeft: '10px',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const marginLeft = '18px';
    return { ...provided, opacity, transition, marginLeft };
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { useStyles, customStyles };
