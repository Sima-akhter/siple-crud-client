import React from 'react'
import { getUsers } from '../lib/data';

const UresePage = async () => {
    const users =await getUsers();

  return (
    <div>UresePage</div>
  )
}

export default UresePage