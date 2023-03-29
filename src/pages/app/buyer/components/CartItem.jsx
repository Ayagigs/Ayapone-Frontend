import Ayp from '../../../../assets/icons/ayp.svg'
import { FaRegTrashAlt } from 'react-icons/fa'

const CartItem = ({
  name,
  image,
  quantity = 0,
  price,
  color
}) => {
  return (
    <div className='h-auto p-6 flex justify-between flex-col w-full border-b border-b-ayaNeutral-200'>
      <div className='flex gap-1 w-full'>
        <div className="flex flex-col justify-between min-w-[88px] min-h-[108px] ">
          <img src={image} alt="" className="" />
        </div>
        <div className={`font-bold text-base w-full`}>
          {name}
          <div className={`font-normal text-sm  pt-2`}>
            <span className='text-ayaNeutral-600'>Color - </span>{color}
          </div>
          <div className='font-normal pt-4 flex items-center'><FaRegTrashAlt className='pr-1'/>Remove</div>
        </div>
        <div className={`font-bold text-base w-full flex items-center`}>
          <button className='bg-ayaPrimary-300 font-bold rounded-[8px] text-white w-8 h-7 flex justify-center items-center shadow-12'>-</button>
          <h3 className={`font-normal text-base text-ayaNeutral-600 mx-4`}>
            {quantity}
          </h3>
          <button className='bg-ayaPrimary-600 font-bold rounded-[8px] text-white w-8 h-7 flex justify-center items-center shadow-12'>+</button>
        </div>
        <div className={`font-bold text-base w-full grid grid-cols-1 gap-1 place-content-center`}>
          <h3 className={`font-bold text-lg text-ayaNeutral-900 flex items-center gap-2`}>
            <img src={Ayp} alt="" className='h-[18px] w-[18px]' /> {price}
          </h3>
          <div className='font-medium text-xs pl-4'>20 USDT</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
