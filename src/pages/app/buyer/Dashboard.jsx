import Ayp from '../../../assets/icons/ayp.svg'
import BrownCart from '../../../assets/icons/brown_cart.svg'
import GreenBag from '../../../assets/icons/green_bag.svg'
import HistoryBag from '../../../assets/icons/history_bag.svg'
import CounterCard from './components/CounterCard'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const BuyerDashboard = () => {
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  return (
    <main className='p-11 mt-12'>
      <div className='flex flex-wrap gap-4'>
        <CounterCard title='Items Purchased' icon={GreenBag} count='24' />
        <CounterCard title='Pending Orders' icon={HistoryBag} count='5' />
        <CounterCard title='Items in cart' icon={BrownCart} count='13' />
        <CounterCard title='Aya Points' icon={Ayp} count='104' />
      </div>
      
      <div className='flex flex-wrap'>
        <div className='bg-white shadow-8 rounded-lg h-[592px] w-full mt-6 p-6 flex justify-between flex-col'>
          <h3 className={`font-medium text-base text-ayaNeutral-600`}>
            Purchase History
          </h3>
          <div>
            <LineChart width={900} height={424} data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#FF7417" />
            </LineChart>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BuyerDashboard;
