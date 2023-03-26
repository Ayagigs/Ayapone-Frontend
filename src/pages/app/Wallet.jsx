// import image from '../../../assets/images/cart_oraimo.png'
import Ayp from '../../assets/icons/ayp.svg'

const Wallet = () => {
  return (
    <main className='p-11 mt-12'>
      <div className='flex flex-wrap gap-3 mt-6'>
        <div className='w-[624px] flex-col'>
          <div className='bg-white shadow-8 rounded-lg h-[136px] p-6 flex flex-col'>
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
              </div>
            </div>
          </div>

          <div className='mt-5 bg-white shadow-8 rounded-lg h-64 p-6 flex flex-col'>
            <h3 className={`font-medium text-base text-ayaNeutral-600`}>
              {`Ayapone Activity`}
            </h3>
            <div className='w-full flex flex-wrap'>
              {/* <CartItem name={'Oraimo Freepods 3'} image={image} color={'Black'} quantity={2} price={26.49} /> */}
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
            {/* <CartItem name={'Oraimo Freepods 3'} image={image} color={'Black'} quantity={2} price={26.49} /> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Wallet;
