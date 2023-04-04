const Orders = () => {
  return (
    <main className='p-11 mt-12'>
      <div className='flex flex-wrap gap-4 mt-6'>
        <div className='bg-white shadow-8 rounded-lg h-auto w-[1112px] p-6 flex flex-col'>
          <div className='flex flex-row'>
            <select name="" id="">
              <option defaultValue="">All Products</option>
              <option value="">Product One</option>
              <option value="">Product Two</option>
              <option value="">Product Three</option>
            </select>

            <select name="" id="">
              <option defaultValue="">Sort by</option>
              <option value="">Recent</option>
              <option value="">Oldest</option>
            </select>

            <button
              className='bg-ayaPrimary-600 font-bold rounded-[8px] mt-12 text-white w-[426px] h-[50px] flex space-x-2 justify-center items-center'
              
            >
              Next 
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Orders;
