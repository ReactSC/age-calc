import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Card, CardContent, FormControlLabel, Checkbox } from '@material-ui/core';
// import { CheckBox } from '@material-ui/icons';
import { Field } from 'formik';


const useStyle = makeStyles({
  wrap: {
    paddingLeft:5,
    paddingRight:5
  },
  card:{
    marginBottom:10,
    marginTop:10
  }
})


const DateInput = props => {
const classes = useStyle()
const { sl, name, disabled } = props;
// console.log(props)

const vars= ["Date","Month","Year"];

const [state, setState] = useState({
  init:false,
  def:false,
  final:false
})

// const a = state.filter(state=> sl===state)
// console.log(a)
// const { init, def, final } = state;
const handleChange = name => event => {
  setState({ ...state, [name]: event.target.checked });
  console.log(sl, state)
};

// const check = () => sl==='init'? state.init: sl==='def'?state.def : sl==='final'?state.final:undefined;

  return (
    <Fragment>
      <Card
        className   = {classes.card}
        variant     = "elevation" >

        <CardContent>
          <FormControlLabel
            control={ <Checkbox
              checked   = { sl==='init'? state.init: sl==='def'?state.def : sl==='final'?state.final:undefined }
              onChange  = { handleChange(sl) }
              value     = { sl } /> }
              label     = {<Typography variant="h5">{ name }</Typography>}
          />

          <Grid container justify="space-around">
            <Grid 
              item
              xs          = {3}
              className   = {classes.wrap} >
              <Field 
                as          = {TextField}
                type        = "number"
                name        = {`${sl}${vars[0]}`}
                label       = {vars[0]}
                disabled    = {disabled && disabled===true?true:false} />
            </Grid>
            <Grid 
              item
              xs          = {3}
              className   = {classes.wrap} >
              <Field
                as          = {TextField}
                type        = "number"
                name        = {`${sl}${vars[1]}`}
                label       = {vars[1]}
                disabled    = {disabled && disabled===true?true:false} />
            </Grid>
            <Grid 
              item
              xs          = {5}
              className   = {classes.wrap} >
              <Field
                as          = {TextField}
                type        = "number"
                name        = {`${sl}${vars[2]}`}
                label       = {vars[2]}
                disabled    = {disabled && disabled===true?true:false} />
            </Grid> 
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  )
}

export default DateInput
