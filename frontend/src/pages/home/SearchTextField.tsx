import { TextField, Theme, withStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';

export const SearchTextField = withStyles((theme: Theme) => createStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 30,
      backgroundColor: "#E6ECF0",
      padding: 0,
      paddingLeft: 15,
      '&.Mui-focused': {
        backgroundColor: '#fff',
        '& fieldset': {
          borderWidth: 1,
          borderColor: theme.palette.primary.main,
        },
        '& svg path': {
          fill: theme.palette.primary.main,
        },
      },
      '&:hover': {
        '& fieldset': {
          borderColor: 'transparent'
        },
      },
      '& fieldset': {
        borderColor: 'transparent',
        borderWidth: 1,
      },
    },
    '& .MuiOutlinedInput': {
      padding: '12px 14px 14px 5px',
    },
  },
}))(TextField);
