import React from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        '&$checked':{
            color:'#000',
        },
    },
    checked:{},
    wrap:{
        width: '100%',
        display: 'flex',
        flexDirection:'row-reverse',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:0,
    },
    label:{
        fontSize:'.8rem',
        fontFamily:`"Raleway", sans-serif`
    }
})

const CheckBoxProton = ({ cuisine, changeChecked }) => {
    const classes = useStyles()
    const {checked, label,id} = cuisine;
  return (
    <div>
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.warp,
        }}
        control={
          <Checkbox
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
          />
        }
        label={label}
      />
    </div>
  );
};

export default CheckBoxProton
