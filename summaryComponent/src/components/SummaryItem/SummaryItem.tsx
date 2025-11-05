import './SummaryItem.css';
interface SummaryItemProps {
    quantity : number,
    name : string,
    icon: string,
}

export const SummaryItem = ({ quantity, name, icon } : SummaryItemProps) => {
  return (
    <article className={`summary__item ${name.toLowerCase()}`}>
        <div className="label">
          <img src={`${icon}`} alt={`icon of ${name}`} className="icon" />
          <h3 className='text-preset-6__medium'>{name}</h3>
        </div>
        <span className='text-preset-6__bold'>{ quantity } <span className='amount'>/ 100</span></span>
    </article>
  )
}
