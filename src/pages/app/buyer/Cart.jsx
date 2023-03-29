import image from '../../../assets/images/cart_oraimo.png'
import Ayp from '../../../assets/icons/ayp.svg'
import CartItem from './components/CartItem'

const Cart = () => {
  return (
    <main className='p-11 mt-12'>
      <div className='flex flex-wrap gap-4 mt-6'>
        <div className='bg-white shadow-8 rounded-lg h-auto w-[716px] p-6'>
          <h3 className={`font-medium text-base text-ayaNeutral-600`}>
            {`Cart (4)`}
          </h3>
          <div className='w-full flex flex-wrap'>
            <CartItem name={'Oraimo Freepods 3'} image={image} color={'Black'} quantity={2} price={26.49} />
            <CartItem name={'Oraimo Freepods 3'} image={image} color={'Black'} quantity={1} price={26.49} />
            <CartItem name={'Oraimo Freepods 3'} image={image} color={'Black'} quantity={3} price={26.49} />
            <CartItem name={'Oraimo Freepods 3'} image={image} color={'Black'} quantity={1} price={26.49} />
          </div>
        </div>
        <div className='w-[344px] flex-col'>
          <div className='bg-white shadow-8 rounded-lg h-64 p-6 flex flex-col'>
            <h3 className={`font-medium text-base text-ayaNeutral-600`}>
              Order Summary
            </h3>
            <div className='h-full grid flex-col mt-4 content-between'>
              <div className='flex flex-col'>
                <div className='flex items-center justify-between'>
                  <div>Subtotal</div>
                  <div className='flex items-center gap-2'>
                    <img src={Ayp} alt="" className='h-[18px] w-[18px]' />26.49
                  </div>
                </div>
                <div className='flex items-center justify-between mt-6'>
                  <div>Delivery Fee</div>
                  <div className='flex items-center gap-2'>
                    --
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <div>Total</div>
                <div className='flex items-center gap-2'>
                  <img src={Ayp} alt="" className='h-[18px] w-[18px]' />26.49
                </div>
              </div>
            </div>
          </div>

          <div className='mt-12 '>
            <button
              className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[344px] h-[50px] flex space-x-2 justify-center items-center'
            >
              Checkout
            </button>
            <button
              className='bg-ayaPrimary-100 font-bold rounded-[8px] mt-6 text-ayaPrimary-600 w-[344px] h-[50px] flex space-x-2 justify-center items-center border border-ayaPrimary-600/20'
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
