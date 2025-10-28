import { SummaryItem } from '../SummaryItem/SummaryItem';
import React from 'react'


interface Item {
    name: String,
    quantity: number,
}

let  items : Item[] = [];



export const SummaryList = () => {
  return (

    <>
        <section className="summary__list">
            <SummaryItem quantity={80} />
        </section>
    </>
    
  )
}
