import Ayp from '../../../assets/icons/ayp.svg'
import BrownCart from '../../../assets/icons/brown_cart.svg'
import GreenBag from '../../../assets/icons/green_bag.svg'
import HistoryBag from '../../../assets/icons/history_bag.svg'
import CounterCard from './components/CounterCard'

const BuyerDashboard = () => {
  return (
    <main className='p-11 mt-12'>
      <div className='flex flex-wrap gap-4'>
        <CounterCard title='Items Purchased' icon={GreenBag} count='24' />
        <CounterCard title='Pending Orders' icon={HistoryBag} count='5' />
        <CounterCard title='Items in cart' icon={BrownCart} count='13' />
        <CounterCard title='Aya Points' icon={Ayp} count='104' />
      </div>
      
      <div>

      </div>
    </main>
  );
};

export default BuyerDashboard;
