import OrderedItem from './components/OrderedItem'
import image from '../../../assets/images/cart_oraimo.png'

const Orders = () => {
  return (
    <main className='p-11 mt-12'>
      <div className='flex flex-wrap gap-4 mt-6'>
        <div className='bg-white shadow-8 rounded-lg h-auto w-[1112px] p-6 flex flex-col space-y-8'>
          <div className='flex flex-row w-full'>
            <div className='flex flex-row space-x-6'>
              <select name="" id="" className="text-gray-900 focus:ring-blue-500 flex h-[32px] bg-white text-sm border rounded-lg border-ayaNeutral-600 w-[136px] outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-xs placeholder:font-medium">
                <option defaultValue="">All Products</option>
                <option value="">Product One</option>
                <option value="">Product Two</option>
                <option value="">Product Three</option>
              </select>

              <select name="" id="" className="text-gray-900 focus:ring-blue-500 flex h-[32px] bg-white text-sm border rounded-lg border-ayaNeutral-600 w-[136px] outline-none px-6 placeholder:text-ayaNeutral-500 placeholder:text-xs placeholder:font-medium">
                <option defaultValue="">Sort by</option>
                <option value="">Recent</option>
                <option value="">Oldest</option>
              </select>
            </div>
          </div>
          <div className='space-y-6'>
            <OrderedItem image={image} name={`Oraimo Freepods 3`} color={`Black`} quantity={1} orderId={`12345678`} />
            <OrderedItem image={image} name={`Oraimo Freepods 3`} color={`Black`} quantity={1} orderId={`12345678`} />
            <OrderedItem image={image} name={`Oraimo Freepods 3`} color={`Black`} quantity={1} orderId={`12345678`} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Orders;