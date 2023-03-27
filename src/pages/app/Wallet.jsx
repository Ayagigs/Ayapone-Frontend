import Ayp from '../../assets/icons/ayp.svg'
import AypActivityItem from './components/wallet/AypActivityItem'
import RecentTransactionItem from './components/wallet/RecentTransactionItem'
import { BiPlus } from 'react-icons/bi'

const Wallet = () => {
  return (
    <main className='p-11 mt-12'>
      <div className='flex flex-wrap gap-3 mt-6'>
        <div className='w-[624px] flex-wrap'>
          <div className='font-normal text-base flex item-center py-4 justify-between bg-white shadow-8 rounded-lg h-[136px] p-6 flex-col flex-wrap w-full'>
            <div className='flex item-center gap-4'>
              <img src={Ayp} alt="" />
              <div>
                <p><span className='font-medium text-4xl'>57</span>AYP</p>
                <p className='font-medium text-xs'>Total Balance</p>
              </div>
            </div>
            <div className='flex item-right'>
              <button
                className='bg-ayaPrimary-600 font-semibold rounded-[8px] text-white w-[186px] h-[50px] flex justify-center items-center'
              >
                <BiPlus /> Fund Wallet
              </button>
            </div>
          </div>

          <div className='mt-5 bg-white shadow-8 rounded-lg h-auto p-6 flex flex-col'>
            <h3 className={`font-medium text-base text-ayaNeutral-600`}>
              {`Ayapone Activity`}
            </h3>
            <div className='w-full flex flex-wrap'>
              <ul className='w-full'>
                <AypActivityItem isCompleted={true} reason={'Create an Ayapone Account'} points={'10 AYP'} />
                <AypActivityItem isCompleted={true} reason={'Verify Ayapone Account'} points={'20 AYP'} />
                <AypActivityItem isCompleted={true} reason={'Place your first order'} points={'50 AYP'} />
                <AypActivityItem isCompleted={true} reason={'Fund your Ayapone Wallet'} points={'7 AYP'} />
                <AypActivityItem reason={'Purchase over 2000 USDT worth of items'} points={'200 AYP'} />
              </ul>
            </div>
            {/* <button
              className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[344px] h-[50px] flex space-x-2 justify-center items-center'
            >
              Checkout
            </button> */}
          </div>
        </div>
        <div className='bg-white shadow-8 rounded-lg h-auto w-[440px] p-6'>
          <h3 className={`font-medium text-base text-ayaNeutral-600`}>
            {`Recent Transactions`}
          </h3>
          <div className='w-full flex flex-wrap'>
            <ul className='w-full'>
              <RecentTransactionItem reason={'Oraimo Freepods 3'} amount={'150 AYP'} date={'22nd Feb, 2023'} statusColor={'bg-ayaSuccess-200'} />
              <RecentTransactionItem reason={'Oraimo Freepods 3'} amount={'150 AYP'} date={'22nd Feb, 2023'} statusColor={'bg-ayaSuccess-200'} />
              <RecentTransactionItem reason={'Oraimo Freepods 3'} amount={'150 AYP'} date={'22nd Feb, 2023'} statusColor={'bg-ayaSuccess-200'} />
              <RecentTransactionItem reason={'Macbook Pro 2022'} amount={'25,467 AYP'} date={'22nd Feb, 2023'} statusColor={'bg-ayaDanger-200'} />
              <RecentTransactionItem reason={'Oraimo Freepods 3'} amount={'150 AYP'} date={'22nd Feb, 2023'} statusColor={'bg-ayaSuccess-200'} />
              <RecentTransactionItem reason={'Macbook Pro 2022'} amount={'25,467 AYP'} date={'22nd Feb, 2023'} statusColor={'bg-ayaDanger-200'} />
              <RecentTransactionItem reason={'Oraimo Freepods 3'} amount={'150 AYP'} date={'22nd Feb, 2023'} statusColor={'bg-ayaSuccess-200'} />
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Wallet;
