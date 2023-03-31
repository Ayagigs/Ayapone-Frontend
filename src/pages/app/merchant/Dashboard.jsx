import Ayp from '../../../assets/icons/ayp.svg'
import FeedbackLike from '../../../assets/icons/feedback_like.svg'
import Impression from '../../../assets/icons/impression.svg'
import BaggedOrders from '../../../assets/icons/bagged_orders.svg'
import CounterCard from './components/CounterCard'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const BuyerDashboard = () => {
  return (
    <main className='p-12 mt-12'>
      <div className='flex flex-wrap gap-4'>
        <CounterCard title='Total Aya Points' icon={Ayp} count='0' />
        <CounterCard title='Total Impressions' icon={Impression} count='0' />
        <CounterCard title='Avg. Weekly Orders' icon={BaggedOrders} count='0' />
        <CounterCard title='New Feedbacks' icon={FeedbackLike} count='0' />
      </div>

    </main>
  );
};

export default BuyerDashboard;
