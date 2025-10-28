import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Button/Button';
import { SummaryList } from './components/SummaryList/SummaryList';




function SummaryResult() {
  
  return (
    <>
      
      <Button label="Continue" />
      <SummaryList />
      
    </>
  )
}

export default SummaryResult