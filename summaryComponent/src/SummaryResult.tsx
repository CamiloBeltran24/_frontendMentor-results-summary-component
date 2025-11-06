import './App.css'
import { SummaryList } from './components/SummaryList/SummaryList';
import { SummaryTopInfo } from './components/SummaryTopInfo/SummaryTopInfo';




function SummaryResult() {
  
  return (
    <>
      <section className="summary">
        <SummaryTopInfo total={76} />
        <SummaryList />
       
      </section>
      
    </>
  )
}

export default SummaryResult