import { Link } from 'react-router-dom'
import routes from '../../navigation/routes'
import Ayp from '../../assets/icons/ayp.svg'

const ProductItem = ({
  image,
  productName,
  price
}) => {
  return (
    <div className={`flex flex-col overflow-hidden rounded-2xl h-[308px] w-[188px] text-center px-5 py-6 border mt-10 mx-5`}>
      <div className='flex justify-center items-center h-[178px]'>
        <img
          className={`place-self-center`}
          draggable={false}
          src={image}
          alt=''
        />
      </div>
      <div className='w-full text-left space-y-1'>
        <p className='text-black font-normal text-base'>{productName}</p>
        <p className='text-ayaNeutral-700 gap-2 flex flex-row items-center'>
          <img src={Ayp} alt="" className='h-[18px] w-[18px]' /> {price}
        </p>
        <p className='text-ayaNeutral-500'>100 USDT</p>
      </div>
    </div>
  );
};

export default ProductItem;
