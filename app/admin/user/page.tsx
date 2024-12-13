import { DataTableMain } from '@/components/app/DataTableMain';
import React from 'react';

const Users = () => {
  return (
    <div className="bg-white p-4 border shadow rounded-xl">
      <p className="font-semibold text-lg">All Users</p>
      <DataTableMain />
    </div>
  );
};

export default Users;
