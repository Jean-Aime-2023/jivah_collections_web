import React from 'react';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { BsCart3 } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { XChart } from '@/components/app/XChart';
import { HalfChart } from '@/components/app/HalfChart';
import { DataTable } from '@/components/app/DataTable';

const data = [
  {
    id: 1,
    title: 'Total Sales',
    amount: '$ 13,456',
    discount: '3.34%',
    down: false,
    icon: <HiOutlineCurrencyDollar size={23} />,
    bright: true,
    since: 'last week',
  },
  {
    id: 2,
    title: 'Total Orders',
    amount: '58,456',
    discount: '2.34%',
    down: true,
    icon: <BsCart3 size={23} />,
    bright: false,
    since: 'last month',
  },
  {
    id: 3,
    title: 'Total Visitors',
    amount: '10,456',
    discount: '3.34%',
    down: false,
    icon: <VscAccount size={23} />,
    bright: false,
    since: 'last week',
  },
];

const Dashboard = () => {
  return (
    <div className="flex sm text- flex-col gap-7">
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        {data.map((data) => (
          <div
            className={`flex items-center justify-between border shadow p-6 h-[10rem] rounded-xl ${
              data.bright ? 'bg-[#fceec5]' : 'bg-white'
            }`}
            key={data.id}
          >
            <div className="flex flex-col justify-between h-full">
              <p className="text-sm">{data.title}</p>
              <p className="text-3xl max-md:text-xl">{data.amount}</p>
            </div>
            <div className="flex flex-col h-full justify-between items-end text-end">
              <div
                className={`${
                  data.bright ? 'bg-orange-500 text-white' : 'bg-gray-50 border'
                } rounded-lg p-2 w-fit`}
              >
                {data.icon}
              </div>
              <div>
                <p
                  className={`${data.down ? 'text-red-500' : 'text-green-500'}`}
                >
                  {data.discount ? '-' : '+'}
                  {data.discount}
                </p>
                <p>since {data.since}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-7 max-xl:grid-cols-2 max-md:grid-cols-1">
        <div className="col-span-2 max-xl:col-span-2">
          <XChart />
        </div>
        <div className="max-xl:col-span-2">
          <HalfChart />
        </div>
      </div>
      <div className='bg-white p-4 border shadow rounded-xl'>
        <p className='font-semibold text-lg'>Users</p>
        <DataTable />
      </div>
    </div>
  );
};

export default Dashboard;
