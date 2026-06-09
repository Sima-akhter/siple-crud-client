import React from 'react'
import { getUsers } from '../lib/data';
import UsersTable from '@/components/UsersTable';

const UsersPage = async () => {
    const users =await getUsers();

  return (
      <div>
          <h2>User Management: {users.length}</h2>
          <UsersTable users={users} />
      </div>
    
  )
}

export default UsersPage