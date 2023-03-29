import { Link } from 'react-router-dom'
import routes from '../../navigation/routes'
import Ayp from '../../assets/icons/ayp.svg'

const SponsoredProductItem = ({
  image,
  productName,
  price
}) => {
  return (
    <div className={`flex flex-col overflow-hidden rounded-2xl h-[276px] w-[294px] text-center px-5 py-6 border mt-10 mx-5`}>
      <div className='flex justify-center items-center h-[148px]'>
        <img
          className={`place-self-center`}
          draggable={false}
          src={image}
          alt=''
        />
      </div>
      <div className='w-full text-left space-y-1'>
        <p className='text-black font-normal text-base'>{productName}</p>
        <div className='flex flex-row justify-between'>
          <div>
            <p className='text-ayaNeutral-700 gap-2 flex flex-row items-center'>
              <img src={Ayp} alt="" className='h-[18px] w-[18px]' /> {price}
            </p>
            <p className='text-ayaNeutral-500'>4576 USDT</p>
          </div>
          <div>
            <span className='text-ayaDanger-200 bg-ayaDanger-100 py-1 px-2 rounded-[20px]'>Limited Stock</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsoredProductItem;
