import './SummaryTopInfo.css';

interface SummaryTopInfoProps {
    total: number,
}

export const SummaryTopInfo = ({ total } : SummaryTopInfoProps) => {

    return (
        <>
            <section className="summary-top">
                <h2 className='text-preset-5__bold'>Your Result</h2>

                <div className="total text-preset-6__bold">
                    <span className="total-result text-preset-2">{ total }</span>
                    of 100
                </div>

                <h3 className='text-preset-4'>Great</h3>
                <p className='text-preset-6__medium'>You scored higher than 65% of the people who have taken these tests.</p>
            </section>
        </>
    );
    
}