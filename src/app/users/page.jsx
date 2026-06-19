import React from 'react'
import { getUsers } from '../lib/data';
import UsersTable from '@/components/UsersTable';
import AddUserModal from '@/components/AddUserModal';
import { createUser, deleteUser } from '../lib/actions';

const UsersPage = async () => {
    const users =await getUsers();

  return (
      <div>
          <div className='flex items-center justify-between mb-4'>
              <h2>User Management: {users.length}</h2>
              <AddUserModal createUserAction={createUser} />
          </div>
          <UsersTable users={users} deleteUserAction={deleteUser} />
      </div>
    
  )
}

export default UsersPage