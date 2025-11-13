import React from 'react'
import FormInput from './components/FormInput'
import ListBasic from './components/ListBasic'
import UseEffectBasic from './components/UseEffectBasic';
import FetchBasic from './components/FetchBasic';
import ConditionBasic from './components/ConditionBasic';
import BasicUseReducer from './components/BasicUseReducer';
import BasicUseReducer2 from './components/BasicUseReducer2';


const App = () => {
   const users = [
    { id: 1, name: "Chidsanupong" },
    { id: 2, name: "DEV" },
    { id: 3, name: "Chawin" },
  ];
  return (
    <div>
      {/* <FormInput/>
      <ListBasic kaika={users}/>
      <UseEffectBasic/>
      <FetchBasic/>
      <ConditionBasic/>
      <BasicUseReducer/> */}
      <BasicUseReducer2/>
    </div>
  )
}

export default App