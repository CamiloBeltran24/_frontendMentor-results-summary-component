import React from 'react'
import SummaryResult from '../../SummaryResult';

interface SummaryItemProps {
    quantity : number,
}

export const SummaryItem = ({ quantity } : SummaryItemProps) => {
  return (
    <div>
        <span className=''></span>
        <span>{ quantity } / 100</span>
    </div>
  )
}
