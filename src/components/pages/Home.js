import React, { Fragment, useState, forwardRef } from 'react';
import DateInput from '../DateInput';
import { Formik, Form } from 'formik';
import { Container, Button, Slide, Dialog, Typography } from '@material-ui/core';


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Home = () =>{
// for Dialog Box
  const [open, setOpen] = useState(false);

// for CheckBox
  const [select, setSelect] = useState({
    init    : false,
    def     : false,
    final   : false
  })

  // Calculation od Age
  const Y = 31557600000;
  const single = {
    year: Y,
    month: Y/12,
    day: Y/365
  }
  const getTime = timeStamp => {
    const days = timeStamp / single.day;
    const year = Math.floor(days / 365);
    const daysCarry = Math.floor(days % 365);
    const month = Math.floor(daysCarry / 30);
    const day = Math.floor(daysCarry % 30);
    return { year, month, day}
  }

// 
  const [age, setAge] = useState({
    init: {year:0, month:0,day:0},
    def: {year:0, month:0,day:0},
    final: {year:0, month:0,day:0}
  })




  const [initialValues, setInitialValues] = useState({
    initDate    : new Date(0).getDate(),
    initMonth   : new Date(0).getMonth()+1,
    initYear    : new Date(0).getFullYear(),
    defDate     : new Date(0).getDate(),
    defMonth    : new Date(0).getMonth()+1,
    defYear     : new Date(0).getYear(),
    finalDate   : new Date().getDate(),
    finalMonth  : new Date().getMonth()+1,
    finalYear   : new Date().getFullYear()
  })


  const submitHandler = values => {
    const { initDate, initMonth, initYear, defDate, defMonth, defYear, finalDate, finalMonth, finalYear } = values;

    const init = 
      new Date(Number(initYear),
      Number(initMonth)-1,
      Number(initDate)).valueOf()

    // const def =
    //   new Date(Number(defYear),
    //   Number(defMonth)-1,
    //   Number(defDate)).valueOf()

    const final =
      new Date(Number(finalYear),
      Number(finalMonth)-1,
      Number(finalDate)).valueOf()
    
    const initTimeStamp = init.valueOf()
    const finalTimeStamp = final.valueOf()
    const defTimeStamp = initTimeStamp >0 ? finalTimeStamp - initTimeStamp : finalTimeStamp + initTimeStamp ;
    
    setAge({
      init: getTime(initTimeStamp),
      def: getTime(defTimeStamp),
      final: getTime(finalTimeStamp)
    })
  
    setOpen(true)
  }
  
  return(
    <Fragment>
      <Formik
        initialValues={ initialValues }
        onSubmit={submitHandler}
      >
        <Form>
          <DateInput name="Birth Date" sl="init" disabled={select.init} />
          {/* <DateInput name="Age" sl="def" disabled={select.def} /> */}
          <DateInput name="Today" sl="final" disabled={select.final} />
          <Button
            variant   = "contained"
            color     = "primary"
            size      = "large"
            style     = {{padding:15}}
            type      = "submit"
            fullWidth >Calculate</Button>
        </Form>

      </Formik>
        <Dialog
          open                  = {open}
          TransitionComponent   = {Transition}
          onClose               = {()=> setOpen(false)}
          aria-labelledby       = "alert-dialog-slide-title"
          aria-describedby      = "alert-dialog-slide-description"
          keepMounted
        >
        <Container style = {{padding:15, minWidth:300}}>
          <Typography variant="h4" style={{textAlign:'center'}}>
            Your Age
          </Typography>
          <Typography variant="h6" style={{textAlign:'center',marginTop:10}} >
            {`${ age.def.year } year 
            ${ age.def.month } month 
            ${ age.def.day } days`}
          </Typography>
        </Container>
      </Dialog>
    </Fragment>
  )
}
export default Home;