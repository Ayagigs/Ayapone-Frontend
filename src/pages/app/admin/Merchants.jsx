import DataTable from 'react-data-table-component'
import { HiPlus } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import DummyMerchantProducts from '../../../data/DummyMerchantProducts'

const Merchants = () => {
  const columns = [
    {
      name: 'Product Name',
      selector: row => row.productName,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true,
    },
    // {
    //   name: 'Quantity Confirmed',
    //   selector: row => row.quantityConfirmed,
    // },
    {
      name: 'Quantity Sold',
      selector: row => row.quantitySold,
    },
    {
      name: 'Pending Orders',
      selector: row => row.pendingOrders,
    },
    {
      name: 'Earnings',
      selector: row => row.earnings,
      sortable: true,
    },
  ];

  return (
    <main className='p-11 mt-12'>
      <div className='flex flex-wrap gap-4 mt-6'>
        <div className='bg-white shadow-8 rounded-lg h-auto w-[1112px] p-6 flex flex-col space-y-8'>
          <div className='flex flex-row justify-between w-full space-x-10'>
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
          <div>
            <DataTable
              pagination
              columns={columns}
              data={DummyMerchantProducts}
              selectableRows
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Merchants;
