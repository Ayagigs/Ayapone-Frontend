import { Link } from 'react-router-dom'
import routes from '../../navigation/routes'

const ProductItem = ({
  image,
  productName,
  price,
  bgColor,
  scale
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl h-[400px] w-[400px] p-10 bg-${bgColor}`}>
      <div className='w-[134px]'>
        <span className='text-ayaNeutral-600 font-medium text-2xl'>{productName}</span>
      </div>

      <img
        className={`place-self-center pt-[78px] ${scale}`}
        draggable={false}
        src={image}
        alt=''
      />
    </div>
  );
};

export default ProductItem;
