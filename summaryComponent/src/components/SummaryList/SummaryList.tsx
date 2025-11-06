import { SummaryItem } from '../SummaryItem/SummaryItem';
import './SummaryList.css';
import { Button } from '../Button/Button';

interface Item {
    name: string,
    quantity: number,
    icon: string,
}

let  items : Item[] = [
  { name: 'Reaction', quantity: 80, icon: '/assets/svg/icon-reaction.svg' },
  { name: 'Memory', quantity: 92, icon: '/assets/svg/icon-memory.svg' },
  { name: 'Verbal', quantity:61, icon: '/assets/svg/icon-verbal.svg' },
  { name: 'Visual', quantity: 73, icon: '/assets/svg/icon-visual.svg' }
];


export const SummaryList = () => {
  return (

    <>
        <section className="summary__list">
          <h2 className="text-preset-5__bold">Summary</h2>
          {
            items.map( item => (
              <SummaryItem quantity={item.quantity} name={item.name} icon={item.icon} />
            ))
          }

           <Button label="Continue" />
            
        </section>
    </>
    
  )
}
