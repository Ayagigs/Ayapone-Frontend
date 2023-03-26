import Ayp from '../../../assets/icons/ayp.svg'
import BrownCart from '../../../assets/icons/brown_cart.svg'
import GreenBag from '../../../assets/icons/green_bag.svg'
import HistoryBag from '../../../assets/icons/history_bag.svg'
import CounterCard from './components/CounterCard'

const BuyerDashboard = () => {
  return (
    <main className='p-11 mt-12'>
      <div className='flex flex-wrap mt-6'>
        <div className='bg-white shadow-8 rounded-lg min-h-[626px] w-[716px] p-6 flex justify-between flex-col'>
          <h3 className={`font-medium text-base text-ayaNeutral-600`}>
            {`Cart (4)`}
          </h3>
          <div>

          </div>
        </div>
        <div className='bg-white shadow-8 rounded-lg h-64 w-[354px] p-6 flex justify-between flex-col'>
          <h3 className={`font-medium text-base text-ayaNeutral-600`}>
            Order Summary
          </h3>
          <div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default BuyerDashboard;
