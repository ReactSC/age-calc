import React,{ useState } from 'react';
import { AgeContext } from './Contexts';



const Provider=(props)=> {
  const [age, setAge] = useState({
    init: new Date(0),
    def: 0,
    final: Date.now()
  });

  const [select, setSelect] = useState({
    init    : true,
    def     : false,
    final   : false
  })

  const setSelects = attr => {
    setSelect({
      ...select,
      [attr]: true
    })
  }
  // const access = {
  //   init    : age.init,
  //   def     : age.def,
  //   final   : age.final
  // }

  const access = {
    init        : select.init,
    def         : select.def,
    final       : select.final,
    setSelects,
  }



  return(
    <AgeContext.Provider value={access} >
      { props.children }
    </AgeContext.Provider>
  )
}

export default Provider;
